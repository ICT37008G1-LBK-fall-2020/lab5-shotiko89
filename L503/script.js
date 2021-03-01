// L503 დაწერეთ კოდი რომელიც ცხრილის უჯრებს დიაგონალის მმიხედვით გააწითლებს,
// გამოიყენეთ შემდეგი კოდი:
// td.style.backgroundColor = 'red';

let table = document.getElementById('table');

for(let i=0; i<table.rows.length; i++)
{
    for(let j=0; j<table.rows[i].cells.length; j++)
    {
        if(i==j)
        {
            table.rows[i].cells[j].style.backgroundColor = 'red';
        }
    }
}