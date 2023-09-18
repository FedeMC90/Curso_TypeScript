define(["require", "exports", "./classes/Hero"], function (require, exports, Hero_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ironman = new Hero_1.Hero("Ironman", 1, 55);
    console.log('ironman: ', ironman);
});
