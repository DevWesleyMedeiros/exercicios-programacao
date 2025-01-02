const getSmallestWord = (str) =>{

    const splitWord = str.toUpperCase().trim().split(" ");
    let smallWord = splitWord[0];

    if (str === null || typeof str !== "string") {
        return null;
        
        // null caso eu coloco um valor diferente de string ou não coloco valor, ele me permite continuar o código, ao invés de mostrar um erro e quebrar o código
    }
    for (let p = 0; p < splitWord.length; p++) {
        if (splitWord[p].length < smallWord.length) {
            smallWord = splitWord[p];
        }
    }
    return smallWord;
}
export { getSmallestWord };
