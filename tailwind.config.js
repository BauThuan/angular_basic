/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/**/*.{html,ts}"
  ],
  theme: {
    extend: {}, // Mở rộng theme mặc định
  },
  plugins: [], // Thêm các plugin nếu cần
}
