
let count = 0

document.getElementById('plus-btn').addEventListener('click',function(){
    const element = document.getElementById('count');

    count += 1;

    element.innerText = count;

})


document.getElementById('minus-btn').addEventListener('click',function(){
    const element = document.getElementById('count');

    count -= 1;

    element.innerText = count;

})