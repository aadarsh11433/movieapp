function homepagefun(){
    window.location.href ="index.html"
}

function signuppagefun(){
    window.location.href ="signup.html"
}

let userarr =JSON.parse(localStorage.getItem("userdata"))

function loginfun(){
    event.preventDefault();
    
    let form =document.getElementById("loginform")
    let email =form.mail.value;
    let passcode =form.pass.value;
   
    if(email =="" || passcode ==""){
        alert("Fill in the empty fields")
    }
else
{

    for(let a = 0 ; a<userarr.length;a++){
        if(email != userarr[a].email){
            if(a==userarr.length-1){
                alert("You dont have an account yet");
                window.location.href ="signup.html";
                break;
            }
        }

        else if(passcode != userarr[a].password){
            alert("wrong password")
            break;
        }
        else{
             alert("Login successful");
             window.location.href="index.html";
             break;
        }
    }
}

}

let a =0;

var intro = setInterval(function (){
 document.getElementById("mail").value =a;
 a++
   if(a==200){
    stop()
   }
},1)

//  se/tInterval(function(){
//     console.log(a) 
// },2000)
function stop(){
    clearInterval(intro)
}