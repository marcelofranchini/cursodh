function alarme1(){
    return "São 8:00 horas"
}

const alarme2 = () => "São 7:50 h, quase hora de acordar";


setTimeout(function(){
    console.log(alarme1())
}, 3000);


setTimeout(function(){
    console.log(alarme2())
}, 1000);

console.log(alarme1());


