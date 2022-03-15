let inputBtn = document.getElementById("save_butt");
let my_input = [];
const message = document.getElementById("input");
list = document.getElementById("list");
let list_adresses = ["some", "bull", "shit"];

// messa.addEventListener("")

// inputBtn.innerHTML += "<li> BUY </li>";

inputBtn.addEventListener("click", function()
{
	console.log(list_adresses.length);
	list_adresses.push(message.value);
	// console.log(list_adresses.length);
	localStorage.setItem("string", message.value);
	localStorage.setItem("strin", message.value);
	list.innerHTML += "<li><a target='_blank' href=\"https://www.google.com/\">" + message.value + "</a></li>";
	message.value = "";
})

// localStorage.setItem("something", "value of something");
let val = JSON.parse(localStorage.getItem("string"));
list.innerHTML += "<li><a target='_blank' href=\"https://www.google.com/\">" + val + "</a></li>";
// localStorage.clear();


for(let i = 0;i < list_adresses.length ;i++)
{
	let a_list = document.createElement("li");
	a_list.textContent = list_adresses[i];
	list.append(a_list);
// 	list.innerHTML += "<li>" + list_adresses[i] + "</li>";
// 	console.log("???");
// 	// list.push(list_adresses);
}
