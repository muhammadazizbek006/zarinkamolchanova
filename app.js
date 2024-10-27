// let title = document.querySelector('h2');
// const minus = document.querySelector('#minus');
// const span = document.querySelector('span');
// const pilus = document.querySelector('#pilus');

// let i = 1

// pilus.addEventListener('click', ()=>{
//     span.textContent = i++;
// })


//     minus.addEventListener('click', ()=>{
//         if(i > 1){
//         span.textContent = i--;
//     }
//     })


// if(document.body.classList.add('gooo')){
//     btn.addEventListener('click', ()=> {
//         document.body.classList.remove('gooo')
//     })
// }else{(document.body.classList.remove('gooo'))

//     btn.addEventListener('click', ()=> {
//         document.body.classList.add('gooo')
//     })
// }


// const data = ['ali', 'Vali', 'gani'];
// const ism = prompt();

// if(data.filter((e)=> e === ism).length > 0){
//     console.log(ism);
    
// }else{
//     console.log('xato');
    
// }


// const correctPassword = "12345"; // Ilovaning parolini shu yerda belgilang
// // Foydalanuvchining parolini shu yerda tekshiring
// const userPassword = prompt("Parolingizni kiriting:");
// Password(userPassword);

// function Password(userPassword) {
//   if (userPassword === correctPassword) {
//     console.log("Welcome");
//   } else {
//     console.error("Error: Parol noto'g'ri");
//   }
// }





const numberData = [1, 2, 3, 4, 5, 6];
let son = Number(prompt("Son kiriting:"));
let randomSon = numberData[Math.floor(Math.random() * numberData.length)];

document.body.innerHTML = `
  <p>Massivdagi sonlar: ${numberData.join(', ')}</p>
  <p>${son === randomSon ? "Tabriklaymiz, yutdingiz!" : "Afsus, yutolmadingiz."}</p>
  <p>Tanlangan son: ${randomSon}</p>
`;
