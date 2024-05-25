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

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let newPet = (inputName,inputName,inputGender,inputService);

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









