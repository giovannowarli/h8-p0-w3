function balikString(text) {
    let textBalik = [];
    for (i = 0; i<text.length; i++){
        textBalik.unshift(text[i]);
    }
 return textBalik.join('');
}

console.log(balikString('hello world!'))
console.log(balikString('hallo gw gio, nama lu siapa?'))