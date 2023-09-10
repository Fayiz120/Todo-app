const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
const input = document.getElementById('addItem');
const errorMessage = document.getElementById('errorMessage')

var today = new Date()
options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
};
day ="It's " + today.toLocaleDateString("en-US", options)
document.getElementById('date').innerHTML=day

addBtn.addEventListener('click', function addItem() {
    const val = input.value.trim();
    if (val != "") {
        const div = document.createElement("div")
        div.classList.add("items");
        div.innerHTML = `<input type="checkbox"> <li> ${val} <i class="fa-solid fa-trash fa-xl deleteButton"></i></li>`
        list.appendChild(div);



        input.value = "";
        errorMessage.innerHTML = ""

        const deleteButton = div.querySelector(".deleteButton");
        deleteButton.addEventListener("click", function () {
            div.remove();
        });
    } else {
        errorMessage.innerHTML = "I can't add anything because you didn't type anything"
    }
})

document.addEventListener("keypress", function(event) {
 
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      addBtn.click();
    }
  });









