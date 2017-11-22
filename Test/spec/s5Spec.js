
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

        });

        describe('String ReplaceAll', function(){
            
        });

        describe('String Format', function(){
            
        });

        describe('String Concat', function(){
            
        });

        describe('String ToAESEncrypt', function(){
            
        });        
    });

    
});