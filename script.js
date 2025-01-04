document.querySelectorAll('.news-filter').forEach((filter) => {
    filter.addEventListener('click', () => {
        const category = filter.getAttribute('data-category');
        
        document.querySelectorAll('.news-filter').forEach((btn) => btn.classList.remove('active'));
        filter.classList.add('active');

        document.querySelectorAll('.news-item').forEach((item) => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'all' || category === itemCategory) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
