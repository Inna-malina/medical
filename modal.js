let mod = document.querySelector('.modal-window');

function modal() {
    mod.classList.add('modal-activ');

}

function close() {
    mod.classList.remove('modal-activ');
}



setTimeout(modal, 5000);
mod.onclick = close;
