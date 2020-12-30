const shareBtn = document.querySelector('.shareBtn')
const shareSocial = document.querySelector('.sharesocial')

shareBtn.addEventListener('click', () => {
    shareSocial.classList.toggle('active-socials')
    shareBtn.classList.toggle('active-shareBtn')
    console.log(shareSocial);
})

// shareSocial.classList.add('active-socials')