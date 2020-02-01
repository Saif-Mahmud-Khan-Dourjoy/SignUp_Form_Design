function Vanish(){
    document.getElementById('banner').style.display="none";
    document.getElementById('form_container').style.cssText= 'opacity: 1 ; visibility: visible';
    document.getElementById('container').style.background= '#cc683c'

}

/*document.querySelector('.X_btn').addEventListener ('click', () => {
 document.querySelector('.form_container').style.cssText= 'opacity: 0 ; visibility: hidden';
 document.querySelector('.banner').style.display= 'flex';
 document.querySelector('.container').style.cssText=' background:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(../images/city.jpg) no-repeat center ; background-size: cover';
});
*/
function back(){
    document.getElementById('banner').style.display="flex";
    document.getElementById('form_container').style.cssText= 'opacity: 0; visibility: hidden';
    document.querySelector('.container').style.cssText=' background:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(../images/city.jpg) no-repeat center ; background-size: cover';
}