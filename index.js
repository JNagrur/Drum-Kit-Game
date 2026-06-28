// var i=0;
// while(i<document.querySelectorAll('button.drum').length){
// document.querySelectorAll('.drum')[i].addEventListener('click', handleClick)
// i++;
// }

// function handleClick(){
//     alert('hello')
// }

function soundPlay(key){
    switch (key) {
        case 'w':
            var audio1 = new Audio('./sounds/crash.mp3');
            audio1.play();
            break;
        case 'a':
            var audio2 = new Audio('./sounds/kick-bass.mp3');
            audio2.play();
            break;
        case 's':
            var audio3 = new Audio('./sounds/snare.mp3');
            audio3.play();
            break;
        case 'd':
            var audio4 = new Audio('./sounds/tom-1.mp3');
            audio4.play();
            break;
        case 'j':
            var audio5 = new Audio('./sounds/tom-2.mp3');
            audio5.play();
            break;
        case 'k':
            var audio6 = new Audio('./sounds/tom-3.mp3');
            audio6.play();
            break;
        case 'l':
            var audio7 = new Audio('./sounds/tom-4.mp3');
            audio7.play();
            break;
       
        default:
            break;
       }

}

function buttonAnimation(key){
    var activeButton=document.querySelector('.'+key)
    activeButton.classList.add('pressed')
    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 1000);
}

// Here addEventListener is a method or a function that is taking another function as an argument so, addEventListener is called as Higher order functions
// and the function that is passed as an argument to higher order function is called as Callback function 
for(var i=0; i<document.querySelectorAll('button.drum').length; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function (){
        // here 'this' keyword returns exactly the element which is clicked (or for which the event listerner is added)
        var buttonInnerHtml=this.innerHTML;
        soundPlay(buttonInnerHtml)
        buttonAnimation(buttonInnerHtml)
})
}

document.addEventListener('keydown', function(event){
    soundPlay(event.key)
    buttonAnimation(event.key)
})





