const fs = require('fs');
const dotenv = require('dotenv');

// Читаем переменные окружения из файла .env
const envFile = fs.existsSync('.env') ? '.env' : '.env.example';
const envConfig = dotenv.parse(fs.readFileSync(envFile));
for (const key in envConfig) {
  process.env[key] = envConfig[key];
}

// Определяем тему устройства
const isDarkMode = process.env.THEME === 'dark';

// Создаем объект с содержимым manifest.json
const manifest = {
  short_name: "studSpace",
  name: "studSpace",
  icons: [
    {
      src: "apple-touch-icon.png",
      sizes: "64x64 32x32 24x24 16x16",
      type: "image/png"
    },
    {
      src: "apple-touch-icon.png",
      type: "image/png",
      sizes: "192x192"
    },
    {
      src: "apple-touch-icon.png",
      type: "image/png",
      sizes: "512x512"
    }
  ],
  start_url: ".",
  display: "standalone",

  // Другие свойства manifest.json
  theme_color: isDarkMode ? process.env.VAR_BG_DARK : process.env.VAR_BG_LIGHT,
};

// Записываем созданный объект в файл manifest.json
fs.writeFileSync('public/manifest.json', JSON.stringify(manifest, null, 2));