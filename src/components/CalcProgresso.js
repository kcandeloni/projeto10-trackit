function calc (lista) {

    if(lista.length === 0){
        return 0;
    }
    else{
        return (( lista.filter(habito => habito.done === true).length / lista.length )*100).toFixed(0);
    }
}

export {calc};