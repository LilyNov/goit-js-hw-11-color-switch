import {colors} from "./colors.js"


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomIntegerFromInterval())

document.body.style.backgroundColor = `colors`


const changeBackgroundColor = {
    start() {
        const getNewColorId = setInterval(() => {
            console.log("rtrtrtrt")
        }, 1000);
}

}
