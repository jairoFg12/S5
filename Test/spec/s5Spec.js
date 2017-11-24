'use strict';

describe('s5 js', function(){
    describe('Opciones Object', function(){
        describe('Object Keys', function(){
          it('Should be return the keys of an object', function(){
            var evaluation = Object.keys({ a: 0, b: 1 });
            var expectedValue = ["a","b"];
            expect(evaluation).toEqual(expectedValue);
          })
        })
    })

    describe('Opciones Array', function(){
        describe('Array IsArray', function(){
            it('Should be return true when used an Array', function(){
                var array = ['a', 'b', 'c'];
                var validation = Array.isArray(array);  
                expect(validation).toBe(true);
            });
            
            it('Should be return false when the element is not an array', function(){
                var array = "IsNotArray";
                var validation = Array.isArray(array);  
                expect(validation).toBe(false);
            });
        });
      
        describe('Array ForEach', function(){
            it('Should be iterate a array', function(){
                var expectValue = 15;
                var sum = 0;
                [1, 12, 2].forEach(function (objeto, indice, original) {
                    sum = sum + objeto;
                });

                expect(sum).toBe(expectValue);
            });
        });

        describe('Array Clean', function(){            
            it('Should be not return the element indicate in the function', function(){
                var evaluate = ['a','b','c'].clean('b');
                var expectValue = ['a','c'];
                expect(evaluate).toEqual(expectValue);
            })
        });
    });

    describe('Opciones String', function(){
        describe('String StartsWith', function(){
            it('Should be true when the word begins with a letter', function(){
                var validation = 'SincoSoft'.startsWith('S');
                expect(validation).toBe(true);
            });
        });

        describe('String ReplaceAll', function(){
            it('Should be return a string with all replace', function(){
                var validation = 'SincoSoft'.replaceAll('S', '_');
                var expectedValue = '_inco_oft';
                expect(validation).toEqual(expectedValue);
            })
        });

        describe('String Format', function(){
            it('Should be return a word when replace the vars with word.format', function(){
                var validation = '{0}inc{1}{0}{1}ft'.format('S', 'o');
                var expectedValue = 'SincoSoft';
                expect(validation).toEqual(expectedValue);
            });

            it('Should be return a word when replace the vars, using String.format', function(){
                var validation = String.format('{0}inc{1}{0}{1}ft', 'S', 'o');
                var expectedValue = 'SincoSoft';
                expect(validation).toEqual(expectedValue);
            });
        });

        describe('String Concat', function(){
            it('Should be return a string concatenate', function(){
                var validation = String.concat('Sinco', 'Soft');
                var expectedValue = 'SincoSoft';
                expect(validation).toEqual(expectedValue);
            })
        });

        describe('String ToAESEncrypt', function(){          

            describe('Should be error when AES is not reference', function(){
                var originalCryptoJs = CryptoJS;
                var CryptoJSEmulate = undefined;
                var originalToAESEncrypt = function() {
                  return String.prototype.toAESEncrypt();
                }

                it('Should be return an exception when AESEncrypt is not reference', function(){   
                    String.toAESEncrypt = function(){
                        if (typeof CryptoJSEmulate === 'undefined') {
                            throw new SincoInitializationError('¡Falta la referencia de AES.js!');
                        }
                        return originalToAESEncrypt();
                    }                
                    var executeToAESEncrypt = function(){ 
                        String.toAESEncrypt('SincoSoft');
                    }
                    
                    expect(executeToAESEncrypt).toThrowError(SincoInitializationError,"¡Falta la referencia de AES.js!");
                });

                afterEach(function(){
                    CryptoJSEmulate = originalCryptoJs;
                });
            });

            it('Should be return a diferent encrypted text', function(){
                var validation = String.toAESEncrypt('SincoSoft');
                var validation2 = 'Sincosoft'.toAESEncrypt();
                //var expectedValue = 'NvKxV9lZ9+9wutrYmEetxG1xqHo4dyAo7NjZ+iOojkHXosYOfu4QR7Lg+Bp4TU0AMpQwh3ZNtEZwvqoJXOCaTOOBFJzugMBMtrISVfQUd0mOuW+vfc7PBGMlWAoL3+KXukG/vL60NEZb/0xSfo7mkw==4';
                expect(validation).not.toEqual(validation2);
            });
        });        
    });

    describe('Opciones JSON', function(){
        describe('JSON TryParse', function(){
            it('Should be return an object', function(){
                var object = JSON.tryParse('{"Propiedad": "valor"}');
                expect(object).toEqual({"Propiedad": "valor"});        
            });   
            
            it('Should be return an error when the object is not a JSON', function(){
                var object = JSON.tryParse('{Propiedad: valor}');
                expect(object).toEqual({messageError: "Unexpected token P in JSON at position 1"});
            });
        });
    });

    describe('Manejo de errores', function(){
        describe('Sinco Initialization Error ', function(){
            it('Should be return an error', function(){
                var objeto = { propiedad: 1};
                
                var validation = function(){
                    if (objeto.propiedad !== 0) {
                        throw new SincoInitializationError('El valor esperado era 0');
                    }
                }

                expect(validation).toThrowError(SincoInitializationError,"El valor esperado era 0");    
            });
           
        });
    });
    
    describe('Validadores Window', function(){
        describe('Window IsIE', function(){
            it('Should be return true when the explorer is IE', function(){
                window.isIE = true;
                expect(window['isIE']).toBe(true);
            });

            it('Should be return false when is not IE', function(){
                window.isIE = false;
                expect(window['isIE']).toBe(false);
            });
        });

        describe('Window VersionIE', function(){
            /**
             * window.versionIE;
                //Console: 11

                window['versionIE'];
                //Console: 11
            */
        });

        describe('Window IsMobile', function(){
            /**
             * window.isMobile;
                //Console: false

                window['isMobile'];
                //Console: false
             */
        });
    });

    describe('Funcionalidades con objetos', function(){
        describe('Sinco Extend', function(){

        });

        describe('Sinco Map', function(){

        });

        describe('Sinco Filter', function(){

        });

        describe('Sinco Reduce', function(){

        });

        describe('Sinco Utilities Encrypt', function(){

        });

        describe('Sinco Utilities ParseXml', function(){

        });

        describe('Sinco QueryString', function(){

        });

        describe('Sinco FileToBase64', function(){

        });
    });

    describe('Funcionalidades con objetos HTML', function(){
        describe('Sinco Script', function(){

        });

        describe('Sinco Get', function(){

        });

        describe('Sinco CreateElem', function(){

        });

        describe('Sinco Attribute', function(){

        });

        describe('Sinco Insert', function(){

        });

        describe('Sinco Delete', function(){

        });

        describe('Sinco Styles', function(){

        });

        describe('Sinco Utilities AddStyles', function(){

        });

        describe('Sinco AddEvent', function(){
            
        });
    });
});