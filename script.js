let burgerLineOne=document.getElementsByClassName('burger__line')[0];
let burgerLineTwo=document.getElementsByClassName('burger__line')[1];
let burgerLineThree=document.getElementsByClassName('burger__line')[2];
let burgerLineBox=document.getElementsByClassName('burger__menu__box')[0];
let burgerMenuList=document.getElementsByClassName('burger__menu__list')[0];

burgerLineBox.onclick=function () {
    if(burgerMenuList.style.display==='block') {
        burgerMenuList.style.display = 'none';
        burgerLineOne.style.transform = 'rotate(180deg)';
        burgerLineTwo.style.display = 'block';
        burgerLineThree.style.transform = 'rotate(0deg)';
        burgerLineThree.style.top = '20px';
        burgerLineOne.style.top = '-20px';
    }
    else{
        burgerMenuList.style.display='block';
        burgerLineOne.style.transform = 'rotate(45deg)';
        burgerLineTwo.style.display = 'none';
        burgerLineThree.style.transform = 'rotate(-45deg)';
        burgerLineThree.style.top = '0';
        burgerLineOne.style.top = '0';
    }

};

