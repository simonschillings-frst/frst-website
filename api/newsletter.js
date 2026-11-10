// Vercel Serverless Function: nimmt Anmeldungen aus dem Newsletter-Formular („Stay Connected“) entgegen
// und schickt sie per E-Mail weiter (Versand über Resend, wie bei /api/book-demo).
// Vorläufige Lösung zum Testen, bis ein Newsletter-Tool angebunden ist.
//
// Benötigte Umgebungsvariablen (dieselben wie bei Book a demo):
//   RESEND_API_KEY  API-Schlüssel von resend.com
//   MAIL_FROM       Absender mit bei Resend verifizierter Domain
// Optional:
//   NEWSLETTER_TO   Empfänger (Standard: hello@frst.agency)

const TO = process.env.NEWSLETTER_TO || 'hello@frst.agency';

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const clean = (value, max = 200) => String(value ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const body = typeof req.body === 'object' && req.body ? req.body : {};

  // Honeypot: Bots füllen das versteckte Feld aus. Wir tun so, als wäre alles gut.
  if (clean(body.website)) return res.status(200).json({ ok: true });

  const data = {
    firstName: clean(body.firstName),
    lastName: clean(body.lastName),
    email: clean(body.email),
    lang: clean(body.lang, 5) || 'en',
    page: clean(body.page, 300),
  };
  const consent = body.consent === true || body.consent === 'true' || body.consent === 'on';

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  if (!emailOk || !data.firstName || !data.lastName || !consent) {
    return res.status(400).json({ ok: false, error: 'invalid_input' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;
  if (!apiKey || !from) {
    return res.status(500).json({ ok: false, error: 'not_configured' });
  }

  const received = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });
  const rows = [
    ['Vorname', data.firstName],
    ['Nachname', data.lastName],
    ['E-Mail', data.email],
    ['Sprache', data.lang],
    ['Seite', data.page],
    ['Einwilligung (Newsletter)', `Ja, erteilt am ${received}`],
  ];

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [TO],
        reply_to: data.email,
        subject: `Newsletter-Anmeldung: ${data.firstName} ${data.lastName}`,
        text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
        html: `<h2>Neue Newsletter-Anmeldung</h2><table cellpadding="6">${rows
          .map(([k, v]) => `<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`)
          .join('')}</table>`,
      }),
    });
    if (!response.ok) return res.status(502).json({ ok: false, error: 'send_failed' });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ ok: false, error: 'send_failed' });
  }
}
