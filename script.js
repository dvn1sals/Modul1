// Tab navigation functionality
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links and contents
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked link and corresponding content
        const tab = e.target.dataset.tab;
        e.target.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});
