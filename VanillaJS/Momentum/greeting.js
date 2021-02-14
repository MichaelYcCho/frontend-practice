const form = document.querySelector(".js-form"), //querySelector는 원하는 셀렉터를 모두가지고 온다(클래스.css방식으로)
    input = form.querySelector("input"), //querySelector은 찾으려는 것중 가장 첫번째 요소를 가지고 온다. 
    greeting = document.querySelector(".js-greetings");
// These are making const to change html

const USER_LS = "currentUser",
    SHOWING_CN = "showing";
// These guys are changing CSS

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);    
    saveName(currentValue);
    
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);

}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;

}
// Showing Hello blahblah

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
     askForName();
    } else {
      paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();


