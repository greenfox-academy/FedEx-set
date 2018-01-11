'use strict';

let setCounter = 0;

let firstNumber; 
let secondNumber;
let thirdNumber;

let firstShape;
let secondShape;
let thirdShape;

let firstPattern;
let secondPattern;
let thirdPattern;

let firstColor;
let secondColor;
let thirdColor;

function cardChecker(){
    if (numberChecker(firstNumber,secondNumber,thirdNumber)){
        if (attributeChecker(firstShape, secondShape, thirdShape, 'shape')){
            if (attributeChecker(firstPattern, secondPattern, thirdPattern, 'pattern')){
                if (attributeChecker(firstColor, secondColor, thirdColor, 'color')){
                    console.log(setCounter)
                    if (setCounter === 4){
                        console.log('set');
                        setCounter = 0;
                        cardChanger();
                        return true
                    } else {
                        setCounter = 0;
                    }
                } 
            }
        }
    }
};

function numberChecker(x, y, z){
    if (x === y && y === z || Number(x) + Number(y) + Number(z) === 6){
        setCounter ++;
        return true
    }else {
        console.log('Wrong number');
        return true
    }
};

function attributeChecker(x, y, z, attribute){
    if (x === y && y === z || x !== y && y !== z && x !== z){
        setCounter ++;
        return true
    } else {
        console.log('Wrong ' + attribute)
        return true
    }
};
