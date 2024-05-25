//Start Here
let petSalon ={
    name:"The Fashion pet",
    phone:"777-777-7777",
    hours:{
        open:"9:00 am",
        close:"9:00 pm",
    },
pets:[
    {name:"Lassie",
    age:99,
    gender:"Male",
    service:"Grooming",
    breed:"Rough Collie",
    },
    {name:"Toto",
    age:99,
    gender:"Male",
    service:"Grooming",
    breed:"Cairn Terrier",
    },
    {name:"Snoopy",
    age:99,
    gender:"Male",
    service:"Grooming",
    breed:"Pitbull",
    }
], 
}    

function displayNames(){
    for(let i=0;i<=3;i++){
        names+= `<p> ${petSalon.pets[i].name}`;
        console.log(names)
    } 
    document.getElementById("petList").innerHTML+=`<p> ${petSalon.pets[i].name}</p>`;
}

function countPet(){
    let sum=0;
    for(let i=0; i<petSalon.pets.length;i++){
        sum=i+1;
    console.log(petSalon.pets.lenght);
    }
}

//console.log(petSalon.pets[2].name)



    //document.getElementById("petNames").innerHTML=names;