document.addEventListener("DOMContentLoaded", function() {
    const ham = document.querySelector('.ham');
    const cross = document.querySelector('.cross');
    const sidebar = document.querySelector('.sidebar');

    cross.addEventListener("click", function() {
        sidebar.classList.add('sidebarGo');
        cross.style.display = 'none';
        ham.style.display = 'inline';
    });

    ham.addEventListener("click", function() {
        sidebar.classList.remove('sidebarGo');
        setTimeout(function() {
            cross.style.display = 'inline';
        }, 350);
        ham.style.display = 'none';
    });
});
