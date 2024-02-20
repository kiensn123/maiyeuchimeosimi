// var h = document.getElementById("number")


/*var t =10;
var it = setInterval(function(){
    console.log(t);
    h.innerText = t //nnerText thay đổi giá trị của text
    t--;
    if (t<0){
        clearInterval(it)
    }

},1000);*/
// setTimeout(function(){
//     alert("Hello everyone")
// },2000); // delay thời gian lại sau 2 giây

// setInterval(function(){
//     alert("Hello everyone")
// },2000); //  vòng lặp vô tận cứ sau 2 giây tbao lại 1 lần

// // nếu muốn dừng thì sao?
// t=10;
// var stop = setInterval(function(){
//     console.log(t);
//     t--;
//     if(t<0){
//         clearInterval(it);
//     }
// },1000);



// var chim = document.getElementById("chim")
// var buoi = document.getElementById("cac")
// var cut = document.getElementById("cut")
// //cut.innerHTML = <i>adu sang tran</i> thay doi cau thuc
// m=1;
// s=0;

/*var timer = setInterval(function(){
    console.log(`${m}:${s}`)
    buoi.innerText = s
    var mang =["blue","red","green","yellow"]
    var rd = Math.random()*4
    rd = parseInt(rd);// 0-4
    chim.innerText = m
    chim.style.color = mang[rd]
 
    if(s<=0){
        m--;
        s=59;
    }
    if(m<0){
        clearInterval(timer);
    }
   
    s--;
},100)*/
// var quay = document.getElementById("fan")
// var dg = 10
// var timer = setInterval(function() {
//     dg+= 50
//     quay.style.transform =`rotate(${dg}deg)`;
   
// }, 100);
var timer


function fan(a){
    clearInterval(timer);
    var q = document.getElementById("fan");
    var dq = 0;
    timer = setInterval(function(){
        dq+=a;
        q.style.transform = `rotate(${dq}deg)`;
    },25)
}


function tatfan(){
    clearInterval(timer);


}
