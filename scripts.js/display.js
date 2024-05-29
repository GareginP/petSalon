function displayCards(){
    let card="";
    const petDiv=document.getElementById("petDiv");

    for(let i=0 ;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        card+=`
        <div class="petCard">
        <h4>${pet.name}</h4>
        <p>${pet.age}</p>
        <p>${pet.gender}</p>
        <p>${pet.breed}</p>
        <p>${pet.genus}</P>
        <p>${pet.service}</p>
        </div>
    `;
    }   
    petDiv.innerHTML=card;
}

function displayRows(){
    const petTable=document.getElementById("petTable");
    petTable.innerHTML = "";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        let row = `
        <tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.genus}</td>
            <td>${pet.service}</td>
            <td><button class="petButtn" onclick="deletePet(${i})">Delete</button></td>
        </tr>
        `;
        petTable.innerHTML += row;
    }
}
function displayTotalPets(){
    document.getElementById("total").innerHTML=petSalon.pets.length;
    
}