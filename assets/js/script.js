const btn = document.getElementById('hamburgerBtn');
const nav = document.getElementById('mainNav');

btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
});

nav.querySelectorAll('.nav-link-custom').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        btn.classList.remove('open');
    });
});