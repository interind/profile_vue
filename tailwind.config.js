/** tailwind.config.js
 * Точки входа для Tailwind: сканируем все .vue/.js/.ts в src.
 * Акцентный цвет — emerald (меняется здесь или в ResumePage через комментарии).
 */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      // При желании можно переопределить акцентную палитру здесь,
      // но по умолчанию используем встроенный emerald из Tailwind.
    }
  },
  plugins: [],
  corePlugins: {
    // Отключаем preflight-сброс, чтобы не ломать стили Vuetify на старых секциях.
    preflight: false
  }
};
