// function for get the data
function getData(id1, id2, id3) {
	const CardName = document.getElementById(id1).innerText;
	const CardInput1String = document.getElementById(id2).value;
	const CardInput1 = parseInt(CardInput1String);
	const CardInput2String = document.getElementById(id3).value;
	const CardInput2 = parseInt(CardInput2String);

	const cardData = {
		CardName: CardName,
		CardInput1: CardInput1,
		CardInput2: CardInput2,
	};
	return cardData;
}
// function for display data in area calculation section
function displayData(title, result) {
	const container = document.getElementById("table-container");
	const tr = document.createElement("tr");
	tr.innerHTML = `
      <td>${serial}</td>
      <td>${title}</td>
      <td>${result}cm<sup>2</sup></td>
      <td>
      <button class="btn btn-sm bg-[#1090D8;]">Convert to m<sup>2</sup></button>
      </td>
      
    `;
	container.appendChild(tr);
}

// function for card background color,when hover
let previousColors = [];

function changeBackgroundColor(event) {
	let card = event.target;
	previousColors.push(card.style.backgroundColor);
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	let randomColor = "rgb(" + red + "," + green + "," + blue + ")";
	card.style.backgroundColor = randomColor;
}

function restoreBackgroundColor(event) {
	let card = event.target;
	card.style.backgroundColor = previousColors.shift();
}

