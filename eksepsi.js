var readline = require('readline-sync');
// mendefinisikan kelas eksepsi
class DivisionByZeroError extends Error {
constructor(msg) {
super(msg); 

// memanggil konstruktor kelas error
this.name = this.constructor.name
this.message = msg;
}
getMessage() {
return this.message;
}
}
var a = parseFloat(readline.question(' Masukan nilai a: '));
var b = parseFloat(readline.question(' Masukan nilai b: '));
try {
if (b == 0) {
throw new DivisionByZeroError('KESALAHAN: Terjadi pembagian dengan nol');
}

var c = a / b;
console.log(` ${a} / ${b} = ${c} `);
} catch (e) {
console.log(e.getMessage());
}

