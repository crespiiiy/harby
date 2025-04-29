require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/api/send-telegram', async (req, res) => {
  const { message } = req.body;
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  try {
    await axios.post(url, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    });
    res.status(200).send('Message sent');
  } catch (error) {
    res.status(500).send('Error sending message');
  }
});

app.listen(3000, () => console.log('Server running'));