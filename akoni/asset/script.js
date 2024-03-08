function navigateTo(page) {
    document.querySelector('main').classList.add('slide-left');
    setTimeout(function() {
        window.location.href = page;
    }, 300); // Adjust the timing based on your transition duration
}
