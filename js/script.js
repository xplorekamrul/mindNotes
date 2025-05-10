const items = []
const input = document.getElementById("textInput")
const inPosition = document.getElementById("inPosition")

//create elements & positioning
const cardWrapper = document.createElement("div")
inPosition.before(cardWrapper)

function addItem(){
   const textInput= input.value
   items.push(textInput)
   input.value = ""
   cardWrapper.innerHTML = items.map(item =>  `
      <div class="textCard">
      <p class="text">${item}</p>
      </div>
      `).join("");
   console.log(items);
}
