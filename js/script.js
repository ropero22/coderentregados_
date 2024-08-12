document.addEventListener("DOMContentLoaded", function() {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

        // Verifica que al menos el 75% del video esté visible en el viewport
        const isVisible = (
            rect.top >= -0.25 * rect.height && 
            rect.left >= -0.25 * rect.width &&
            rect.bottom <= windowHeight + 0.25 * rect.height &&
            rect.right <= windowWidth + 0.25 * rect.width
        );

        return isVisible;
    }

    function handleVideoPlayOnScroll() {
        const videos = document.querySelectorAll('video');
        
        videos.forEach(video => {
            if (isElementInViewport(video)) {
                video.play().then(() => {
                    console.log(`Reproduciendo ${video.src}`);
                }).catch(error => {
                    console.error("No se pudo reproducir el video automáticamente: ", error);
                });
            } else {
                video.pause();
                console.log(`Pausando ${video.src}`);
            }
        });
    }

    // Escucha el evento de scroll y de resize
    window.addEventListener('scroll', handleVideoPlayOnScroll);
    window.addEventListener('resize', handleVideoPlayOnScroll);
    handleVideoPlayOnScroll(); // Llama la función inicialmente para cargar los videos en el viewport
});


//formulario de regristo //
const addForm = document.getElementById("form-validation");
addForm.addEventListener("submit", (e)=>{
    if(addForm.checkValidity() ===false){
        e.preventDefault();
        e.stopPropagation();
        addForm.classList.add('was-validated');
        return false
    }
})