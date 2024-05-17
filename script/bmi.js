let weight = document.getElementById('mass')
let height = document.getElementById('length')
let calc = document.getElementById('calculateBut')
let refresh = document.getElementById('clear')
let result = document.getElementById('answer')

calc.addEventListener('click', ()=>{
    calc.innerText =parseFloat(eval(`${weight.value}/${height.value}*${height.value}`)).toFixed(2)
})





refresh.addEventListener('click', function() {
    clearSum();
});

function clearSum() {
    
    calc.innerText = 'Calculate BMI';
    weight.value = ''
    height.value = ''

}
