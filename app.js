const body = document.body;
//Here I have created a new element
const div = document.createElement("div");
body.append(div);
div.textContent = "Here are some moods I feel throughout the day:"

//I had text under the image but I removed it instead
// const paraText = document.querySelector("#pText");
// paraText.remove(pText);

//I added the text back using getElementById
// let text = document.getElementById('textBubble')
// text.innerHTML

const changeText = () =>{
    let text = document.querySelector("#pText");
    text.innerHTML ='This is me now...' ; 
    
}

const toggleImg = () =>{
    let img2 = document.querySelector('imgContainer2');

}