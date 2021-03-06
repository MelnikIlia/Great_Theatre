let body = document.querySelector("body"),
  header = document.querySelector(".header"),
  nav = document.querySelector(".nav"),
  sidebar_menu = document.querySelector(".sidebar-menu"),
  ibg = document.getElementsByClassName("ibg"),
  button_burger = document.getElementById("button-burger"),
  sidebar_close = document.getElementById("sidebar-close");
window.addEventListener("load", function () {
  function e(e, t, r, o) {
    return window.matchMedia("(min-width: " + e + "px)").matches
      ? o.prepend(t)
      : r.prepend(t);
  }
  document.querySelectorAll("[data-move='nav']").forEach((t) => {
    e(
      993,
      t,
      document.querySelector(".sidebar-menu"),
      document.querySelector(".nav")
    );
  }),
    window.addEventListener("resize", function () {
      document.querySelectorAll("[data-move='nav']").forEach((t) => {
        e(
          993,
          t,
          document.querySelector(".sidebar-menu"),
          document.querySelector(".nav")
        );
      });
    }),
    (function () {
      for (const e of ibg)
        0 != e.querySelectorAll("picture")[0]
          ? (e.style.backgroundImage =
              'url("' +
              e.querySelectorAll("source")[0].getAttribute("srcset") +
              '")')
          : 0 != e.querySelectorAll("img")[0] &&
            (e.style.backgroundImage =
              'url("' +
              e.querySelectorAll("img")[0].getAttribute("src") +
              '")');
    })(),
    (function () {
      let e;
      window.matchMedia("(max-width: 1024px)").matches &&
        (document.addEventListener(
          "touchstart",
          (t) => {
            e = new Date();
          },
          !1
        ),
        document.addEventListener(
          "touchend",
          (t) => {
            new Date() - e.getTime() < 100 &&
              (t.target.closest(".projects__item") ||
                null == document.querySelector(".projects__item.show") ||
                document
                  .querySelector(".projects__item.show")
                  .classList.remove("show"));
          },
          !1
        ),
        document.querySelectorAll(".projects__item").forEach((t) => {
          t.addEventListener(
            "touchstart",
            (t) => {
              e = new Date();
            },
            !1
          ),
            t.addEventListener(
              "touchend",
              (r) => {
                new Date() - e.getTime() < 100 &&
                  (null != document.querySelector(".projects__item.show") &&
                    document
                      .querySelector(".projects__item.show")
                      .classList.remove("show"),
                  t.classList.add("show"));
              },
              !1
            );
        }));
    })(),
    new Swiper("#hero-slider", {
      updateOnWindowResize: !0,
      direction: "horizontal",
      uniqueNavElements: !0,
      centeredSlides: !0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      width: 370,
    })

	let projects_slider = tns({
		container: '.projects-slider',
		fixedWidth: 442,
		speed: 400,
		slideBy: 'page',
		controls: false,
		nav: false,
		mouseDrag: true
	});

	projects_slider();
	
    button_burger.addEventListener("click", () => {
      sidebar_menu.classList.add("show"), body.classList.add("lock");
    }),
    sidebar_close.addEventListener("click", () => {
      sidebar_menu.classList.remove("show"), body.classList.remove("lock");
    });
});
