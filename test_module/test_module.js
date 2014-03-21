/*
*  Licensed Materials - Property of IBM
*  Copyright IBM Corp.   2013. All Rights Reserved.
*  US Government Users Restricted Rights - Use, duplication or
*  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

module.exports.hello = hello;
hello.description = "Receives one parameter - name and greets the caller by it.";
function hello(mbaas, name) {
    setTimeout(function() {
        mbaas.success("Hello " + name);
    }, 500);
};

module.exports.one = function one(mbaas) {
    setTimeout(function() {
        mbaas.success(mbaas.config().paramOne);
    }, 100);
    
};

module.exports.two = function two(mbaas) {
    setTimeout(function() {
        mbaas.success(mbaas.config().paramTwo);
    }, 100);
    
};

