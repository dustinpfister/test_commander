#!/usr/bin/env node

let prog = require('commander'),
path = require('path'),
pkg = require(path.join(__dirname, 'package.json'));

prog
 .version(pkg.version || '0.0.0','-v, --version')
 .parse(process.argv);