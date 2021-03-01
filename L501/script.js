/*
ყოველი შემთხვევისთვის, ჯერ კონკრეტულ ელემენტს console-ში შემდგომ ალერტის სახით გამოვიტან...
იმედია არ იქნება შეცდომა...
*/

// 1.	L501 მოცემულია გვერდი: (index.html ფაილის კონტენტი)

// 1.1	დაწერეთ კოდი რომელიც აიღებს head ელემენტს
                console.log(document.head);
alert('head ელემენტი:\n\n'+document.head);

// 1.2	დაწერეთ კოდი რომელიც აიღებს ul ელემენტს
            console.log(document.getElementsByTagName('ul')[0]);
alert('ul ელემენტი:\n\n'+document.getElementsByTagName('ul')[0]);

// 1.3	დაწერეთ კოდი რომელიც აიღებს მეორე li ელემენტს
                console.log(document.getElementsByTagName('li')[1]);
alert('მეორე li ელემენტ:\n\n'+document.getElementsByTagName('li')[1]);