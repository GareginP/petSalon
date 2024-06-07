$(document).ready(function() {
function Service(description,price){
    this.description=description;   
    this.price=price;
}

function isValid(service){
    let validation = true;
    if(service.description == ""){
        validation=false;
    $("txtdescription").addClass("alert-error");
}else{
    $("#txtDescription").removeClass("alert-error");
}
    return validation;
}

function register(){
    console.log("adding a new service");
// getting the values
    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();

//create the obj
    let newService = new Service(inputDescription,inputPrice);

//display it on the console{
    if(isValid(newService)){
    saveItem(newService);
    $("input").val(""); 
    displayServices();
    }
}


function displayServices() {
    let services = getItems();
    let servicesList = $("#servicesList");
    servicesList.empty();

    services.forEach(service => {
        let serviceCard = `
        <div class="service-card">
            <div class="service-card-content">
                <h3>Description: ${service.description}</h3>
                <p>Price: $${service.price}</p>
            </div>
        </div>
            `;
            servicesList.append(serviceCard);
        });
    }
        $("button").on("click", register);

        displayServices();
    });
    
    function saveItem(service) {
        let services = getItems();
        services.push(service);
        localStorage.setItem('services', JSON.stringify(services));
    }
    
    function getItems() {
        let services = localStorage.getItem('services');
        if (services) {
            return JSON.parse(services);
        } else {
            return [];
        }
    }
    function displayServices() {
        let services = getItems();
        let servicesList = $("#servicesList");
        servicesList.empty(); // Clear current list
    
        services.forEach(service => {
            let serviceCard = `
                <div class="service-card">
                    <div class="service-card-content">
                        <h3>Description: ${service.description}</h3>
                        <p>Price: $${service.price}</p>
                    </div>
                </div>
            `;
            servicesList.append(serviceCard);
        });
    }