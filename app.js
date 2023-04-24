const shareBtn=document.querySelector('.share-btn')
const shareModel=document.querySelector('.profile-share')


shareBtn.addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('active')
    shareModel.classList.toggle('active')
})