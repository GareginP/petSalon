

function Service(description,price){
    this.description=description;   
    this.price=price;
}

function isValid(service){
    let validation=true;
    if(service.description==""){
        validation=false;
    $("txtdescription").addClass("alert-error");
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
    function displayNewService(){
    document.getElementById("total").innerHTML=petSalon.pets.length;  
    }
    $//("input").val("");

}