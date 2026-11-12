<?php
// Formulare auf der Research-Seite auf dem All-Inkl-Webspace:
//   type=request      „Get the Study“ (Studie anfordern)
//   type=participate  „Take part in our study“ (Studienteilnahme)
// Die .htaccess leitet /api/study hierher.
require __DIR__ . '/_mail.php';

// Empfänger der Anfragen
const STUDY_TO = 'hello@frst.agency';

$body = frst_read_body();

// Honeypot: Bots füllen das versteckte Feld aus. Wir tun so, als wäre alles gut.
if (frst_clean($body['website'] ?? '') !== '') frst_respond(200, ['ok' => true]);

$type = frst_clean($body['type'] ?? '', 20);
$firstName = frst_clean($body['firstName'] ?? '');
$lastName = frst_clean($body['lastName'] ?? '');
$email = frst_clean($body['email'] ?? '');
$lang = frst_clean($body['lang'] ?? '', 5) ?: 'en';
$consent = frst_consent($body['consent'] ?? null);

if (!in_array($type, ['request', 'participate'], true) || !filter_var($email, FILTER_VALIDATE_EMAIL) || $firstName === '' || $lastName === '' || !$consent) {
  frst_respond(400, ['ok' => false, 'error' => 'invalid_input']);
}

$received = (new DateTime('now', new DateTimeZone('Europe/Berlin')))->format('d.m.Y, H:i:s');
$rows = ['Vorname' => $firstName, 'Nachname' => $lastName, 'E-Mail' => $email];

if ($type === 'participate') {
  $company = frst_clean($body['company'] ?? '');
  $function = frst_clean($body['function'] ?? '');
  $jobTitle = frst_clean($body['jobTitle'] ?? '');
  if ($company === '' || $function === '' || $jobTitle === '') frst_respond(400, ['ok' => false, 'error' => 'invalid_input']);
  $rows += ['Unternehmen' => $company, 'Funktion' => $function, 'Position' => $jobTitle];
  $subject = "Studienteilnahme: $firstName $lastName ($company)";
  $heading = 'Neue Anmeldung zur Studienteilnahme';
} else {
  $subject = "Studie angefordert: $firstName $lastName";
  $heading = 'Neue Anfrage: Studie zusenden';
}

$rows += ['Sprache' => $lang, 'Einwilligung (Datenschutz)' => "Ja, erteilt am $received"];

$ok = frst_send(STUDY_TO, $subject, $heading, $rows, $email);
frst_respond($ok ? 200 : 502, $ok ? ['ok' => true] : ['ok' => false, 'error' => 'send_failed']);
