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

document.addEventListener("DOMContentLoaded", function () {
    const galleryTrack = document.querySelector('.gallery-track');
    const prevGalleryBtn = document.querySelector('.prev-gallery');
    const nextGalleryBtn = document.querySelector('.next-gallery');

    if (galleryTrack && prevGalleryBtn && nextGalleryBtn) {
        let currentGalleryIndex = 0;

        function updateGalleryButtons(maxIndex) {
            prevGalleryBtn.disabled = currentGalleryIndex <= 0;
            nextGalleryBtn.disabled = currentGalleryIndex >= maxIndex;
        }

        function slideGalleryTo(index) {
            const items = galleryTrack.querySelectorAll('.gallery-item');
            if (items.length === 0) return;

            const visibleCount = window.innerWidth >= 768 ? 3 : 1;

            const maxIndex = Math.max(0, items.length - visibleCount);
            currentGalleryIndex = Math.max(0, Math.min(index, maxIndex));

            const itemWidth = items[0].offsetWidth;
            const gap = parseFloat(window.getComputedStyle(galleryTrack).gap) || 0;
            const moveAmount = (itemWidth + gap) * currentGalleryIndex;

            galleryTrack.style.transform = `translateX(-${moveAmount}px)`;

            updateGalleryButtons(maxIndex);
        }

        nextGalleryBtn.addEventListener('click', () => {
            slideGalleryTo(currentGalleryIndex + 1);
        });

        prevGalleryBtn.addEventListener('click', () => {
            slideGalleryTo(currentGalleryIndex - 1);
        });

        window.addEventListener('resize', () => {
            slideGalleryTo(currentGalleryIndex);
        });

        slideGalleryTo(0);
    }
});