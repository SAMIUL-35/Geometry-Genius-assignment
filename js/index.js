let serial = 0;
// page change section(blog)
document.getElementById("blog-btn").addEventListener("click", function () {
	window.location.href = "blog.html";
});
// first card
document.getElementById("first-card").addEventListener("click", function () {
	const cardData = getData(
		"firstCardTitle",
		"firstCardInput1",
		"firstCardInput2"
	);
	const result = (0.5 * cardData.CardInput1 * cardData.CardInput2).toFixed(2);

	if (isNaN(result)) {
		document.getElementById("firstCardInput1").value = "";
		document.getElementById("firstCardInput2").value = "";

		return alert("please enter any valid number");
	} else if (cardData.CardInput1 <= 0 || cardData.CardInput2 <= 0) {
		document.getElementById("firstCardInput1").value = "";
		document.getElementById("firstCardInput2").value = "";

		return alert("please enter any valid number");
	}
	serial += 1;
	displayData(cardData.CardName, result);

	document.getElementById("firstCardInput1").value = "";
	document.getElementById("firstCardInput2").value = "";
});

// second card

document.getElementById("second-card").addEventListener("click", function () {
	const cardData = getData(
		"secondCardTitle",
		"secondCardInput1",
		"secondCardInput2"
	);

	const result = (cardData.CardInput1 * cardData.CardInput2).toFixed(2);
	if (isNaN(result)) {
		document.getElementById("secondCardInput1").value = "";
		document.getElementById("secondCardInput2").value = "";
		return alert("please enter any valid number");
	} else if (cardData.CardInput1 <= 0 || cardData.CardInput2 <= 0) {
		document.getElementById("secondCardInput1").value = "";
		document.getElementById("secondCardInput2").value = "";
		return alert("please enter any valid number");
	}
	serial += 1;
	displayData(cardData.CardName, result);
	document.getElementById("secondCardInput1").value = "";
	document.getElementById("secondCardInput2").value = "";
});

// third card

document.getElementById("third-card").addEventListener("click", function () {
	const cardData = getData(
		"thirdCardTitle",
		"thirdCardInput1",
		"thirdCardInput2"
	);

	const result = (cardData.CardInput1 * cardData.CardInput2).toFixed(2);
	if (isNaN(result)) {
		document.getElementById("thirdCardInput1").value = "";
		document.getElementById("thirdCardInput2").value = "";
		return alert("please enter any valid number");
	} else if (cardData.CardInput1 <= 0 || cardData.CardInput2 <= 0) {
		document.getElementById("thirdCardInput1").value = "";
		document.getElementById("thirdCardInput2").value = "";
		return alert("please enter any valid number");
	}
	serial += 1;
	displayData(cardData.CardName, result);
	document.getElementById("thirdCardInput1").value = "";
	document.getElementById("thirdCardInput2").value = "";
});
//  fourth card
document.getElementById("forth-card").addEventListener("click", function () {
	const cardData = getData(
		"forthCardTitle",
		"forthCardInput1",
		"forthCardInput2"
	);

	const result = (0.5 * cardData.CardInput1 * cardData.CardInput2).toFixed(2);
	if (isNaN(result)) {
		document.getElementById("forthCardInput1").value = "";
		document.getElementById("forthCardInput2").value = "";
		return alert("please enter any valid number");
	} else if (cardData.CardInput1 <= 0 || cardData.CardInput2 <= 0) {
		document.getElementById("forthCardInput1").value = "";
		document.getElementById("forthCardInput2").value = "";
		return alert("please enter any valid number");
	}
	serial += 1;
	displayData(cardData.CardName, result);
	document.getElementById("forthCardInput1").value = "";
	document.getElementById("forthCardInput2").value = "";
});

// fifth card

document.getElementById("fifth-card").addEventListener("click", function () {
	const cardData = getData(
		"fifthCardTitle",
		"fifthCardInput1",
		"fifthCardInput2"
	);

	const result = (0.5 * cardData.CardInput1 * cardData.CardInput2).toFixed(2);
	if (isNaN(result)) {
		document.getElementById("fifthCardInput1").value = "";
		document.getElementById("fifthCardInput2").value = "";
		return alert("please enter any valid number");
	} else if (cardData.CardInput1 <= 0 || cardData.CardInput2 <= 0) {
		document.getElementById("fifthCardInput1").value = "";
		document.getElementById("fifthCardInput2").value = "";
		return alert("please enter any valid number");
	}
	serial += 1;
	displayData(cardData.CardName, result);
	document.getElementById("fifthCardInput1").value = "";
	document.getElementById("fifthCardInput2").value = "";
});
// last card
document.getElementById("last-card").addEventListener("click", function () {
	const cardData = getData("lastCardTitle", "lastCardInput1", "lastCardInput2");
	const pi = 3.14;

	const result = (pi * cardData.CardInput1 * cardData.CardInput2).toFixed(2);
	if (isNaN(result)) {
		document.getElementById("lastCardInput1").value = "";
		document.getElementById("lastCardInput2").value = "";
		return alert("please enter any valid number");
	} else if (cardData.CardInput1 <= 0 || cardData.CardInput2 <= 0) {
		document.getElementById("lastCardInput1").value = "";
		document.getElementById("lastCardInput2").value = "";
		return alert("please enter any valid number");
	}
	serial += 1;
	displayData(cardData.CardName, result);
	document.getElementById("lastCardInput1").value = "";
	document.getElementById("lastCardInput2").value = "";
});
