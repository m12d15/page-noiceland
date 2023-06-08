window.addEventListener("DOMContentLoaded", function () {
	const navMenuButton = document.querySelector("#open");
	navMenuButton.addEventListener("click", function () {
		const menu = document.querySelector(".mobile-menu");
		menu.classList.remove("hidden");
	});
	window.addEventListener("click", function (event) {
		if (event.target.closest("#open")) {
			return;
		}
		const menu = document.querySelector(".mobile-menu");
		menu.classList.add("hidden");
	});

});