const pizza = {
	pie: [
		{
			title: 'Maker Pizza',
			price: '$$'
		},
		{
			title: 'Pizza Libretto',
			price: '$$'
		},
		{
			title: 'Dominoes',
			price: '$'
		}
	],
	slice: [
		{
			title: 'Pizzaiolo',
			price: '$$'
		},
		{
			title: 'North of Brooklyn',
			price: '$$'
		},
		{
			title: 'Pizza Pizza',
			price: '$'
		},
		{
			title: 'King Slice',
			price: '$'
		}
	]
};

//listen for a form submit
//Once form submits, grab values from selected from radio inputs.
//use Radio input values, to look through pizza object 
//display the matching pizza joint to user 
const randomElement = (array) => {
	const randomIndex = Math.floor(Math.random() * array.length); 
	return array[randomIndex];
}

const form = document.querySelector('form');
form.addEventListener('submit', e => {
	e.preventDefault();
	//Once form submits, grab values from selected from radio inputs.
	const sizeSelected = document.querySelector('input[name=size]:checked').value;
	const priceSelected = document.querySelector('input[name=price]:checked').value;
	//use Radio input values, to look through pizza object 
	const sizePizzaList = pizza[sizeSelected];
	const withinPricePizzaList = sizePizzaList.filter((pizzaPlace) => {
		if (pizzaPlace.price === priceSelected) {
			return true;
		}
		return false; 
	});
	const finalPizzaPlace = randomElement(withinPricePizzaList);
	console.log(finalPizzaPlace);
	
})

