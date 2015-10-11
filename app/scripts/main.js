'use strict';

//closure to avoid leaking variables

(function () {
	console.log('ready!');

	var button = document.getElementById('show');
	button.addEventListener('click', show);

	function show() {
		var text = document.getElementById('hiddentext');
		text.classList.toggle('show');
		if ((button.innerHTML) === 'Show More') {
			button.innerHTML = "Show Less";
		} else {
			button.innerHTML = 'Show More';
		}
	};

})();
