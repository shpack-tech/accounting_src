document.addEventListener('DOMContentLoaded', function () {
	const quiz_data = {
		registerType: '',
		personal: '',
		businessCard: '',
		contact: {
			type: '',
			name: '',
			address: '',
		},
		price: '',
	};

	const priceList = [
		[
			{ name: 'none', price: 0, remote_price: 0 },
			{ name: 'ao', price: 690, remote_price: 1050 },
			{ name: 'nko', price: 690, remote_price: 1050 },
			{ name: 'ooo_virtual', price: 690, remote_price: 1050 },
			{ name: 'ooo', price: 450, remote_price: 690 },
			{ name: 'individual_entrepreneur', price: 250, remote_price: 400 },
		],
		[
			{ name: 'true', price: 100 },
			{ name: 'false', price: 200 },
		],
		[
			{ name: 'yes', price: 160 },
			{ name: 'no', price: 0 },
			{ name: 'dont_know', price: 0 },
		],
	];

	const slides = document.querySelectorAll('.quiz_slide');
	const prev_slide = document.querySelector('.prev_step_quiz');
	const next_slide = document.querySelector('.next_step_quiz');

	const business_types = document.querySelector('#business_type_container');
	const personal_container = document.querySelector('#quiz_personal');

	const mobile_price_container = document.querySelector('#mobile_quiz_input');
	const desktop_price_container = document.querySelector('#desktop_quiz_input');

	const quiz_checkbox_container = document.querySelector('.quiz_radio_container');

	const final_price = document.querySelector('#final_price_inline');

	const step = document.querySelector('.step_num');

	const quiz_form = document.querySelector('#quiz_form');

	const forms = document.querySelectorAll('.quiz-form');

	let current_slide = 0;
	let locked_price = [0];
	let price_counter = 0;
	let forwardBlocked = true;

	forms.forEach((form) => {
		form.addEventListener('submit', (e) => e.preventDefault());
	});

	business_types.addEventListener('click', (e) => {
		handleQUizGrids(e);
	});
	personal_container.addEventListener('click', (e) => {
		handleQUizGrids(e);
	});

	next_slide.addEventListener('click', () => {
		handleSlide('forward');
	});
	prev_slide.addEventListener('click', () => {
		handleSlide('backwards');
	});
	quiz_checkbox_container.addEventListener('click', (e) => {
		if (e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL') {
			const context = e.target;
			if (context.tagName === 'INPUT') {
				for (const price of priceList[current_slide]) {
					if (price.name === context.id) {
						implementPrice(price.price);
					}
				}
				quiz_data.businessCard = context.id;
			} else if (context.tagName === 'LABEL') {
				for (const price of priceList[current_slide]) {
					if (price.name === context.children[0].id) {
						implementPrice(price.price);
					}
				}
				quiz_data.businessCard = context.children[0].id;
			}
		}
	});

	function handleQUizGrids(e) {
		if (e.target.dataset.value) {
			for (let i = 0; i < e.target.parentElement.children.length; i++) {
				e.target.parentElement.children[i].classList.remove('quiz_grid_element-active');
			}

			for (const price of priceList[current_slide]) {
				if (price.name === e.target.dataset.value) {
					implementPrice(price.price);
				}
			}
			e.target.classList.add('quiz_grid_element-active');
			forwardBlocked = false;
			next_slide.classList.remove('inactive_quiz_button');

			current_slide === 0 ? (quiz_data.registerType = e.target.dataset.value) : (quiz_data.personal = e.target.dataset.value);
		}
	}

	function handleSlide(direction) {
		if (direction === 'forward' && !forwardBlocked) {
			if (current_slide < 4) {
				current_slide++;

				locked_price[current_slide] = price_counter;

				slides[current_slide - 1].classList.remove('current_slide');

				setTimeout(() => {
					slides[current_slide - 1].classList.remove('slide_aligned');
				}, 100);
				slides[current_slide].classList.add('slide_aligned');
				setTimeout(() => {
					slides[current_slide].classList.add('current_slide');
				}, 100);

				if (current_slide === slides.length - 2) {
					final_price.innerText = `Итоговая стоимость - $${price_counter}`;
					quiz_data.price = price_counter;
				}
			}
			forwardBlocked = true;
			next_slide.classList.add('inactive_quiz_button');
		} else if (direction === 'backwards') {
			if (current_slide > 0) {
				current_slide--;

				slides[current_slide + 1].classList.remove('current_slide');
				setTimeout(() => {
					slides[current_slide + 1].classList.remove('slide_aligned');
				}, 100);

				setTimeout(() => {
					slides[current_slide].classList.add('slide_aligned');
					setTimeout(() => {
						slides[current_slide].classList.add('current_slide');
					}, 40);
				}, 110);

				locked_price.pop();
				if (locked_price.length < 1) {
					locked_price[0] = 0;
				}
			}
		}
		step.innerHTML = `${current_slide + 1} шаг`;
	}

	function implementPrice(price) {
		const value = locked_price[current_slide] + price;
		mobile_price_container.innerText = `$${value}`;
		desktop_price_container.innerText = `$${value}`;
		price_counter = value;
	}
	quiz_form.addEventListener('click', (e) => {
		console.log(e);
		handleQuizForm(e);
	});

	function handleQuizForm(e) {
		if (e.target.tagName === 'BUTTON') {
			target = e.target;
			const inputs = target.parentElement.parentElement.getElementsByTagName('input');

			quiz_data.contact.type = target.id;
			quiz_data.contact.name = inputs[1].value;
			quiz_data.contact.address = inputs[0].value;
			console.log(quiz_data);
		}
	}

	//
	//
	//
	//
	//
	//
	//
	window.displayPopup = function () {
		const overlay = document.createElement('div');

		overlay.innerHTML = `
            <div class="popup">
                <div class="popup_title">Виды правовых форм</div>
                <p>Нажмите и выберите интересующую вас форму, чтобы отразить более подробную информацию</p>
                <div class="popup_tabs_container">
                    <p class="popup_tab">Индивидуальный предприниматель</p>
                    <p class="popup_tab">Общество с ограниченной ответственностью</p>
                    <p class="popup_tab">ООО со статусом виртуальной зоны</p>
                    <p class="popup_tab">Некоммерческая организация (НКО)</p>
                    <p class="popup_tab">Акционерное общество (АО)</p>
                </div>
                <div class="popup_close"><img src="images/icons/close_popup.svg" alt="" /></div>
            </div>
        `;

		overlay.classList.add('overlay');

		document.body.appendChild(overlay);
	};
});
