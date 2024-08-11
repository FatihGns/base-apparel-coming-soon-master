const form =document.getElementById('form');
const email=document.getElementById('email');

form.addEventListener("click",e=>{
    e.preventDefault();
    const emailVal=email.value;

    //check valid email

    if(!validateEmail(emailVal)){
        form.classList.add('error');
    }
    else{
        form.classList.remove('error');
        document.body.innerHTML='<div style="display:flex;align-items:center;justify-content:center><h1>Thank You</h1></div>'
    }
});

function validateEmail(email){
    var re =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLocaleLowerCase());
}