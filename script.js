const bankAccounts = document.getElementById('bank-accounts');

let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

bankAccounts.addEventListener('mousedown' , (e) => {
    isDown = true;
    startX = e.pageX - bankAccounts.offsetLeft;
    startY = e.pageY - bankAccounts.offsetTop;
    scrollLeft = bankAccounts.scrollLeft;
    scrollTop = bankAccounts.scrollTop;
    bankAccounts.style.cursor = 'grabbing';
});

bankAccounts.addEventListener('mouseleave' , () => {
    isDown = false;
    bankAccounts.style.cursor = 'grab';
});

bankAccounts.addEventListener('mouseup' , () => {
    isDown = false;
    bankAccounts.style.cursor = 'grab';
});

document.addEventListener('mousemove' , (e) => {
    if( !isDown) return;
    e.preventDefault();
    const x = e.pageX - bankAccounts.offsetLeft;
    const y = e.pageY - bankAccounts.offsetTop;
    const walkX = (x - startX) * 1;
    const walkY = (y - startY) * 1;
    bankAccounts.scrollLeft = scrollLeft - walkX;
    bankAccounts.scrollTop = scrollTop - walkY;
});

const scrollLeftButton = document.getElementById('action-button--previouse');
const scrollRightButton = document.getElementById('action-button--next');