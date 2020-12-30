const shareBtn = document.querySelector('.shareBtn')
const shareSocial = document.querySelector('.sharesocial')

shareBtn.addEventListener('click', () => {
    shareSocial.classList.toggle('active-socials')
    console.log(shareSocial);
})