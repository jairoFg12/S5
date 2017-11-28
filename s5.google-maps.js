(function(Sinco){
    
    var SincoGoogleMaps = function(key){
        if (!(this instanceof Sinco.utilities.googleMaps))
        throw new SincoInitializationError('¡Google maps requiere ser inicializado mediante new Sinco.utilities.googleMaps()!');

        return{
            init: this.init,
            demo: function(){
                console.log('Demo...')
            }
        }
    }  

    SincoGoogleMaps.prototype.init = function(){
        console.log('Iniciando funcion de maps');
    }   
    
    Sinco.utilities = Sinco.utilities || {};
    Sinco.utilities.googleMaps = SincoGoogleMaps;
})(Sinco);