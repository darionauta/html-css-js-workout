console.log('Hello from Nerdbord!')

var colors = [ 'red', 'yellow', 'green', 'blue'];

var el = document.querySelector(".box");
var counter = 0;

(function(){
    setInterval(function(){
        el.style.setProperty("border-color", colors[counter]);
        counter = counter > colors.length - 1 ? 0 : counter + 1; 
    }, 3000);
})()