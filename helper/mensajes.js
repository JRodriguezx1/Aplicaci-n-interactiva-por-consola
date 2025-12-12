require('colors');

const mostrarMenu = ()=>{

    return new Promise(res =>{

        console.clear();
        console.log('==============================='.green);
        console.log('    Seleccione una opcion     '.green);
        console.log('===============================\n'.green);

        console.log(`${ '1.'.green } Crear Tarea` );
        console.log(`${ '2.'.green } Listar tareas`);
        console.log(`${ '3.'.green } Listar tareas completas`);
        console.log(`${ '4.'.green } Borrar tarea`);
        console.log(`${ '5.'.green } Salir`);

        const readline = require('readline').createInterface({
            input: process.stdin, //node pausa la ejecucion de la app y espera caracteres y enter del usuario
            output: process.stdout
        });
        readline.question(`Seleccione una opcion: `, (opt)=>{
            readline.close();
            res(opt);   //retonra el valor ingresado
        });
    });
    
};


const pausa = ()=>{
    return new Promise(res =>{
        const readline = require('readline').createInterface({
            input: process.stdin, //node pausa la ejecucion de la app y espera caracteres y enter del usuario
            output: process.stdout
        });
        readline.question(`Presione ${'ENTER'.green}: `, (opt)=>{
            readline.close();
            res(opt);
        });
    });
}


module.exports = {
    mostrarMenu,
    pausa,
}