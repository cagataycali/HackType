#!/usr/bin/env node
/*
  ___|                       |                       ___|         | _)
   |       _` |   _` |   _` |  __|   _` |  |   |      |       _` |  |  |
   |      (   |  (   |  (   |  |    (   |  |   |      |      (   |  |  |
  \____| \__,_| \__, | \__,_| \__| \__,_| \__, |     \____| \__,_| _| _|
                |___/                     ____/
*/
var program = require('commander');
program
  .option('-s, --string <string>', 'H*ck*d string')
  .parse(process.argv);

function H4CKTyP3(str) { return str.replace(/[a-z]/g,function f(a){ return "4BCD3F6H1JKLMN0PQR57"[parseInt(a, 36)-10] || a.replace(/[a-t]/gi,f); }); }

if (program.string) {
  console.log(H4CKTyP3(program.string));
} else {
  console.log('Use like this: \n hackertype -s Hacked!');
}
