<?php
// Newsletter-Formular („Stay Connected“) auf dem All-Inkl-Webspace.
// Gegenstück zu api/newsletter.js (Vercel): gleiche Felder, gleiche Antworten.
// Die .htaccess leitet /api/newsletter hierher.
require __DIR__ . '/_mail.php';

// Empfänger der Anmeldungen
const NEWSLETTER_TO = 'hello@frst.agency';

$body = frst_read_body();

// Honeypot: Bots füllen das versteckte Feld aus. Wir tun so, als wäre alles gut.
if (frst_clean($body['website'] ?? '') !== '') frst_respond(200, ['ok' => true]);

$firstName = frst_clean($body['firstName'] ?? '');
$lastName = frst_clean($body['lastName'] ?? '');
$email = frst_clean($body['email'] ?? '');
$lang = frst_clean($body['lang'] ?? '', 5) ?: 'en';
$page = frst_clean($body['page'] ?? '', 300);
$consent = frst_consent($body['consent'] ?? null);

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $firstName === '' || $lastName === '' || !$consent) {
  frst_respond(400, ['ok' => false, 'error' => 'invalid_input']);
}

$received = (new DateTime('now', new DateTimeZone('Europe/Berlin')))->format('d.m.Y, H:i:s');
$rows = [
  'Vorname' => $firstName,
  'Nachname' => $lastName,
  'E-Mail' => $email,
  'Sprache' => $lang,
  'Seite' => $page,
  'Einwilligung (Newsletter)' => "Ja, erteilt am $received",
];

$ok = frst_send(NEWSLETTER_TO, "Newsletter-Anmeldung: $firstName $lastName", 'Neue Newsletter-Anmeldung', $rows, $email);
frst_respond($ok ? 200 : 502, $ok ? ['ok' => true] : ['ok' => false, 'error' => 'send_failed']);
