console.log('Aplicacion interactiva por consola');
const colors = require('colors');
const { menuOpciones } = require('./helper/inquirer');


const menu = async()=>{
    let opt = '';
    do {
        opt = await menuOpciones();
        console.log({opt});
        //if(opt !== '0')await pausa();
    } while (opt !== '0');
}

menu();