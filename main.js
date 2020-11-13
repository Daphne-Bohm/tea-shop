/*Function expression to select elements*/
var selectElement = (s) => document.querySelector(s);

/*Open the menu on Click*/
selectElement ('.open').addEventListener('click', () => {
	selectElement ('.main-nav').classList.add('active');
});

/*close the menu on Click*/
selectElement('.close').addEventListener('click', () => {
	selectElement('.main-nav').classList.remove('active');
});

