const main = document.getElementById("main");

const randomColor1 =()=>{
    let val ="0123456789ABCDEF";
    let cons = "#";
    for (let i = 0; i < 6; i++){
        cons = cons + val[Math.floor(Math.random()*15)];
    }
    return cons;
}


function colorRandomChanger(){
    document.body.style.backgroundColor = randomColor1();
  
}
main.addEventListener("mouseout",colorRandomChanger);