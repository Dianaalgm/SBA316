const body = document.body;
//Here I have created a new element
const div = document.createElement("div");
body.append(div)
div.textContent = "Here are some moods I feel throughout the day:"

//I had text under the image but I removed it instead
const pText = document.querySelector("#pText")
pText.remove(pText)