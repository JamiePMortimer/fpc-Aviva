const aph = document.querySelector('.all-prod-head');
const al = document.querySelector('.all-links');
const vap = document.querySelectorAll('.vap-links');

aph.addEventListener('click', () =>{
al.classList.toggle('big')
al.classList.toggle('hide')
vap.forEach(e => {
  e.classList.toggle('hide')
});
})