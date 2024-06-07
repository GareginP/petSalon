//JS vs jQuery Selectors

// document.getElementById("txtName").style.display="none";
// $("txtName").hide();


//let div = document.getElementsByTagName("div");
//for(let i=0;i<div.length;i++){
    //div[i].style.display="none";}

// $(".form-control").hide();

//$("div").hide();

//$("#txtFooter").val(); // getting the value from an input

numbers =[1,2,3,4,5,6,7,8,9,10]
function num(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum;
   console.log(sum);
}
function sumEvenNumbers(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            sum += numbersArray[i];
        }
    }
    return sum;
}

// Example usage:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = sumEvenNumbers(numbers);
console.log(result); // Output: 30