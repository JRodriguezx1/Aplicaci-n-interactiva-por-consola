import { Tarea } from "./tarea.js";
import 'colors';
 
 class Tareas {

    _listado = {};

    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray( tareas = []){
        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea;
        });
    }

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach( key => { 
            const tarea = this._listado[key];
            listado.push( tarea );
         });
        return listado;
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
        
    }


    listadoCompleto(){

        this.listadoArr.forEach((tarea, i)=>{
            const idx = `${i + 1}`.green;
            const estado = (tarea.completadoEn)?'Compleatada'.green:'Pendiente'.red;
            console.log(idx+' '+tarea.desc+'::'+estado);
        });
    }

    borrarTarea(id=''){

        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    toggleCompletadas(ids = []){

        ids.forEach(id=>{
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString;
            }
        });

        
    }

 }



 export { Tareas }