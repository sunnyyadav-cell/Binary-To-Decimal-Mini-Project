let result = document.querySelector("h3");

let input = document.querySelector("input");

let btn = document.querySelector("button");

btn.addEventListener("click" , function()
{
   let val = input.value;
   let output = todecimal(val);
   result.innerHTML = `Decimal Value of the ${val} is ${output}`;
});

function todecimal(value)
{
    let num = value.toString();
    let decval = 0;
    let base = 1;
    for(let i = num.length- 1 ; i >= 0 ;i--)
    {
        if(num.charAt(i) == '1')
        {
            decval+=base;
        }
        base*=2;
    }
    return decval;
}