let student = {
    name: "Marie",
    age: 20,
    courses: []
};

// 1. Modifiez les propriétés de l'objet
student.age = 21;
student.grade = "A";

// 2. Travaillez avec le tableau courses
student.courses.push("Math", "Physics", "Chemistry");

// Utilisez indexOf pour trouver l'indice de "Physics"
let indexOfPhysics = student.courses.indexOf("Physics");

// Utilisez slice pour obtenir les deux premiers éléments du tableau
let firstTwoCourses = student.courses.slice(0, 2);

// 3. Affichez les résultats
console.log("Student object with modifications : ", student);
console.log("Index of 'Physics' : ", indexOfPhysics);
console.log("First two courses : ", firstTwoCourses);