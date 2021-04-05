// Select all html elements within class ".box" and stock them in an array "panels"
const panels = document.querySelectorAll('.box')

// for each item in array add event listener and execute a task once the event is triggered
panels.forEach(item => item.addEventListener("click", function(){this.classList.toggle("boxgrow")}));
panels.forEach(item => item.addEventListener("transitionend", function(){this.classList.toggle("textreset")}));



