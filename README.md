-----------------------------
INSTALAR BOOTSTRAP LOCALMENTE
-----------------------------

Para instalar BOOTSTRAP de forma local deberemos:
    1- Entrar en la web de bootstrap y descargarnos los archivos para compilar el CSS y el JS
    https://getbootstrap.com/docs/4.6/getting-started/download/ (esta url puede ser diferente en el futuro)

    2- Descomprimimos el archivo y lo guardamos dentro de nuestra carpeta ASSETS del proyecto

    3- Nos posicionamos en nuestro INDEX.HTML, al final del <head> y linkamos el css con el path correcto donde hemos guardado los archivos de CSS que hemos descargado dentro de la carpeta assets <link rel="stylesheet" href="./assets/libs/bootstrap/css/bootstrap.min.css">

    4- Hacemos lo mismo con los scripts, recuerda que debe de ir al final del body los scripts <script src="./assets/libs/bootstrap/js/bootstrap.min.js"></script>
    <script src="./assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>

    5- Nos posicionamos desde la consolo en el path donde tengamos nuestro proyecto, y escribimos las siguientes lineas de comandos "npm install bootstrap --save"

    6- Ahora ya tenemos en nuestro node_module la carpeta de bootstrap con toda la librería

    7- Ahora procedemos a instalar JQUERY "npm install jquery --save"

    8- Y finalmente instalamos también POPPER "npm install popper.js --save"

    9- Modificamos el archivo angular.json:
        "styles": [
            "src/styles.css",
            "/node_modules/bootstrap/dist/css/bootstrap.min.css"
        ],
        "scripts": [
            "/node_modules/jquery/dist/jquery.slim.min.js",
            "/node_modules/popper.js/dist/umd/popper.min.js",
            "/node_modules/bootstrap/dist/js/bootstrap.min.js"
        ]

-----------------------------

# Spa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
