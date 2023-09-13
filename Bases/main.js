"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (texto) => {
        return texto.length > 3 ? true : false;
    };
    const validateDate = (myDate) => {
        return isNaN(myDate.valueOf()) ? false : true;
    };
})(Validations || (Validations = {}));
//# sourceMappingURL=main.js.map