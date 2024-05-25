//Start Here
//Variable:petSalon(object)
//Properties:lines 2-4
//keys: name,phone,hours
//Values:"The fashion pet","777-777-7777","9:00am & 9:00pm"
//Each property is separated by a comma, except the lastren
let petSalon ={
    name:"The Fashion pet",
    phone:"777-777-7777",
    hours:{
        open:"9:00 am",
        close:"9:00 pm",
    },
pets:[] 
}    
//constructor...
function Pet(name,age,gender,service,breed){
    //properties=parameter;
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.breed=breed;
}
function isValid(aPet){
    let validation=true;

    if(aPet.name==""){
        validation=false;
    }
    return validation;
}
function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let newPet = new Pet(inputName,inputAge,inputGender,inputService,inputBreed);   
    petSalon.pets.push(newPet);
    console.log(petSalon.pets);
}
function init(){
    let pet1 = new Pet("Lassie",23,"Female","Grooming");
    let pet2 = new Pet("Toto",25,"Male","Grooming");
    let pet3 = new Pet("Snoopy",60,"Male","Grooming");
    petSalon.pets.push(pet1,);
    petSalon.pets.push(pet2,);
    petSalon.pets.push(pet3,);
    console.log(petSalon.pets);                                                                                        9
}
window.onload=init;




    //document.getElementById("petNames").innerHTML=names;