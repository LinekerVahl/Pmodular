export function potencia (base, expoente){

    var resp = 1
    for (var i = 0; i < expoente; i++){
        resp *= base
        //console.log(resp) teste
    }

    return resp
}