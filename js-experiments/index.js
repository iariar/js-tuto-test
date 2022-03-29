// const some = "jack"

// const ss = `Hello ${some}`
// console.log(ss);



// let butt =  document.querySelector(".butt");
// let inp = document.querySelector(".in");
// let pp = document.querySelector(".pp");

// butt.addEventListener('click', function () {
// 	alert(inp.value);
// });


// inp.addEventListener('keyup', function()
// {
// 	pp.innerText = inp.value;
// });

//begin calc
let input = document.querySelector(".summ");
let buttons = document.querySelector(".buttons");
let text;
let prev_text;
let operation;

let stringt = "0";


function maths(operation, input, prev_text)
{
	if (operation && prev_text)
	{
		switch (operation) {
		case "×":
			input.innerText = parseInt(prev_text) * parseInt(input.innerText);
			break;
		case "+":
			input.innerText = parseInt(prev_text) * parseInt(input.innerText);
			break;
		case "-":
			input.innerText = parseInt(prev_text) * parseInt(input.innerText);
			break;
		case "÷":
			input.innerText = parseInt(prev_text) * parseInt(input.innerText);
			break;
		default:
			break;
		}
		operation = "0";
	}
}

buttons.addEventListener('click', function(event)
{
	if (event.target.innerText === "C")
	{
		input.innerText = "0";
	}
	else if (event.target.innerText === "←")
	{
		string = input.innerText;
		input.innerText = string.substring(0, string.length - 1);
	}
	else if (event.target.innerText === "÷" || event.target.innerText === "×" || event.target.innerText === "-" || event.target.innerText === "+")
	{
		operation = event.target.innerText;
		prev_text = input.innerText;
		input.innerText = "0";
	}
	else if (event.target.innerText === "=")
	{
		maths(operation, input, prev_text);
	}
	else
	{
		if (input.innerText === undefined || input.innerText === "0")
		{
			input.innerText = "";
		}
		input.innerText += event.target.innerText;
		// alert(input.value)
	}
});