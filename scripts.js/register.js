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
function Pet(name,age,gender,breed,genus,service){
    //properties=parameter;
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.genus=genus;
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
    if(aPet.name==""){
        validation=false;
        document.getElementById("txtGender").classList.add("alert-error")
    }
    if(aPet.name==""){
        validation=false;
        document.getElementById("txtBreed").classList.add("alert-error")
    }
    if(aPet.name==""){
        validation=false;
        document.getElementById("txtGenus").classList.add("alert-error")
    }
    if(aPet.name==""){
        validation=false;
        document.getElementById("txtService").classList.add("alert-error")
    }
    return validation;
}
function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputGenus = document.getElementById("txtGenus").value;
    let inputService = document.getElementById("txtService").value;
    
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputGenus,inputService);  
    if(isValid(newPet)){
    petSalon.pets.push(newPet);
    
    displayCards();
    displayRows(); 
    displayTotalPets();
    
    }
}

function deletePet(index){
    petSalon.pets.splice(index, 1);
    displayCards();
    displayRows(); 
    displayTotalPets();
}

function init(){
    let pet1 = new Pet("Lassie",23,"Female","Rough Collie","Dog","Grooming");
    let pet2 = new Pet("Toto",25,"Female","Cairn Terrier","Dog","Grooming");
    let pet3 = new Pet("Snoopy",60,"Male","Pitbull","Dog","Grooming");
    petSalon.pets.push(pet1);
    petSalon.pets.push(pet2);
    petSalon.pets.push(pet3);
    displayCards(); 
    displayRows();
    displayTotalPets();                                                                                      9
}
window.onload=init;




    //document.getElementById("petNames").innerHTML=names;