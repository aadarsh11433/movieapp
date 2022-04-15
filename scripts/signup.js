var userarr = JSON.parse(localStorage.getItem("userdata")) || [];

function obmaker(n,e,m,p){
    this.name =n;
    this.email=e;
    this.mobile= m;
    this.password =p;
}





function signupfun(){

    event.preventDefault();
    let form = document.getElementById("form")
    let name =form.name.value;
    let email =form.mail.value;
    let mob =form.mob.value;
    let password =form.pass.value;

    if(name=="" || email =="" || mob =="" || password ==""){
        alert("Fill in the empty fields")
    }
    else{
    let userob = new obmaker(name,email,mob,password)

    userarr.push(userob);
    localStorage.setItem("userdata",JSON.stringify(userarr))
    
   alert("Signup successfull")
   window.location.href ="login.html"
    }
}




function homepagefun(){
    window.location.href ="index.html"
}

function loginpagefun(){
    window.location.href ="login.html"
}