
const quotes =[{
    quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    parson : 'steven joha'
},
{
    quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    parson : 'roy'
},
{
    quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    parson : 'anik'
},
{
    quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    parson : 'steven'
},
{
    quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    parson : 'apu'
},
{
    quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    parson : 'joy'
},
{
    quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    parson : 'arpon'
},
{
    quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    parson : 'ajoy'
},
{
    quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    parson : 'ajoy'
},
{
    quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    parson : 'omw'
},
]





document.querySelector('#quote').addEventListener('click',function(){

    const p = document.getElementById('quote-p');
    const name = document.getElementById('name');

    const randomQuote = Math.floor(Math.random()*quotes.length);
    const q = quotes[randomQuote].quote;
    const parson = quotes[randomQuote].parson;

    p.innerText = q
    name.innerText = parson
});