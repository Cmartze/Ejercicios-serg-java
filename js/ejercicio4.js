/*
Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

*/ 

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(courses1, courses2) {
  // Filtramos los cursos del primer estudiante que también están presentes en los cursos del segundo estudiante.
  let commonCourses = courses1.filter(course => courses2.includes(course));

  // Si hay cursos comunes, los imprimimos en la consola.
  if (commonCourses.length > 0) {
    console.log("Common courses:");
    commonCourses.forEach(course => console.log(course));
  } else {
    console.log("No common courses found.");
  }
}

// Llamamos a la función con los arrays de cursos de los estudiantes 1 y 2.
findCommonCourses(student1Courses, student2Courses);
