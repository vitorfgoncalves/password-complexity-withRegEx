function validaComplexidade(valor){
    // Campo não deve estar vazio -- OK
    if (valor){
        // Deve ter entre 8 e 32 caracteres -- OK
        if(valor.length >= 8 && valor.length <= 32){
            // regra letra min.
            var regex1 = /[(a-z)]+/g
            // No mínimo uma letra minúscula
            if(valor.match(regex1)){
                // regra letra mai.  --- OK
                var regex2 = /[(A-Z)]+/g
                // No mínimo uma letra maiúscula
                if(valor.match(regex2)){
                    
                    
                    // regra número
                    var regex3 = /[(0-9)]+/g
                    if (valor.match(regex3)){
                        
                        
                        // regra sem espaço e caractere
                        var regex4 = /[(\W)]+/g
                        if(valor.match(regex4) == null){
                            return 1;    
                        }
                        else{
                            console.log('Por favor, não ultilize nenhum espaço ou caractere especial')        
                        }
                    }
                    else{
                        console.log('Por favor insira no mínimo um número')    
                    }
                }
                else{
                    console.log('Por favor insira no mínimo uma letra maiúscula')    
                }
            }
            else{
                console.log('Por favor insira no mínimo uma letra minúscula')
            }
        }

        else{
            console.log(`Por favor insira no mínimo 8 e no máximo 32 caracteres`)
        }
    }

    else{
        console.log(`Por favor insira algo, campo vazio`)
    }
    return 0;
}

console.log(validaComplexidade('a1234567'))
