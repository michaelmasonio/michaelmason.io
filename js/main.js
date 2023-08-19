$(document).ready(function () {
    $('#contact').click(function (event) {
        event.preventDefault();
        sendEmail();
    });

    $('a.nav-link[href^="#"]').click(function (event) {
        event.preventDefault();

        var target = $(this).attr('href');
        if (target.length) {
            var navbarHeight = $('.navbar').outerHeight();
            var scrollTo = $(target).offset().top - navbarHeight;

            $('html, body').animate({
                scrollTop: scrollTo
            }, 500);
        }
    });

    function sendEmail() {
        var recipient = 'xmichaelmason@gmail.com';
        var subject = 'Project Inquiry';
        var body = 'Hello! I am requesting more information about your services. I am looking for...';

        var mailtoUrl = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

        window.location.href = mailtoUrl;
    }

    $('#resume').click(function (event) {
        event.preventDefault();
        downloadResume();
    });

    // Other event handlers and functions

    function downloadResume() {
        var downloadUrl = 'share/resume.docx';
        // You can modify the downloadUrl to point to the actual location of the resume file

        // Perform any additional logic or checks before initiating the download

        // Mask the download link by creating a temporary link element
        var link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'resume.docx');
        link.style.display = 'none';
        document.body.appendChild(link);

        // Simulate a click on the link to initiate the download
        link.click();

        // Clean up the temporary link element
        document.body.removeChild(link);
    }
});
