// L505 დაწერეთ სკრიპტი რომელიც კითხავს მომხმარებელს რისი ყიდვა სურს და
// თუ შეიტანს სიტყვა „laptop“ შეუცვლის ფონს ყველა ლეპტოპს (მწვანე ფერით)
// ხოლო თუ შეიტანს სიტყვა „desktop“ ყველა desktop-ს (ლურჯი ფერით).

let pc_s, latop_s, desktop_s;
pc_s = document.getElementById('pc-container');

latop_s = pc_s.children[0];
desktop_s = pc_s.children[1];


let question = prompt('რისი ყიდვა გსურთ?'+'\nმიუთითეთ სიტყვა "laptop" ან "desktop".', '');

if(question == 'laptop')
{
    latop_s.style.backgroundColor = "green";
}

if(question == 'desktop')
{
    desktop_s.style.backgroundColor = "blue";
}