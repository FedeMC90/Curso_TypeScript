"use strict";
(() => {
    ;
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super velocidad"],
        getName() {
            return this.name;
        },
    };
    superman;
})();
(() => {
    const client = {
        name: "Fernando",
        age: 25,
        address: {
            id: 126,
            zip: "DWE122",
            city: "CABA",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: "Melisa",
        age: 30,
        address: {
            city: "P.Ch",
            id: 123,
            zip: "JSJ33",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
//# sourceMappingURL=main.js.map