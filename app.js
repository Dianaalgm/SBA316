const Body = document.body ;
//Here I have created a new element
const div = document.createElement("div");
Body.append(div);
div.textContent = "Here are some moods I feel throughout the day:"


const changeText = () =>{
    let text = document.querySelector("#pText");
    text.innerHTML = " This is me now... just joking!(a little) BUT I'm having fun learning all of this for the first time." ; 
}

//this toggles between two css
const toggleImg = () =>{
    let img2 = document.querySelector('.imgContainer') ;
    img2.classList.toggle('imgContainer2');
}

const boxes = document.querySelectorAll(".box");
boxes.forEach((e) => (
    e.style.color = 'purple'
));
console.log(boxes);

//event listeners

const titleBox = document.getElementById("box");
function changeColor(event){
    event.target.style.backgroundColor = "pink";
    event.target.textContent = "We love HTML & CSS here";
}
titleBox.addEventListener("mouseover", changeColor);

const imageBox = document.getElementById("secondBox");
function changeBackground(events){
    events.target.style.backgroundColor = "pink";
}
imageBox.addEventListener("mouseover", changeBackground);


