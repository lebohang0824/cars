let bg_count = 0;
let bg 		 = $('#bg-600-0');
let walkway  = $('#walkway-100');

$('#btnStopStart').click(() => {
	btn = $('#btnStopStart');
	state = '-webkit-animation-play-state';

	bg.css(state, (n, res) => {
		return res == 'paused' ? 'running' : 'paused';
	});

	walkway.css(state, (n, res) => {
		if (res == 'paused') {
			btn.text('Stop');
			return 'running';
		}

		btn.text('Start');
		return 'paused';
	});
});