window.addEventListener('load', function(){

	createTimer('.timer1', 10);
	let t2 = createTimer('.timer2', 100);
	console.log(t2);

	document.querySelector('.getSale').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка Ваша!';
		t2.stop();
	});
});

let baseTimer = {
	render: function(){
		this.box.innerHTML = this.time;
	},
	tick: function(){
		this.time--;
		this.render();

		if(this.time < 1){
			this.stop();
		}
	},
	start(){
		this.interval = setInterval(() => this.tick(), 1000);
	},
	stop: function(){
		clearInterval(this.interval);
	}
}

function createTimer(boxSelector, initialTime){
	let timer = {
		box: document.querySelector(boxSelector),
		time: initialTime,
		interval: null,
		__proto__: baseTimer
	}

	timer.render();
	timer.start();
	return timer;
}