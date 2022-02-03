document.addEventListener('DOMContentLoaded', function () {
	const help = document.querySelector('.help');

	help.addEventListener('click', function (e) {
		const target = e.target.closest('div');
		if (target.classList.contains('help__item-title') && !target.classList.contains('rotate')) {
			target.parentElement.children[1].style.maxHeight = 200 + 'px';
			target.classList.add('rotate');
		} else if (target.classList.contains('help__item-title') && target.classList.contains('rotate')) {
			target.parentElement.children[1].style.maxHeight = 0;
			target.classList.remove('rotate');
		}
	});
});
