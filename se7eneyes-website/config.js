const config = {
  externalLinks: {
    hackerGPT: 'https://hackergpt.org',
    devilgpt: 'https://devilgpt.org',
    email: 'mailto:darkmod@onionmail.org',
    github: 'https://github.com/greenhat',
    telegram: 'https://t.me/Cl_v_Cl',
    onion: 'http://dreadytofatroptsdj6io7l3xptbet6onoyno2yv7jicoxknyazubrad.onion/'
  },
  limits: {
    devilgpt: {
      freeAttempts: 3
    }
  },
  security: {
    encryption: {
      type: 'AES-256',
      keyExchange: 'RSA-4096',
      verification: 'SHA-256'
    },
    apiKey: 'sk-7e-v1-622aafb37f01db6e5a937fb97a32047c'
  }
};

export default config;
