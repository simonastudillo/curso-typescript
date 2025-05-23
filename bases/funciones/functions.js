"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal activada';
    };
    console.log(activateBatiSignal());
    const heroName = returnName();
})();
