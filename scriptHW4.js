function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

////// zadanie 1
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((number) => number * 2);

// oryginalna tablica
console.log(numbers);

//nowa tablica
console.log(doubleNumbers);

////// zadanie 2
const students = [
  { name: "Adam", age: 55 },
  { name: "Lola", age: 47 },
  { name: "Janek", age: 37 },
  { name: "Stefan", age: 20 },
  { name: "Kazia", age: 40 },
];

const studentsName = students.map((student) => student.name);

// oryginalna tablica
console.log(students);

//nowa tablica
console.log(studentsName);
