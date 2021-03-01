// 2.	L502 დაწერეთ კოდი რომელიც ამოწმებს ცარიელია თუ არა მოცემული ელემენტი
let element_content = document.getElementById('empty-list');

if(element_content.childElementCount == 0)
{
    alert('მოცემული ელემენტი ცარიელია.');
}
else
{
    alert('მოცემული ელემენტი არ არის ცარიელი');
}