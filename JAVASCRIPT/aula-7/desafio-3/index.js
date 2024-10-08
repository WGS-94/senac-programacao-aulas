
// 3 - Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:

// Parte a
const lb = 20;
const kgFromLb = lb * 0.453592;
console.log(`${lb}lb equivalem a ${kgFromLb.toFixed(2)} kg`);

// Parte b
const oz = 10.5;
const kgFromOz = oz * 0.0283495; 
console.log(`${oz}oz equivalem a ${kgFromOz.toFixed(2)} kg`);

// Parte c
const mi = 100;
const mFromMi =  mi * 1609.34;
console.log(`${mi}mi equivalem a ${mFromMi.toFixed(2)} m`);

// Parte d
const ft = 50;
const mFromFt = ft * 0.3048;
console.log(`${ft}ft equivalem a ${mFromFt.toFixed(2)} m`);

// Parte e
const gal = 103.56;
const lFromGal = gal * 3.78541;
console.log(`${gal}gal equivalem a ${lFromGal.toFixed(2)} l`);

// Parte f
const xic = 450;
const lFromXic = xic * 0.24;
console.log(`${xic} xic equivalem a ${lFromXic.toFixed(2)} l`);