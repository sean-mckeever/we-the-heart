function setActiveNavLink() {
    // Set the pageName variable to the name of the current page
    var pageName = document.querySelector('meta[name="page-name"]').getAttribute('content');

    // Set the data-page attribute on the html element
    document.documentElement.setAttribute('data-page', pageName);

    var navLinks = document.querySelectorAll('header nav ul li a');
    for (var i = 0; i < navLinks.length; i++) {
        if (navLinks[i].getAttribute('data-page') === pageName) {
            navLinks[i].classList.add('active');
            break;
        }
    }
}