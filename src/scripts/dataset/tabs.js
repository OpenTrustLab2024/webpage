let btns = document.querySelectorAll('.tab');

function changeTabs(button) {
    btns.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

btns.forEach(btn => btn.onclick = changeTabs(btn));