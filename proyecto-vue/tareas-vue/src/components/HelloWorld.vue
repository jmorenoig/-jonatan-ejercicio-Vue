<template>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Welcome!</title>
  </head>
  <body>
    <div class="container mt-5" id="app">
        
        <h3>{{ titulo }}</h3>

        <input type="text" class="form-control my-3" v-model="nuevaTarea" v-on:keyup.enter="agregarTarea">
        <button class="btn btn-primary" @click="agregarTarea">Agregar</button>

        <div class="mt-3" v-for.="(item, index) of tareas">
            <div role="alert" :class="['alert', item.estado ? 'alert-success' : 'alert-danger']">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        {{index}} - {{item.nombre}} - {{item.estado}}
                    </div>
                    <div>
                        <button class="btn btn-success btn-sm" @click="editarTarea(index)">OK</button>
                        <button class="btn btn-danger btn-sm" @click="eliminar(index)">X</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </body>
</html>
</template>

<script>
export default {
    el: '#app',
    data: function() {
      return{
        titulo: 'Tareas con Vue',
        tareas: [],
        nuevaTarea: '',
        estadoActual: false,
        eliminado: false
        };
    },
    methods: {
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado:false
            });
            this.nuevaTarea = '';
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },
        editarTarea: function(index){
            this.tareas[index].estado=true;
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
            this.estadoActual = true;
        },
        eliminar: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
            this.eliminado = true;
        }
    },
    created: function(){
        let datosDB =JSON.parse(localStorage.getItem('tareas-vue'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
}
</script>
<!--<script src="App.js"></script>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>-->
