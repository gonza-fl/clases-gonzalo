const LIMITE_ALUMNOS = 3;
const LIMITE_TRIMESTRES = 3;
const arrAlumnos = [];
let textAux = '';
let nombreAlumno = '';
let trimestreActual = 1;
let promedioCurso = 0;
let alumnoActual = 1;
let notaAlumno = 0;

alert(
  'Vamos a ingresar 3 alumnos como maximo y por cada alumno, las 3 notas correspondientes a cada trimestre'
);

// Recorremos el listado de alumnos e ingresamos cada uno con sus notas
do {
  switch (alumnoActual) {
    case 1:
      textAux = 'primer';
      break;
    case 2:
      textAux = 'segundo';
      break;
    case 3:
      textAux = 'tercer';
      break;
  }
  nombreAlumno = prompt(`Ingrese el nombre del ${textAux} alumno`);

  // Ingresamos la nota del alumno correspondiente a cada trimestre
  do {
    switch (trimestreActual) {
      case 1:
        textAux = 'primer';
        break;
      case 2:
        textAux = 'segunda';
        break;
      case 3:
        textAux = 'tercer';
        break;
    }
    notaAlumno += parseInt(
      prompt(`Ingrese la ${textAux} nota de ${nombreAlumno}`)
    );
    trimestreActual = trimestreActual + 1;
  } while (trimestreActual <= LIMITE_TRIMESTRES);
  notaAlumno = notaAlumno / LIMITE_TRIMESTRES;
  arrAlumnos.push({
    alumno: nombreAlumno,
    promedio: notaAlumno,
  });
  alumnoActual = alumnoActual + 1;
  notaAlumno = 0;
  trimestreActual = 1;
} while (alumnoActual <= LIMITE_ALUMNOS);

arrAlumnos.forEach((alumno) => {
  promedioCurso += alumno.promedio;
});
promedioCurso = parseInt(promedioCurso / LIMITE_ALUMNOS);

alert(`Resultado:
promedio del curso: ${promedioCurso}
`);
