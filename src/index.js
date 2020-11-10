import _ from 'lodash';

import './styles.scss';
import './assets/images/image-1.png';
import './assets/images/favicon-1.png';
import HelloWorldButton from './components/hello-world-btn/hello-world-btn';

const component = () => {
  const elem = document.createElement('div');

  elem.innerHTML = _.join(['Hello', 'Webpack', 'From', 'lodash'], '-');
  elem.classList.add('hello', 'new-font');

  // works if images are contenthash in prod
  // const myApple = new Image();
  // myApple.src = Icon;
  // elem.appendChild(myApple);

  return elem;
};

document.body.appendChild(component());

const hwBtn = new HelloWorldButton();
hwBtn.render();

console.log('webpack starter kit');
