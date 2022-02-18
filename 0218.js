// ___________1___________
let skaicius1 = 7;
let skaicius2 = 8;
if (skaicius1 > skaicius2) {
    console.log('Skaicius1 didesnis uz skaiciu2');
} else if (skaicius1 == skaicius2) {
    console.log('Skaiciai yra lygus');
} else {
    console.log('Skaicius1 yra mazesnis uz skaiciu2');
}
// ___________2___________
let i = 1;
let a = ' ';

while (i < 11) {
    a += i + ' '
    i++
}
console.log(a)
// ___________3___________

let i = -2

while(i < 10) {
    i += 2
    console.log(i)
}
// ___________5___________
function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let skai = 0;

for (i = 0; i <= 4; i++) {
    skai = randomSkaicius(1, 10);
    console.log(skai);
}
// ___________5___________
function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let penki = 0;

while (penki != 5) {
    penki = randomSkaicius(1, 10);
    console.log(penki);
}
// ___________6___________
function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  let masyvas = []
  let reiksmes = randomSkaicius(10, 30)
  
  for (let i = 0; i < reiksmes; i++) {
  let x = randomSkaicius(20, 30)
  masyvas.push(x)
  }

  console.log(masyvas);
  // ___________7___________
  
  let masyvas1 = [];
  let mas = [];
  function RandomL() {
      let abc = "ABCD"
      return abc[Math.floor(Math.random() * abc.length)]
  }
  for(let i = 0; i < 100; i++) {
      masyvas1[i] = RandomL(i)
  }
  
  masyvas1.forEach((i) => {
      mas[i] = (mas[i] || 0 ) +1;
  })

  console.log(masyvas1)
  console.log('Kiekvienos raides yra: ', mas)

   // ___________8___________
  
   let x = lygineSuma(10, 15);

   function lygineSuma(a, b) {
    return a + b;            
  }
  console.log(x)
