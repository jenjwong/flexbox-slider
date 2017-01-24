const curtains = document.querySelectorAll('.wrapper div');

// const select = (e) => {
//   const toggled = e.target.style.flex.includes('2');
//   curtains.forEach(item => item.style.flex='1');
//   toggled ? e.target.style.flex='1' : e.target.style.flex='2';
//   // toggled ? e.target.style['text-indent']='100%' : e.target.style['text-indent']='50%';
// };

const select = () => {
  event.target.classList.toggle('selected')
}

const transitionend = () => {
  if(event.propertyName.includes('flex')) {
    console.log(event.target.firstElementChild.classList)
    event.target.firstElementChild.classList.toggle('display-text');
  }
}

curtains.forEach((item) => {
  item.addEventListener('click', select, true);
  item.addEventListener('transitionend', transitionend, true);
});
