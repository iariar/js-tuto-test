let header = document.getElementById("black");
let message = document.getElementById("message");
let cards = document.getElementById("cards");
let sum = document.getElementById("sum");
let player_info = document.getElementById("info");
let alive = false;

let info = {name :"mm", chips: "145$"};
let summ = 0;
let first_card;
let second_card;
cards.textContent = "Cards:";
sum.textContent = "Sum: ";

function start()
{
	first_card = get_random_card();
	second_card = get_random_card();
	summ = first_card + second_card;
	player_info.textContent = info.name + ": " + info.chips;
	alive = true
	render_game();
}

function get_random_card()
{
	return Math.round(Math.random() * 13);
}

function render_game()
{
	cards.textContent = "Cards: " + first_card + " " + second_card;
	sum.textContent = "Sum: " + summ;
	if (summ < 21)
	{
		message.textContent = "Would you like to draw another card"
	}
	else if (summ === 21)
	{
		message.textContent = "You have got a BlackJack"
	}
	else
	{
		alive = false;
		message.textContent = "You are out of the game"
	}
}

function new_card()
{
	if (alive)
	{
		let new_c = get_random_card();
		summ += new_c;
		second_card += " " + new_c;
		message.textContent = "The new card value is : " + new_c;
		render_game()
	}
}

