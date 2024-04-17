
let estudiantes1=[{nombre: 'Juan',nota:0},
{nombre: 'CarNe',nota:2},
{nombre: 'FideO',nota:1},
{nombre: 'CarNe',nota:2},
{nombre: 'FideO',nota:1},
{nombre: 'CarNe',nota:2},
{nombre: 'FideO',nota:1},
{nombre: 'CarNe',nota:2},
{nombre: 'FideO',nota:1},
{nombre: 'Papa',nota:3}];
/*
let estudiantes = [
    { nombre: 'Juan', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'CarNe', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'FideO', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'CarNe', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'FideO', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'CarNe', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'FideO', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'CarNe', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'FideO', nota: Math.floor(Math.random() * 81) + 20 },
    { nombre: 'Papa', nota: Math.floor(Math.random() * 81) + 20 }
  ];
  
  console.log(estudiantes);
  
  let notas = estudiantes.map(estudiante => estudiante.nota);
  let notaMayor = Math.max(...notas);
  let notaMenor = Math.min(...notas);
  let promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;
  
  console.log("Nota mayor: " + notaMayor);
  console.log("Nota menor: " + notaMenor);
  console.log("Promedio: " + promedio);*/

  let nombres = ['Juan', 'Carlos', 'Fernando', 'Carolina', 'Fidelia', 'Carmen', 'Fiona', 'Carmelo', 'Felipe', 'Pedro'];

  let estudiantes = nombres.map(nombre => ({
    nombre: nombre,
    nota: Math.floor(Math.random() * 81) + 20
  }));
  
  console.log(estudiantes);
  
  let notas = estudiantes.map(estudiante => estudiante.nota);
  let notaMayor = Math.max(...notas);
  let notaMenor = Math.min(...notas);
  let estudianteNotaMayor = estudiantes.find(estudiante => estudiante.nota === notaMayor);
  let estudianteNotaMenor = estudiantes.find(estudiante => estudiante.nota === notaMenor);
  let promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;
  
  console.log("Nota mayor: " + estudianteNotaMayor.nombre + " - " + notaMayor);
  console.log("Nota menor: " + estudianteNotaMenor.nombre + " - " + notaMenor);
  console.log("Promedio: " + promedio);