export function ultimos(texto, qtd){
    var resp = ""
    for (var i = texto.length - qtd; i < texto.length; i++){
        resp += texto[i]
    }
    return resp
}

export function terminaCom(texto, final){
    var qtd = final.length
    var ult = ultimos(texto, qtd)
    var resp
    if(ult == final){
        resp = true
    } else {
        resp = false
    }

    console.log("Bom dia magnata")
    console.log("👽".length)
    return resp
}

export function plural(palavra){
    if (terminaCom(palavra, "r")) return palavra + "es"
    //to do: trata o "ão" e casos especiais
    return palavra + "s"
}