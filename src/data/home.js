export default {
  lastName: 'Александр',
  firstName: 'Банных',
  age: 40,
  city: 'Екатеринбург',
  graph: 'работа удаленно',
  work: 'Frontend developer',
  titles: [
    {title: 'Александр Банных', icon: 'mdi-account'},
    {title: 'г.Екатеринбург', icon: 'mdi-home'},
    {title: 'формат работы удаленный', icon: 'mdi-invoice-clock'},
    {title: '+79690229280(whatsApp, telegram)', icon: 'mdi-phone'},
    {title: 'interind@yandex.ru', icon: 'mdi-at'}
  ],
  technologies: {
    ["react16^"]: [
      {icon: 'xml', text: 'Jsx'},
      {icon: 'hook', text: 'Hook'},
      {icon: 'hook', text: 'React Hook Form'},
      {icon: 'router', text: 'React Router'},
      {icon: 'eslint', text: 'Eslint'},
      {icon: 'codepen', text: 'Mui'},
      {icon: 'codepen', text: 'Antd'},
      {icon: 'state-machine', text: 'MobX'},
      {icon: 'state-machine', text: 'Redux'}
    ],
    vue3: [
      {icon: 'api', text: 'Option API'},
      {icon: 'api', text: 'Composition API'},
      {icon: 'router', text: 'Vue Router'},
      {icon: 'eslint', text: 'Eslint'},
      {icon: 'codepen', text: 'Vuetify'},
      {icon: 'state-machine', text: 'VueX'}
    ],
    javaScript: [
      {icon: 'nodejs', text: 'ES6'},
      {icon: 'nodejs', text: 'JQuery'},
      {icon: 'npm', text: 'NodeJS'},
      {icon: 'code-json', text: 'Json'},
      {icon: 'eslint', text: 'Eslint'},
      {icon: 'eslint', text: 'TypeScript'},
      {icon: 'state-machine', text: 'Redux'}
    ],
    style: [
      {icon: 'palette', text: 'Css3'},
      {icon: 'sass', text: 'Sass'}
    ],
    git: [
      {icon: 'git', text: 'GitHub', href: 'https://github.com/interind'},
      {icon: 'git', text: 'GitLab'}
    ]
  }
};