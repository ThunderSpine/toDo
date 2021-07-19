let addButton = document.querySelector('.add-button');
let checkInput = () => {
	let input = document.querySelector('.input');
	if (input.value !== '') {
		new Item(input.value);
		input.value = ''
	}
};

class Item {
	constructor(newTask){
		this.makeDiv(newTask)
	}
	makeDiv(text){
		let inputItem = document.createElement('input');
		inputItem.setAttribute("type", "text");
		inputItem.setAttribute('disabled', true);
		inputItem.classList.add('item-input');
		inputItem.value = text

		let division = document.createElement('div');
		division.classList.add('item');
		
		let editButton = document.createElement('button');
		editButton.innerHTML = '<i class="fas fa-lock"></i>';
		editButton.classList.add('edit-button');
		
		let removeButton = document.createElement('button');
		removeButton.innerHTML = '<i class="fas fa-trash"></i>';
		removeButton.classList.add('remove-button');
		
		division.appendChild(inputItem);
		division.appendChild(editButton);
		division.appendChild(removeButton);
		
		let container = document.querySelector('.container');
		container.appendChild(division);
		
		let modifyIcon = () => {
			inputItem.disabled = !inputItem.disabled
			inputItem.disabled
				? editButton.innerHTML = '<i class="fas fa-lock"></i>'
				: editButton.innerHTML = '<i class="fas fa-unlock"></i>';
		};
		editButton.addEventListener('click', modifyIcon);
		removeButton.addEventListener('click', () => {inputItem.disabled? '' : division.remove()})
	};
};
addButton.addEventListener('click', checkInput);