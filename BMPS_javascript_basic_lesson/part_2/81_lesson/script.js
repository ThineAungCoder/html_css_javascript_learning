const openModal = function() {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
	btnsOpenModal[i].addEventListener('click', openModal);
}

btnsOpenModal.addEventListener('.click', openModal);
overlay.addEventListener('.click', closeModal);

document.addEventListener('keydown', function() {console.log('key Press For');});
overlay.addEventListener('click', c);

document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape' && !modal.classlist.contains('hidden')) {
		closeModal();
	}
});
	