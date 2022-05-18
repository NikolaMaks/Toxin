import '../public/index.pug';
import '../style/app.scss';





console.log("hello!")


const pug = require('pug');

console.log(pug.renderFile('template.pug', {
  name: 'Timothy'
}));