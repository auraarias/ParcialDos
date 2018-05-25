const express = require ("express"),
        consolidate = require ("consolidate"),
        handlebars = require ("handlebars"),
        

    var app = express(),
    db;

    app.engine("hbs", consolidate.handlebars);

    app.set('views', './views');
    app.set('view engine', 'hbs');

    app.use(express.static('public'));

    function actualizarVisitas (){
        document.querySelector('.visita').innerHTML = arreglo.length;
    }
    
    var arreglo = JSON.parse(localStorage.getItem('arreglo'));
    if(arreglo == null) arreglo = [];
    localStorage.clear('arreglo');
    
    actualizarVisitas();

    document.querySelectorAll('.agregar').forEach(function(button) {
        button.addEventListener('click', function(){
            var id = button.parentElement.getAttribute('data-id');
    
            if(arreglo.indexOf(id) > 0){
                return;
            }
    
            arreglo.push(id);
            actualizarVisitas();
    
            localStorage.setItem('arreglo', JSON.stringify(arreglo));
        });
    });

   