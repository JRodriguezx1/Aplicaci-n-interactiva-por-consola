import inquirer from 'inquirer';
import 'colors';

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: 'Que desea hacer?',
    choices: [
        {
            value: '1',
            name: '1. Crear lista'
        },
         {
            value: '2',
            name: '2. Listar tarea'
        },
         {
            value: '3',
            name: '3. Tareas completadas'
        },
         {
            value: '4',
            name: '4. Completar tarea(s)'
        },
        {
            value: '5',
            name: '5. Borrar tarea'
        },
        {
            value: '6',
            name: '6. Salir'
        }
    ]
}];

const menuOpciones = async()=>{
    console.clear();
    console.log('==============================='.green);
    console.log('    Seleccione una opcion     '.white);
    console.log('===============================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}



const pausa = async()=>{
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar.`,
        }
    ]
    console.log('\n');
    await inquirer.prompt(question);
}


const leerInput = async(mensaje)=>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: mensaje,  //mensaje capta el valor del input en un ojeto
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingreso un valor';
                }
                return true;
            }
        }
    ];
    //console.log('\n');
    const { desc } = await inquirer.prompt(question);//desestructurar obj desc
    return desc;

}


const listadoTareasBorrar = async(tareas = [])=>{
    const choices = tareas.map( (tarea, i) =>{
        const idx = `${i + 1}`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc};`
        }
        
    });

    choices.unshift({
        value: '0',
        name: '0 '.green + 'Cancelar',
    });

    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'borrar',
            choices: choices
        }
    ];

    const { id } = await inquirer.prompt(question);
    return id;
}


const confirmar = async(mensaje)=>{
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message: mensaje
        }
    ]
    const { ok } = await inquirer.prompt(question);
    return ok;
}


const mostrarListadoChecklist = async(tareas = [])=>{
    const choices = tareas.map( (tarea, i) =>{
        const idx = `${i + 1}`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc};`,
            checked: (tarea.completadoEn)?true:false
        }
        
    });

    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices: choices
        }
    ];

    const { ids } = await inquirer.prompt(question);
    return ids;
}


export {
    menuOpciones,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}