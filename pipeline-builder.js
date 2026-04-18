function pipe(...functions){
    return newFunction = arg => {
        let output = arg;
        functions.forEach(f => {
           output = f(output);
        });
        return output;
    }
}

function trim(sentence) {
    return sentence.trim();
}
function lowercase(sentence) {
    return sentence.toLowerCase();
}
function hyphen(sentence) {
    return sentence.replace(/\s+/g, '-'); // \s+ capture un ou plusieurs espaces
}
function sanitize(sentence) {
    return sentence.replace(/[^a-z0-9-]/g, '');
}


const textProcessor = pipe(trim, lowercase, hyphen, sanitize);
console.log(textProcessor("  Hello World! @2026  "));
