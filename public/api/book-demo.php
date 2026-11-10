<?php
// „Book a demo“-Formular auf dem All-Inkl-Webspace.
// Gegenstück zu api/book-demo.js (Vercel): gleiche Felder, gleiche Antworten.
// Die .htaccess leitet /api/book-demo hierher.
require __DIR__ . '/_mail.php';

// Empfänger der Demo-Anfragen
const DEMO_TO = 'demo@frst.agency';

$body = frst_read_body();

// Honeypot: Bots füllen das versteckte Feld aus. Wir tun so, als wäre alles gut.
if (frst_clean($body['website'] ?? '') !== '') frst_respond(200, ['ok' => true]);

$email = frst_clean($body['email'] ?? '');
$fullName = frst_clean($body['fullName'] ?? '');
$company = frst_clean($body['company'] ?? '');
$companySize = frst_clean($body['companySize'] ?? '', 40);
$consent = frst_consent($body['consent'] ?? null);

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $fullName === '' || $company === '' || $companySize === '' || !$consent) {
  frst_respond(400, ['ok' => false, 'error' => 'invalid_input']);
}

$received = (new DateTime('now', new DateTimeZone('Europe/Berlin')))->format('d.m.Y, H:i:s');
$rows = [
  'Name' => $fullName,
  'Business email' => $email,
  'Company' => $company,
  'Company size' => $companySize,
  'Einwilligung (Datenschutz)' => "Ja, erteilt am $received",
];

$ok = frst_send(DEMO_TO, "Book a demo: $company", 'Neue Demo-Anfrage', $rows, $email);
frst_respond($ok ? 200 : 502, $ok ? ['ok' => true] : ['ok' => false, 'error' => 'send_failed']);
