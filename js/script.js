/* Elements */
let body = document.querySelector("body"),
	header = document.querySelector(".header"),
	nav = document.querySelector(".nav"),
	sidebar_menu = document.querySelector(".sidebar-menu"),
	ibg = document.getElementsByClassName("ibg");
/* Buttons */
let button_burger = document.getElementById("button-burger");
let sidebar_close = document.getElementById("sidebar-close");

window.addEventListener("load", function () {
	function elemMove(mediaQuery, what, from, to) {
		return window.matchMedia("(min-width: " + mediaQuery + "px)").matches
			? to.prepend(what)
			: from.prepend(what);
	}

	document.querySelectorAll("[data-move='nav']").forEach((i) => {
		elemMove(993, i, document.querySelector(".sidebar-menu"), document.querySelector(".nav"));
	});
	window.addEventListener("resize", function () {
		document.querySelectorAll("[data-move='nav']").forEach((i) => {
			elemMove(993, i, document.querySelector(".sidebar-menu"), document.querySelector(".nav"));
		});
	});
	
	(function ibgReplace() {
		for (const item of ibg) {
			if (item.querySelectorAll("picture")[0] != 0) {
				item.style.backgroundImage =
					'url("' + item.querySelectorAll("source")[0].getAttribute("srcset") + '")';
			} else if (item.querySelectorAll("img")[0] != 0) {
				item.style.backgroundImage =
					'url("' + item.querySelectorAll("img")[0].getAttribute("src") + '")';
			}
		}
	})();

	(function cardShow() {
		let fdelay;
		if (window.matchMedia("(max-width: 1024px)").matches) {
			document.addEventListener("touchstart", (e) => {
				fdelay = new Date();
			}, false);
			document.addEventListener("touchend", (e) => {
				if(new Date() - fdelay.getTime() < 100) {
					!e.target.closest(".projects__item") &&
					document.querySelector(".projects__item.show") != null
						? document.querySelector(".projects__item.show").classList.remove("show")
						: undefined;
				}
			}, false);
			document.querySelectorAll(".projects__item").forEach((item) => {
				item.addEventListener("touchstart", (e) => {
					fdelay = new Date();
				}, false);
				item.addEventListener("touchend", (e) => {
					if (new Date() - fdelay.getTime() < 100) {
						document.querySelector(".projects__item.show") != null
							? document.querySelector(".projects__item.show").classList.remove("show")
							: undefined;
						item.classList.add("show");
					}
				}, false);
			});
		}
	})();

	new Swiper("#hero-slider", {
		updateOnWindowResize: true,
		direction: "horizontal",
		uniqueNavElements: true,
		centeredSlides: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		width: 370,
	});

	new Swiper("#projects-slider", {
		updateOnWindowResize: true,
		direction: "horizontal",
		simulateTouch: true,
		setWrapperSize: false,
		uniqueNavElements: true,
		width: 442,
		slidesPerView: 1,
		mousewheel: {
			sensitivity: 1,
		},
		breakpoints: {
			1024: {
				slidesPerView: "auto",
			}
		}
	});

	button_burger.addEventListener("click", () => {
		sidebar_menu.classList.add("show");
		body.classList.add("lock");
	});

	sidebar_close.addEventListener("click", () => {
		sidebar_menu.classList.remove("show");
		body.classList.remove("lock");
	});
});