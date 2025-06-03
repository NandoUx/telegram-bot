const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const message = req.body.message;
    const TOKEN = process.env.TELEGRAM_TOKEN;
    const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;

    if (message && message.text) {
      const chatId = message.chat.id;
      const text = message.text;

      await axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text: `Halo dari Vercel! Kamu kirim: ${text}`
      });
    }

    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
