export function substring(str, inicio, fim) {
    var resultado = ""
    for (var i = inicio; i < fim; i++) {
      resultado += str[i]  
    }
    return resultado
  }