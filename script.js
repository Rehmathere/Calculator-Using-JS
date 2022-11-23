console.log("Calculator Project")

// Date / Time  
function mt(){
    let a = document.getElementById('meratime')
    a.innerHTML = new Date()
    console.log(a)
    // document.getElementById('meratime').innerHTML = new Date();
}
setInterval(mt,1000);

let b = document.getElementById('meratime')
b.style.border="2px solid black"
b.style.borderRadius="50px"
b.style.fontSize="15px"
b.style.fontWeight="bold"
b.style.width="28vw"
b.style.margin="30px"
b.style.padding="7px"
b.style.textAlign="center"
b.style.backgroundColor="darkkhaki"
b.style.position="absolute"
b.style.top="710px"
b.style.right="0px"
b.style.cursor="pointer"
// ------------ Calculations
let string="";
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            string=eval(string)
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML=='AC')
        {
            string=""
            document.querySelector('input').value=string
        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML
            document.querySelector('input').value=string
        }
    })
})






