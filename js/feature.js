document.getElementById('donation-show')
    .addEventListener('click', function () {
        showSectionById('section-hidden');
    })


document.getElementById('history-show')
    .addEventListener('click', function () {
        showSectionById('section-hidden-transaction');
    })


document.getElementById('history-show')
    .addEventListener('click', function () {
        document.getElementById('donation-show').classList.remove("bg-btnblog_color", "border");
        document.getElementById('history-show').classList.add("bg-btnblog_color", "border");
    });
document.getElementById('donation-show')
    .addEventListener('click', function () {
        document.getElementById('history-show').classList.remove("bg-btnblog_color", "border");
        document.getElementById('donation-show').classList.add("bg-btnblog_color", "border");
    });