 const answerContainers = document.querySelectorAll('.answer-container');
answerContainers.forEach(container => {
	container.addEventListener('click', function() {
		this.classList.toggle('revealed');
    });
});