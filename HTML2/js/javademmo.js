// đây là ngôn ngữ logic
console.log("dietmemay") //in ra dietmemay
var x; // x khong co kieu du lieu x = null
x = 10; // x la so 
var y = "dit me may"; // y la string
let n = 20; //bien cuc bo

var z  = x+10;//20
var z1 = x+y ;// "10dit me may"
var z2 = y+y //dit me may dit me may
var z3 = "20" +10; //"2010" chuoi

console.log(x+y+"20"+10);//"10dit me may2010"

if (x>10){
    
}else{

}



for (var i=0;i<10;i++){
    console.log("i="+i)

}

var arr =[]; //khai bao mang
arr[0] = 2
arr[1] = "abc"

arr.push(135); // tu dong them vao mang arr[2] = 135
arr.push("buoi"); // tu dong them vao mang arr[3] = buoi

console.log("kich thuoc cua mang :"+arr.length)
for (var i=0;i<arr.length;i++){
    console.log(arr[i])
}



arr.forEach(e=>{
    console.log(e)
})


function tinhtong(a,b){

    console.log(a+b);

}


tinhtong(5,arr)



//alert("yeu cau chim dai tren 20 cm"); //tao canh bao 

//var tl = confirm("ban chac chua");
//if (tl){
    //alert("m chim be dung ko");
//}else{
    //alert("oke chim to roi");
//}

//var buoito= prompt("m cu to bao nhieu m");// string "18"
/*
"18" = 18
"18a" = 18
"18a2" = 18
"a18" = NaN (not number)
*/

//if (parseInt(buoito)>20){
    //alert("da du dieu kein")

//}else{
    //alert("khong du dieu kien")
//}
//var rd = Math.random(); //ngau nhien trong khoang 0<rd<1 0.9900

/*rd = rd*10 ;// 0,0012 = 0,12
console.log(rd);
var buoito= prompt("m cu to bao nhieu m");// string "18"
if (buoito == parseInt(rd)){
    console.log("khong trung");
    alert("thg ngu da trung");



}else{
    console.log("khong trung");
    alert("thg ngu deo trung");
    
}*/

/*var tiengoc = 2000;
for (var i =0 ;i<7;){
    var buoito= prompt("so tien dat cuoc  la ");
    if (parseInt(buoito)<tiengoc){
        tiengoc = tiengoc - parseInt(buoito)
        var datcuoc= prompt("chon so ngau nhien ");
        var ram = Math.random()
        ram = ram*100
        if (parseInt(datcuoc) == ram){
            tiengoc = parseInt(buoito)*2+tiengoc
        }

        i++;
    }else{
        alert("so tien nhap lon hon so tien goc")
    }
}
console.log(tiengoc)*/


/*var soconnlai = 0;
for (var i=0;i<7;i++){
    var boso = [];
    for (var j =0 ;j<23;j++){
        var songaunhien = Math.random();
        songaunhien = songaunhien *100; 
        boso.push(songaunhien);
    }
    var sotien= prompt(`so tien dat cuoc ngay ${i}`);
    sotien = parseInt(sotien);
    if (sotien>soconnlai){
        soconnlai = soconnlai+sotien;

    }else{
        soconnlai = soconnlai-sotien;
    }
    var chonso= prompt(`nhap so ngau nhien ngay ${i}`);
    chonso = parseInt(chonso);
    boso.forEach(e=>{
        if (chonso == e){
            soconnlai += (sotien/23)*80;
        }
    })
}
console.log(soconnlai)*/

var sotien = 10000
var hoi = confirm(`SỐ tiền của bạn là ${sotien}, Bạn muốn mua vé số với giá 10k không`)



if (hoi){
    var diem = 0;
    var veso = []
    var vemua = "";
  
    console.log(vemua)
    for (var i =0;i<6;i++){
        var a = Math.random() * 100
        a = parseInt(a);
        vemua  = a +" "+ vemua;
        veso.push(a)
    }
    sotien -= 10000;
    alert(`số tiền còn lại là : ${sotien} ,bạn đã mua vé có số là : ` +vemua);
    var lode = []
    var xoxo = "";
    for (var i =0;i<6;i++){
        var a = Math.random() * 100
        a = parseInt(a);
        veso.forEach(e=>{
            if (a == e){ 
                diem++;
            }
        })
        xoxo = a +" "+ xoxo
        lode.push(a)
        
    }
    alert("xo xo ngày hôm này là "+xoxo +"ve so ban mua la "+ vemua);
    if (diem<=2){
        alert("bạn đếu trúng , bạn là thg thật bại");
    }else if(diem == 3){
        alert("bạn đc bố thí 100.000");
        sotien += 100000
    }else if (diem ==4) {
        alert("bạn đc bố thí 10.000.000");
        sotiena+= 10000000
    }else{
        alert("bạn trúng vietlot 100 ty , h bạn dã thành ti phú ");
        sotien += 100000000000
    }





}else{
    alert("bạn đã mất cơ hội trúng 100 tỉ");
}


console.log("so tien cua ban la"+ sotien)















