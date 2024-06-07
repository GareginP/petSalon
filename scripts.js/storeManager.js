function saveItem(item){
    console.log(item);
    let val = JSON.stringify(item);
    console.log(val);
    localStorage.setItem("services",val);
}
function readItems(){
    let data = localStorage.getItem("services");

    if(!data){
        return [];
    }else{
        let list = JSON.parse(data);
        return list;
    }

;}
