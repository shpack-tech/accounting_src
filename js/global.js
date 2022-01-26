document.addEventListener('DOMContentLoaded', function () {
	// Блоки хедера
	const header = document.querySelector('#header');
	const header_top = document.querySelector('.contacts_container');
	const menuBtn = document.querySelector('.menu_button');
	const menuList = document.querySelector('.navlist_grid');
	const menuClose = document.querySelector('.menu_button_close');

	// Блоки футера
	const footer = document.querySelector('.footer');

	//Блок главного контейнера
	const main_wrapper = document.querySelector('.main_wrapper');

	// Прятание хедера
	let startY = window.scrollY;

	document.addEventListener('scroll', function (e) {
		if (window.screen.width > 981) {
			const currentY = window.scrollY;
			if (startY < currentY) {
				header.style.top = `-${header_top.offsetHeight}px`;
				main_wrapper.style.paddingTop = 191 - header_top.offsetHeight + 'px';
			} else if (startY > currentY) {
				header.style.top = '0';
				main_wrapper.style.paddingTop = 191 + 'px';
			}
			startY = currentY;
		}
	});

	// Открытия мобильного меню

	menuBtn.onclick = function () {
		menuList.style.left = 0;
	};
	menuClose.onclick = function () {
		menuList.style.left = '-120vw';
	};

	// Пункты мобильного меню

	menuList.addEventListener('click', function (e) {
		const target = e.target.closest('div');
		if (target.classList.contains('list_item') && !target.classList.contains('list_item___open')) {
			target.parentElement.children[1].style.maxHeight =
				target.parentElement.children[1].children.length * target.parentElement.children[1].children[0].offsetHeight + 'px';
			target.classList.add('list_item___open');
		} else if (target.classList.contains('list_item') && target.classList.contains('list_item___open')) {
			target.parentElement.children[1].style.maxHeight = 0;
			target.classList.remove('list_item___open');
		}
	});

	// Пункты футера

	footer.addEventListener('click', function (e) {
		const target = e.target.closest('div');
		if (target.classList.contains('footer__category-item__title') && !target.classList.contains('list_item___open')) {
			target.parentElement.children[1].style.maxHeight =
				target.parentElement.children[1].children.length * target.parentElement.children[1].children[0].offsetHeight + 'px';
			target.classList.add('list_item___open');
		} else if (target.classList.contains('footer__category-item__title') && target.classList.contains('list_item___open')) {
			target.parentElement.children[1].style.maxHeight = 0;
			target.classList.remove('list_item___open');
		}
	});
});
