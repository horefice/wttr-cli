#!/usr/bin/env node

'use strict';

const program = require('commander'),
    exec = require('child_process').exec,
    pkg = require('./package.json');


let wttr = (location)  => {
    let cmd = 'curl wttr.in/';

    if (location) cmd += location;
    
    let output = (error, stdout, stderr) => {
        if (stdout) console.log(stdout);
    };
    
    exec(cmd,output);
    
};

program
    .version(pkg.version)
    .usage('[location]')
    .description('Wttr.in right from the Command Line.')
    .action(wttr)
    .parse(process.argv);

if (program.args.length === 0) wttr();