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
                    console.log(originalToAESEncrypt("prueba"));
                });
            });
            
            // it('asdsa', function(){
                
            // })
        });        
    });

    
});