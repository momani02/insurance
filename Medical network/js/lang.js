document.getElementById('toggleBtn').addEventListener('click', function() {

    const htmlElement = document.documentElement;

    if (htmlElement.lang === 'ar') {
        htmlElement.lang = 'en';
        htmlElement.dir = 'ltr';
        this.textContent = 'AR';
    } else {
        htmlElement.lang = 'ar';
        htmlElement.dir = 'rtl';
        this.textContent = 'EN';
    }
    document.body.style.direction = htmlElement.dir;
});