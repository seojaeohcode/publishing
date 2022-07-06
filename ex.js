let sum = 0;
let arr = new Array(10000);

for(let i=0; i<10000; i++){
    arr[i] = true;
}

function check() {
    //합 구하기
    [...i.toString()].forEach((num) => {
        sum += Number(num); 
    });

    sum += Number(i);

    arr[sum] = false;

    sum = 0;
}

for (i = 1; i <= 10000; i++) {
    check();
}

for(i=1; i<10001; i++)
{
    if(arr[i]==true){
        console.log(i);
    }
}