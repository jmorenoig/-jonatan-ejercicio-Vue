FROM node:12-alpine3.12 AS build

#RUN apk --no-cache add openjdk11 --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community
RUN  apk update \
  && apk upgrade \
  && apk add ca-certificates \
  && update-ca-certificates \
  && apk add --update coreutils && rm -rf /var/cache/apk/* \
  && apk add --update openjdk11 tzdata curl unzip bash \
  && apk add --no-cache nss \
  && rm -rf /var/cache/apk/*

RUN curl -s -L https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.5.0.2216-linux.zip -o sonarscanner.zip \
  && unzip -qq sonarscanner.zip \
  && rm -rf sonarscanner.zip \
  && mkdir -p /root/.sonar/native-sonar-scanner \
  && mv  sonar-scanner-4.5.0.2216-linux /root/.sonar/native-sonar-scanner

# instalar un simple servidor http para servir nuestro contenido estático
#RUN npm install -g http-server
# copiar los archivos y carpetas del proyecto al directorio de trabajo actual (es decir, la carpeta 'app')
COPY . .
# hacer la carpeta 'app' el directorio de trabajo actual
WORKDIR /app
# copiar 'package.json' y 'package-lock.json' (si están disponibles)
COPY package.json ./
#COPY sonar.js ./
#RUN -it --rm sonarsource/sonar-scanner-cli:4.5 --version
# instalar dependencias del proyecto
RUN npm install
COPY . .
# construir aplicación para producción minificada
RUN npm run build
#RUN npm run test:unit
RUN npm run test:coverage
#RUN java -version
RUN sed -i 's/use_embedded_jre=true/use_embedded_jre=false/g' /root/.sonar/native-sonar-scanner/sonar-scanner-4.5.0.2216-linux/bin/sonar-scanner
#RUN npm run sonar
#RUN node sonar.js

FROM nginx:1.19.0-alpine AS prod-stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]