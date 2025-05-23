"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false; // false;
    isSuperman = (isBatman);
    console.log({ isSuperman });
    console.log({ isBatman });
})();
