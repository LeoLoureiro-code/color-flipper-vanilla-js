const color = document.getElementById('color')
const btn = document.getElementById('change-color')

const numbers = ['0','1','2','3','4','5','6','7','8','9']
const alphabet = ['a','b','c','d','e','f']

const getNumber = () =>{
    return numbers[Math.floor(Math.random() * numbers.length)]
    
}

const getAlphabet = () =>{
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

const getRandom = () =>{
    let arr = []
    arr.push(getNumber())
    arr.push(getAlphabet())
    return arr[Math.floor(Math.random() * arr.length)]
}
 
btn.addEventListener('click', function(){
    let hex = "#"

    for(let i = 0; i < 6; i++){
        hex += getRandom()
    }
    color.innerHTML = hex
    document.body.style.backgroundColor = hex
})