//密碼檢驗

var password = 123456;
var input;
var deadtime = 0;

while(input!=password && deadtime <=2){
    input = prompt("請輸入密碼:(還有"+ (3-deadtime) + "次機會)");
    deadtime +=1;

    if(input == password){
            alert("登入成功!");
            break;
        }else if(deadtime ==3){
            alert("密碼已鎖住!");
            break;
        }
}


