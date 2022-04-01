const DOG_URL = "https://dog.ceo/api/breeds/image/random";
// string::myvar;

function addNewDoggo()
{
	const promise = fetch(DOG_URL);
	const doggos = document.querySelector(".doggos");
	promise
		.then(function(response)
		{
			const procesingsPromise = response.json();
			return (procesingsPromise);
		})
		.then(function(processedResponse){
			const image = document.createElement("img");
			image.src = processedResponse.message;
			image.alt = "Cute Dog";
			doggos.appendChild(image);
		})
}


document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);