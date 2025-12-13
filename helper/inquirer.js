import inquirer from 'inquirer';
import 'colors';

const preguntas = [{
    type: 'list',
    name: 'Opcion',
    message: 'Que desea hacer?',
    choices: ['opt1', 'opt2', 'opt3']
}];

const menuOpciones = async()=>{
    console.clear();
    console.log('==============================='.green);
    console.log('    Seleccione una opcion     '.green);
    console.log('===============================\n'.green);

    const opt = await inquirer.prompt(preguntas);
    return opt;
}


export {
    menuOpciones,
}