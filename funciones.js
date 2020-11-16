const amigos = []

while(true){
    const nombreamigo = prompt("Nombre de amig@")
    if (nombreamigo !== "fin"){
        amigos.push (nombreamigo)
    }else{
        break;
    }
} 
console.table(amigos);