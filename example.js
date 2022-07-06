let date = new Date();
let result = "";
result += date.getFullYear()+"-"

if(date.getMonth()+1 >= 10){
    result += (date.getMonth()+1)+"-"
}
else{
    result += `0${(date.getMonth()+1)}-`
}

if(date.getDate() >= 10){
    result += date.getDate()
}
else{
    result += `0${date.getDate()}`
}

console.log(result);