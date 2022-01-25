# Introducción
## Esta aplicación web esta creada con el framework Vue.
## Dicha aplicación tiene como funcionamiento añadir tareas, marcar la tarea como cumplida y eliminar tarea.
[![aplicacion-vue.png](https://i.postimg.cc/pXhjf89G/aplicacion-vue.png)](https://postimg.cc/xcQqYX3M)

# Creación del aplicativo
A continuación se mostrara los comandos y configuraciones tanto en el proyecto (Visual Code), como en Azure DevOps.
1.	Abrimos una terminar en cualquier parte y colocamos el siguiente comando, el cual nos sirve para instalar Vue a nivel global: 
> npm instalar -g @vue/cli
2.	Dentro de Visual Code abrimos una terminal y colocamos el siguiente comando, el cual nos servira para crear un proyecto Vue:
> vue create tareas-vue
                    
Despues de ejecutar el comando se despliega un menu, le damos Manually, marcamos Unit Testing, seleccionamos 3.0x, despues solo le damos enter hasta que comience a crear el proyecto.
                    
3.	Ingresamos a la carpeta del proyecto con el comando:
> cd tareas-vue
                    
4.	En la terminal de Visual Code instalamos lo siguientes comandos:
                    
> npm install -D sonarqube-scanner jest-sonar-reporter supertes
                    
> npm i -D jest-sonar-reporter
                    
> npm i -D jest-junit-reporter
                    
> npm install -save express jest
                    
Lo anterios nos ayudara en la creación de los reportes de las pruebas unitarias que hayamos creado.
                    
5.  Despues de ya haber creado el proyecto con sus funciones y demas , modificaremos el archivo package.json de la siguientemanera.

[![scripts-en-json.png](https://i.postimg.cc/y8sdrSQy/scripts-en-json.png)](https://postimg.cc/nCSpXMtX)
.
[![dev-Dependencies.png](https://i.postimg.cc/KzR4DSqX/dev-Dependencies.png)](https://postimg.cc/N9vgQVvb)
.
[![jest-jest-Sonar-generar-archivo.png](https://i.postimg.cc/R0PNtVTQ/jest-jest-Sonar-generar-archivo.png)](https://postimg.cc/8F6pQG9j)

6.  Ya que terminado de configurar todo, es la hora de configurar nuestro Pipeline.
A continuación se mostrara el orden de las tareas añadidas en el Pipeline

### En esta tarea se modifica el Command en install
[![npm-install.png](https://i.postimg.cc/2jgLTyN0/npm-install.png)](https://postimg.cc/4nb3xJdc)
.
###-----------------------------------------------------------------------------------------------------------
[![prepare-analysis.png](https://i.postimg.cc/ht1JS0zY/prepare-analysis.png)](https://postimg.cc/sM1fm7JP)
.
### estas son las propiedades que se le asignaron
[![prepare-analysis.png](https://i.postimg.cc/1RVfgSVw/prepare-analysis.png)](https://postimg.cc/Rq9M8jRZ)

Cabe aclaran que no fue satisfactorio reportar ambas cosas, por lo cual una de las dos partes tiene que comentarse (aun asi el númerode pruebas esta publicado en el Pipeline).
### lo que esta encerrado con verde nos sirve para reportar a Sonar el número de pruebas y lo que esta de rojo reporta la covertura.
.
### En esta tarea se modifica el Command en custom y en Command and arguments colocamos el siguiente comando.
> npm run build

[![npm-run-build.png](https://i.postimg.cc/3rkDgpVy/npm-run-build.png)](https://postimg.cc/6TN3K79w)
.
### En esta tarea en el apartado Source Folder; le mandamos la ruta de la carpeta dist.
[![copy-files.png](https://i.postimg.cc/wMRH79Wv/copy-files.png)](https://postimg.cc/Fkvw6XX5)
.
### Añadimos otra tarea la cual nos sirve para generar un archivo .zip de nuestro proyecto.
[![archive-files.png](https://i.postimg.cc/kDrCSLZy/archive-files.png)](https://postimg.cc/bSR4cVqG)
.
### En esta tarea se modifica el Command en custom. Le asignamos el comando:
> npm run test:unit

[![npm-run-test.png](https://i.postimg.cc/hG4Xh7Vt/npm-run-test.png)](https://postimg.cc/Sn5SvRZB)
.
### En esta tarea se modifica el Command en custom. Le asignamos el comando:
> npm run test:coverage

[![npm-run-coverage.png](https://i.postimg.cc/wTJyrz6g/npm-run-coverage.png)](https://postimg.cc/CzhxZWBQ)
.
### Añadimos esta tarea para correr el analisis del codigo.
[![run-code-analysis.png](https://i.postimg.cc/SNWRrGrK/run-code-analysis.png)](https://postimg.cc/ppLPVz3N)
.
### Añadimos esta tarea para publicar en Sonar.
[![publish-sonar.png](https://i.postimg.cc/GtD26Pnq/publish-sonar.png)](https://postimg.cc/p52RFFTF)
.
### Añadimos esta tarea para publicar los resultados de las pruebas unitarias. En el apartado -Test results files- Añadimos lo siguiente:
> **/test-report.xml

[![publish-test.png](https://i.postimg.cc/xTrqMZL7/publish-test.png)](https://postimg.cc/8sH1VtKB)
.
### En esta ultima tarea, nois ayudara a publicar nuestro artefacto.
[![publish-artifacts.png](https://i.postimg.cc/FR8zPW8Y/publish-artifacts.png)](https://postimg.cc/9RPc0pW2)