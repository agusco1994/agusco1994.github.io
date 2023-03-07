let toggle=document.getElementById('toggle');
let label_togggle=document.getElementById('label_toggle');
toggle.addEventListener('change',(event)=>{
let checked=event.target.checked;
document.body.classList.toggle('dark');
if (checked==true){
    label_togggle.innerHTML='<i class="fa-solid fa-sun"></i>';
    label_togggle.style.color="yellow";
}else{
    label_togggle_toggle.innerHTML='<i class="fa-solid fa-sun"></i>';
    label_togggle.style.color="#742FE6";

}

})

function validate(){
    var name = document.getElementById("Nombre").value;
    var subject = document.getElementById("Asunto").value;
    var phone = document.getElementById("Teléfono").value;
    var email = document.getElementById("Email").value;
    var message = document.getElementById("Mensaje").value;
    var error_message = document.getElementById("error_message");
 
    
 }