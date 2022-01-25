import { shallowMount } from '@vue/test-utils'
import App from '@/components/HelloWorld.vue'

describe('App.js', () => {
  

  it('el estado debe ser falso', () => {
   
    /// Crea una instancia del componente
    const wrapper = shallowMount(App);
  
    /// Evalúa que el valor por defecto sea "false"
    expect(wrapper.vm.nuevaTareas).toBe(undefined);

    /// Ejecuta el metodo que cambia el valor de la variable a "true"
    wrapper.vm.agregarTarea();
  
    /// Evalúa que el nuevo valor usuarioActivo sea "true"
    expect(wrapper.vm.estado).toBe(undefined);
   }),

   it('debe cambiar el valor a true',() => {

    const wrapper = shallowMount(App);

    expect(wrapper.vm.estadoActual).toBe(false);

    wrapper.vm.editarTarea(0);

    expect(wrapper.vm.estadoActual).toBe(true);
   }),

   it('debe cambiar el valor a true',() => {

    const wrapper = shallowMount(App);

    expect(wrapper.vm.eliminado).toBe(false);

    wrapper.vm.eliminar(0);

    expect(wrapper.vm.eliminado).toBe(true);
   })

})
