app.controller('MainController', ['$scope', function($scope) { 
    $scope.portfolio = 'Portfolio';
    $scope.sobreMi = 'Sobre mí';
    $scope.contacto = 'Contacto';

    $scope.products = [
        {
            url: 'trabajo/nike/index.html',
            image: 'img/main-calendar.jpg',
            type: 'Gráfico',
            title: 'Nike'
        },

        {
            url: 'trabajo/ladySnow/index.html',
            image: 'img/main-cine.jpg',
            type: 'Gráfico',
            title: 'Lady Snow'
        },

        {
            url: 'trabajo/lotus/index.html',
            image: 'img/main-reloj.jpg',
            type: 'Gráfico',
            title: 'Lotus',
        },

        {
            url: 'trabajo/hym/index.html',
            image: 'img/main-modelo.jpg',
            type: 'Gráfico',
            title: 'H&M',
        },

        {
            url: 'trabajo/marca/index.html',
            image: 'img/main-mundial.jpg',
            type: 'Gráfico',
            title: 'Marca',
        },

        {
            url: 'trabajo/harley/index.html',
            image: 'img/main-vtwin.jpg',
            type: 'Gráfico',
            title: 'Harley',
        },

        {
            url: 'trabajo/cocina/index.html',
            image: 'img/main-cocina.jpg',
            type: '3D',
            title: 'Cocina',
        },

        {
            url: 'trabajo/misionAmerica/index.html',
            image: 'img/main-tazon.jpg',
            type: '3D',
            title: 'Misión América',
        },

        {
            url: 'trabajo/PNB/index.html',
            image: 'img/main-PNB.jpg',
            type: 'Animación Web',
            title: 'PNB',
        },

        {
            url: 'trabajo/8inteligencias/index.html',
            image: 'img/main-8inteligencias.jpg',
            type: 'Animación Web',
            title: '8 inteligencias',
        },

        {
            url: 'trabajo/repostal/index.html',
            image: 'img/main-repostal.jpg',
            type: 'Imagen corporativa',
            title: 'Repostal',
        },

        {
            url: 'trabajo/bbva/index.html',
            image: 'img/main-bbva.jpg',
            type: 'Diseño Web',
            title: 'BBVA',
        },

        {
            url: 'trabajo/meraki/index.html',
            image: 'img/main-meraki.jpg',
            type: 'Diseño Editorial',
            title: 'Meraki',
        },

        {
            url: 'trabajo/amanuense/index.html',
            image: 'img/main-amanuense.jpg',
            type: 'Packaging',
            title: 'El Amanuense',
        },

        {
            url: 'trabajo/curso/index.html',
            image: 'img/main-curso.jpg',
            type: 'Gráfico',
            title: 'Curso fotografía',
        },

        {
            url: 'trabajo/aravaca/index.html',
            image: 'img/main-aravaca.jpg',
            type: 'Diseño Web',
            title: 'Colegio Internacional Aravaca',
        },

    ];
}]);
