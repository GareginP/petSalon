let petSalon ={
    name:"The Fashion pet",
    phone:"777-777-7777",
    hours:{
        open:"9:00 am",
        close:"9:00 pm",
    },
    pets:[]    
}
//Constructor...
function Pet(name,age,gender,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
}
function isValid(aPet){
    let validation=true;

    if(aPet.name==""){
        validation=false;
        document.getElementById("txtName").classList.add("alert-error");
    }
    if(aPet.name==""){
        validation=false;
        document.getElementById("txtAge").classList.add("alert-error")
    }
    return validation;
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let newPet = (inputName,inputName,inputGender,inputService);

}

function init(){
    console.log(petSalon.pets);                                                                                        9

}

window.onload=init;









