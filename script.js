document.getElementById('search-bar').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let cards = document.getElementsByClassName('music-card');
    
    for (let card of cards) {
        let title = card.getElementsByTagName('p')[0].innerText.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
});