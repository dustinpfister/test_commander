#!/usr/bin/env node

let prog = require('commander'),
path = require('path'),
pkg = require(path.join(__dirname, 'package.json'));

prog
.command('polpos <a> <d>')
.option('-x, --startx <n>', 'start x')
.option('-y, --starty <n>', 'start y')
.option('-i, --info', 'print more info')
.action(function (a, d, options) {

    let sx = Number(options.startx === undefined ? 0 : options.startx),
    sy = Number(options.starty === undefined ? 0 : options.starty);

    if (options.info) {
        console.log('polar position: ');
        console.log('start pos: ', sx, sy);
        console.log('angel: ', a);
        console.log('distance: ', d);
        console.log('');
    }

    a = a === undefined ? 0 : a;
    d = d === undefined ? 0 : d;

    a = Math.PI / 180 * a;

    let x = sx + Math.cos(a) * d,
    y = sy + Math.sin(a) * d;

    console.log(Math.floor(x), Math.floor(y));

});
prog.parse(process.argv);
