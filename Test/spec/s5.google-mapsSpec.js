/// <reference path="google-maps.mock.js"/>
/// <reference path="../../s5.js"/>
/// <reference path="../../s5.google-maps.js"/>

describe('S5 google maps', function(){    
    describe('Map', function(){
        it('Instance map', function(){
            var mapa = new Sinco.utilities.googleMaps('keyprueba');
            expect(mapa instanceof Sinco.utilities.googleMaps).toBeTruthy();
        });
    });
});