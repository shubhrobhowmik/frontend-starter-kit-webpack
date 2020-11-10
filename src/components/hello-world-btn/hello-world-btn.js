import './hello-world-btn.scss';

class HelloWorldBtn {
  btnClass = 'hw-btn';

  render() {
    const btn = document.createElement('button');
    btn.innerHTML = 'Hello World';
    btn.classList.add(this.btnClass);
    btn.onclick = () => {
      const para = document.createElement('p');
      para.innerHTML = 'Hello World text added';
      para.classList.add('hw-para');
      document.body.appendChild(para);
    };
    document.body.appendChild(btn);
  }
}

export default HelloWorldBtn;
