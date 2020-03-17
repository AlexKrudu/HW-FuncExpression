"use strict";

function binaryOperation(f) {
    return (f1, f2) => (x, y, z) => f(f1(x, y, z), f2(x, y, z));
}

function unaryOperation(f) {
    return (f1) => (x, y, z) => f(f1(x, y, z))
}

function cnst(a) {
    return (x, y, z) => a;
}

function variable(arg) {
    return function () {
        if (arg === "x")
            return arguments[0];
        if (arg === "y")
            return arguments[1];
        if (arg === "z")
            return arguments[2];
    }
}

let add = binaryOperation((x, y) => x + y);

let subtract = binaryOperation((x, y) => x - y);
let multiply = binaryOperation((x, y) => x * y);
let divide = binaryOperation((x, y) => x / y);
let negate = unaryOperation((x) => -x);
let pi = cnst(Math.PI);
let e = cnst(Math.E);
let sin = unaryOperation((x) => Math.sin(x));
let cos = unaryOperation((x) => Math.cos(x));

