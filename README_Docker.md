#Docker en Ubuntu 20.04 (LTS)

En el siguiente link se encontrara las maneras de instalar Docker en Ubunto con la version 20.04(LTS).
[Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

#Creacion de Dockerfile en Visual Studio Code

Despues de haber instalado Docker, lo siguiente sera crear un archivo **Dockerfile** el cual contendra lo siguien:

**FROM** (requerido) especifica la imagen a utilizar como base. Se puede especificar un nombre de fase para los casos en los que se utilizan construcciones multi-fase.

**RUN** <comando> ejecuta el comando en el momento de la creación de la imagen.

**WORKDIR** <ruta> especifica la carpeta de trabajo dentro del contenedor.

A partir del momento en que se ejecuta esta instrucción, todos los comandos siguientes se ejecutarán de forma relativa a <ruta>. Si <ruta> no existe, se creará automáticamente. Esta es una buena práctica cara a evitar conflictos de ficheros con la imagen base utilizada.

**COPY** <origen> <destino> copia los ficheros de <origen> en <destino>. En este caso la ruta es punto espacio punto (. .) o package.json.

**EXPOSE** <puerto> especifica el puerto (o puertos, se pueden indicar varios valores separados por un espacio) que el contenedor habilitará para conexión

**CMD** <comando> (requerido) ejecuta el comando en el momento de ejecución del contenedor. Parámetros:

<comando> es el comando a ejecutar en el momento de iniciar el contenedor. Es un objeto de tipo array, que contiene un primer elemento que se identificará como el comando a ejecutar, y todos los sucesivos elementos serán los parámetros a pasar a dicho comando. Por ejemplo, si en línea de comando quisiésemos ejecutar **npm start** para arrancar Node, **<comando>** tendría el valor **["npm","start"]**.

#Integración de Sonarqube en Docker

Primero se creara un archivo **sonar.js** el cual contendra la siguiente estructura:

[![estructura-sonar.png](https://i.postimg.cc/VLZZNnZT/estructura-sonar.png)](https://postimg.cc/gnRHSXWq)

Segundo en el archivo **package.json**, agregamos el siguiente script:

[![script-sonar.png](https://i.postimg.cc/JhgG419Z/script-sonar.png)](https://postimg.cc/HJwp6CWk)

Para visualizar como queda la estructura del archivo **Dockerfile**, lo pueden encontrar dentro de la capeta de este proyecto.

[![contenido-del-proyecto.png](https://i.postimg.cc/nhCmDBWQ/contenido-del-proyecto.png)](https://postimg.cc/QFZVL9hX)