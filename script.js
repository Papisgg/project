document.getElementById("btn").addEventListener("click", function() {
    document.getElementById('modal').classList.add('open')
})

document.getElementById("close").addEventListener("click", function() {
    document.getElementById('modal').classList.remove('open')
})

document.querySelector("#modal .modal-box").addEventListener("click", event => {
    event._isClickInModal = true;
})

document.getElementById("modal").addEventListener('click', event => {
    if (event._isClickInModal) return;
    event.currentTarget.classList.remove("open");
})