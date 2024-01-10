let num1 = ''
let operator = ''
let num2 = ''
const output = document.querySelector('#output');
const equation = document.querySelector('#equation')
const keys= document.querySelectorAll(".num")
const equal= document.querySelector('.equal')

const clearBtn=document.querySelector("#clear")
function clear(){
    num1=''
    num2=''
    operator=''
    output.textContent=''
    equation.textContent=''
    console.log('cleared')
}
clearBtn.addEventListener('click', clear)

const addition=(x,y)=>{return parseFloat(x) + parseFloat(y)}

const subtraction=(x,y)=>{return parseFloat(x) - parseFloat(y)}

const division=(x,y)=>{
    if (parseFloat(y)===0){return "Nope"}
    else return (parseFloat(x) / parseFloat(y))}

const multiplication=(x,y)=>{return x*y}

Array.from(keys).forEach(key =>{
    key.addEventListener('click', e => {
        equation.textContent += e.target.id
        if (e.target.id=='+'){
            num1=equation.textContent.slice(0,-1)
            equal.addEventListener('click',()=>{
                let char='+'
                num2=equation.textContent.substring(equation.textContent.indexOf(char) +1)
                output.textContent=addition(num1,num2)
            })    
        }
        if (e.target.id=='/'){
            num1=equation.textContent.slice(0,-1)
            equal.addEventListener('click',()=>{
                let char='/'
                num2=equation.textContent.substring(equation.textContent.indexOf(char) +1)
                output.textContent=division(num1,num2)
            })
            
        }
        if (e.target.id=='-'){
            num1=equation.textContent.slice(0,-1)
            equal.addEventListener('click',()=>{
                let char='-'
                num2=equation.textContent.substring(equation.textContent.indexOf(char) +1)
                output.textContent=subtraction(num1,num2)
            })
            
        }
        if (e.target.id=='x'){
            num1=equation.textContent.slice(0,-1)
            equal.addEventListener('click',()=>{
                let char='x'
                num2=equation.textContent.substring(equation.textContent.indexOf(char) +1)
                output.textContent=multiplication(num1,num2)
            })
            
        }
    })
})