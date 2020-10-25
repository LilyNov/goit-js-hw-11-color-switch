import {colors} from "./colors.js"

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body')
}
// console.log(refs.body);
// console.log(refs.startBtn);

refs.startBtn.addEventListener('click', () => { changeBackgroundColor.start() })
refs.stopBtn.addEventListener('click', () => { changeBackgroundColor.stop() })


console.log(colors[0])

const changeBackgroundColor = {
  getNewColorId: null,
  isActive: false,

  start() {

    if(this.isActive) {
    return
    }   
    
    this.isActive = true;
    this.getNewColorId = setInterval(() => {
      
      refs.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, 5)]}`
     
      
        }, 1000);
},

    stop() {
      clearInterval(this.getNewColorId)
    }
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);

};

