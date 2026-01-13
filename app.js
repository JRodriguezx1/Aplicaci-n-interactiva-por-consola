console.log('Aplicacion interactiva por consola');
import { guardarDB, leerDB } from './helper/guardarArchivo.js';
//const colors = require('colors');
//const { menuOpciones } = require('./helper/inquirer');
import { menuOpciones, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } from './helper/inquirer.js';
import { Tareas } from './models/tareas.js';

const menu = async()=>{
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }
    
    do {
        opt = await menuOpciones();
        //console.log(opt);

        switch (opt){
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
            break;

            case '2':
                console.log(tareas._listado);
            break;
    
            case '3':
                tareas.listadoCompleto();
            break;

            case '4':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                console.log(ids);
            break;

            case '5':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id !== '0'){
                    const ok = await confirmar('Esta seguro?');
                    if(ok)tareas.borrarTarea(id);
                    console.log('Tarea borrada');
                }
            break;

            case '4':
                console.log('salir');
            break;
        }

        guardarDB(tareas.listadoArr);
        
        await pausa();
    } while (opt !== '0');
}

menu();