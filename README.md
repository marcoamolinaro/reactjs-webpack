# reactjs-webpack

Aula 1
- Criando o package.json
    criar arquivo vazio package.json. Este arquivo pode ser criado com qquer editor de texto com a seguinte linha
    {}
    ou pode ser criado com o comando npm init, onde deverá seguir o wizard para criação do aquivo.

- Instalar o webpack como dependência de desenvolvimento
npm install save --webpack

- Configuração básica do webpack
    . Criar o arquivo vazio chamado webpack.config.js;
    . Configurar para ler um arquivo e gerar um bundle;
    . Criar o arquivo src/index.js
    . Gerar o bundle com webpack
        instalar o webpack global com npm
            sudo npm i -g webpack
            sudo npm i -g webpack-cli
            npm install --save-dev webpac
    . Criar o arquivo index.html e adicional o bundle

Aula 2
- usando o server do webpack
    - Instalar a depedência para o server - webpack-dev-server
        npm i --save-dev webpack-dev-server
    - Adicionar o publicPach no webpack.config
    - Passar o caminho correto do index.html
    - Subir o server de desenvolvimento
        instalar o webpack-server
            sudo npm install -g webpack-dev-server
            npm i --save-dev webpack-dev-server

Aula 3
- Modularizando uma aplicação
    . Criar um novo arquivo em src/app.js
    . Entender o require e module.exports do commonJS
    . Exportar método sum que irá somar dois valores
    . Importar o método em src/index.js


