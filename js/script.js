function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('hiding');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('hiding');
    setTimeout(() => {
        sidebar.style.display = 'none';
    }, 500); // Match the duration of the sidebarClose animation
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    modal.style.display = 'block';
    modalContent.classList.remove('hiding');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    modalContent.classList.add('hiding');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500); // Match the duration of the modalClose animation
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        const modal = event.target;
        const modalContent = modal.querySelector('.modal-content');
        modalContent.classList.add('hiding');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); // Match the duration of the modalClose animation
    }
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}