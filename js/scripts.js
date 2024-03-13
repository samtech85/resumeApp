/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function downloadFile() {
    // Replace 'your_file_path.txt' with the path to your actual file
    var fileUrl = ' assets/docs/my_resume.pdf';

    // Create an invisible anchor element
    var anchor = document.createElement('a');
    anchor.style.display = 'none';

    // Set the href attribute to the file URL
    anchor.href = fileUrl;

    // Set the download attribute with the desired file name
    anchor.download = 'my_resume.pdf';

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Trigger a click event on the anchor to start the download
    anchor.click();

    // Remove the anchor from the body
    document.body.removeChild(anchor);
}
