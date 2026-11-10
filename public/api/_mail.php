<?php
// Gemeinsame Helfer für die Formulare auf dem All-Inkl-Webspace (PHP statt Vercel-Funktion).
// Versand über die mail()-Funktion des Webspace, ohne externen Dienst.

// Absender: eine Adresse eurer Domain. Sie muss kein echtes Postfach sein, sollte aber zur Domain gehören,
// damit die Mails nicht im Spam landen.
const FRST_MAIL_FROM = 'frst Website <noreply@frst.agency>';
const FRST_MAIL_FROM_ADDRESS = 'noreply@frst.agency';

function frst_respond(int $status, array $body): void {
  http_response_code($status);
  header('Content-Type: application/json; charset=utf-8');
  header('Cache-Control: no-store');
  echo json_encode($body);
  exit;
}

/** Liest den JSON-Body des Formulars (oder normale Formulardaten als Rückfall). */
function frst_read_body(): array {
  if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    frst_respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
  }
  $raw = file_get_contents('php://input', false, null, 0, 20000);
  $data = json_decode($raw ?: '', true);
  return is_array($data) ? $data : $_POST;
}

/** Text säubern: keine Zeilenumbrüche (Schutz gegen Header-Injection), Länge begrenzen. */
function frst_clean($value, int $max = 200): string {
  $value = is_scalar($value) ? (string) $value : '';
  return mb_substr(trim(preg_replace('/[\r\n]+/', ' ', $value)), 0, $max);
}

function frst_consent($value): bool {
  return $value === true || $value === 'true' || $value === 'on' || $value === 1 || $value === '1';
}

/** Schickt eine Mail mit den Formularzeilen als Text und HTML. */
function frst_send(string $to, string $subject, string $heading, array $rows, string $replyTo): bool {
  $text = implode("\n", array_map(fn($k, $v) => "$k: $v", array_keys($rows), $rows));
  $html = '<h2>' . htmlspecialchars($heading) . '</h2><table cellpadding="6">';
  foreach ($rows as $k => $v) {
    $html .= '<tr><td><strong>' . htmlspecialchars($k) . '</strong></td><td>' . htmlspecialchars($v) . '</td></tr>';
  }
  $html .= '</table>';

  $boundary = 'frst-' . bin2hex(random_bytes(8));
  $headers = implode("\r\n", [
    'From: ' . FRST_MAIL_FROM,
    'Reply-To: ' . $replyTo,
    'MIME-Version: 1.0',
    "Content-Type: multipart/alternative; boundary=\"$boundary\"",
  ]);
  $body = "--$boundary\r\nContent-Type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n$text\r\n"
    . "--$boundary\r\nContent-Type: text/html; charset=utf-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n$html\r\n"
    . "--$boundary--\r\n";
  $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
  return mail($to, $encodedSubject, $body, $headers, '-f' . FRST_MAIL_FROM_ADDRESS);
}
