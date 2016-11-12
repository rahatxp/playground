'use strict';

function Test(){

}

Test.prototype.init = function() {
    console.log('from test function');
};

module.exports = function(){
    var test = new Test();
    test.init();
};
