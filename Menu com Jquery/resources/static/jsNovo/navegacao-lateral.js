
function fora(x) {
	$(".collapse").removeClass("show");
}

var ind_expand = -1;
function colapsar() {
	$('.nav_link active').each(function() {
		$(this).addClass('collapsed');
		$(this).removeClass('active');
	});
	if (document.getElementById('header').classList.contains("body-pd")) {
		$(".collapse").removeClass("show");
	}
}

$(function() {
	var hover_off = false;
	var hover_count = 100;

	$("#nav-bar").mouseover(function() {
		hover_off = false;
		document.getElementById('nav-bar').classList.add('Dshow');
		document.getElementById('header-toggle').classList.add('bx-x');
		document.getElementById('body-pd').classList.add('body-pd');
		document.getElementById('header').classList.add('body-pd');
	});

	$("#nav-bar").mouseout(function() {
		hover_off = true;
		setTimeout(myMouseOut, hover_count);
	});

	function myMouseOut() {
		if (hover_off) {
			if (ind_expand == '-1') {
				document.getElementById('nav-bar').classList.remove('Dshow');
				document.getElementById('header-toggle').classList.remove('bx-x');
				document.getElementById('body-pd').classList.remove('body-pd');
				document.getElementById('header').classList.remove('body-pd');
				$(".link_menu").attr("aria-expanded", "false");
				$(".collapse").removeClass("show");
			}
		}
	}
});

document.addEventListener("DOMContentLoaded", function(event) {
	const showNavbar = (toggleId, navId, bodyId, headerId) => {

		const toggle = document.getElementById(toggleId),
			nav = document.getElementById(navId),
			bodypd = document.getElementById(bodyId),
			headerpd = document.getElementById(headerId);
		// Validate that all variables exist

		if (toggle && nav && bodypd && headerpd) {

			toggle.addEventListener('click', () => {

				nav.classList.toggle('Dshow');
				//   toggle.classList.toggle('bx-x');
				if (toggle.classList.toggle('bx-x')) {
					ind_expand = 1;
				} else {
					ind_expand = -1;
				}
				bodypd.classList.toggle('body-pd');
				headerpd.classList.toggle('body-pd');
			});
			/* nav.addEventListener('click', () => {
			 nav.classList.toggle('Dshow');
			 toggle.classList.toggle('bx-x');
			 bodypd.classList.toggle('body-pd');
			 headerpd.classList.toggle('body-pd');
			 });*/
		}
	};
	showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
	/*===== LINK ACTIVE =====*/
	const linkColor = document.querySelectorAll('.nav_link');
	function colorLink() {
		if (linkColor) {
			linkColor.forEach(l => l.classList.remove('active'));
			this.classList.add('active');
		}
	}
	linkColor.forEach(l => l.addEventListener('click', colorLink));
	// Your code to run since DOM is loaded and ready
});
