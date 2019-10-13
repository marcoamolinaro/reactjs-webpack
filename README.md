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

Aula 4
- Criando uma aplicação em React
    . Instalar as dependências React e ReactDOM
        npm install --save react react-dom
        npm install create-react-class --save
    . Criar um componente em src/app.js

Aula 5
- Modularizando a aplicação
    - Instalação das dependências
        . Instalar o Babel - babeljs.io
            npm i --save-dev babel-core bable-loader babel-preset-es2015 babel-preset-stage-0
        . Configuração do Babel
            . Criar arquivo .babelrc
                - é um arquivo json com uma entrada "presets": ["es2015", "stage-0"]
        . Atualizar o webpack.config
            Para a versão que estou usando o trecho do config fica assim:
                resolveLoader: {
                    moduleExtensions: ['-loader']
                },
                module: {
                    rules: [{
                        test: /\.js$/,
                        exclude: /node_modules/,
                        include: /src/,
                    }]
                }
        . Atualiação do projeto
            . Atualizar src/app.js usando o export do ES02015
            . Atualizar o src/index.js usando o import
            . Utilizar import com shorthand notation para o método render do ReactDOM

            