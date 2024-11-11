
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.getElementById('footer');

    document.addEventListener('click', function(event) {
        const isClickInsideFooter = footer.contains(event.target);

        if (!isClickInsideFooter) {
            footer.classList.add('hidden');
            
        } else {    
            footer.classList.remove('hidden');
         
        }
    });
});

