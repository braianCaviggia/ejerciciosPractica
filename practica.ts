import * as rs from 'readline-sync';

//"CONCURSO DE PINTURAS":

// let calcularPuntaje = (creatividad:number,tecnica:number,originalidad:number) :number => {
//     return creatividad + tecnica + originalidad
// }

// let determinarGanador = () => {
//     let puntajeMasAlto:number = 0;
//     let empate:boolean = false
//     let cantidadConcursantes = rs.questionInt("Ingrese la cantidad de concursantes: ");

//     for (let i = 1; i <= cantidadConcursantes; i++) {
//         let creatividad:number = rs.questionInt(`Ingrese la puntuacion de creatividad del concursante ${i} del 1 al 5: `);
//         let tecnica:number = rs.questionInt(`Ingrese la puntuacion de tecnica del concursante ${i} del 1 al 5: `);
//         let originalidad:number = rs.questionInt(`Ingrese la puntuacion de originalidad del concursante ${i} del 1 al 5: `);

//         let puntaje:number = calcularPuntaje(creatividad,tecnica,originalidad)
//         console.log(`El puntaje del concursante N°${i} es de: ${puntaje}`);

//         if (puntaje > puntajeMasAlto) {
//             puntajeMasAlto = puntaje
//         } else if (puntaje == puntajeMasAlto ) {
//             empate = true
//         }
//     }          if (empate) {
//         console.log("Se produjo un empate")
//     } else {
//         console.log(`El ganador obtuvo un total de ${puntajeMasAlto}`)
//     }
// }

// determinarGanador()



/*En una escuela, cada alumno tiene una calificación en tres asignaturas: Matemáticas, Lengua y Ingles. Tu tarea es crear un sistema que gestione las calificaciones de los alumnos, determine el promedio de cada uno y finalmente indique si han aprobado o reprobado. Para aprobar, el promedio debe ser 6 o más.
Usar: calcularPromedio y determinarEstado como funcion*/

let promedio = (matematicas:number,lengua:number,ingles:number) : number => {
            return (matematicas+lengua+ingles) / 3
}  

let determinarEstado = () => {
    let cantidadAlumno : number = rs.questionInt("Ingrese la cantidad de alumnos: ") 

    for (let i= 1; i <= cantidadAlumno; i++) {
        let matematicas : number = rs.questionInt(`Ingresa la nota de matematicas del alumno ${i}: `)
        let lengua : number = rs.questionInt(`Ingresa la nota de lengua del alumno ${i}: `)
        let ingles : number = rs.questionInt(`Ingresa la nota de ingles del alumno ${i}: `)

        let notaMin:number = 6
        let notaTotal = promedio(matematicas,lengua,ingles)

        if (notaTotal <= notaMin) {
            console.log(`El alumno ${i} tiene un promedio de ${notaTotal} por lo tanto esta desaprobado`)
        } else ( 
            console.log(`¡El alumno ${i} tiene un promedio de ${notaTotal} por lo tanto esta aprobado!`)
        )
    }

}

determinarEstado()






