export default async function handler(req, res) {
  const url = "https://api.mail.tm" + req.url.replace("/api/mail", "");

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined
    });

    const data = await response.text();

    res.status(200).send(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
