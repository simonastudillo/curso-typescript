"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '-----'}`.toUpperCase();
        }
        return `${firstName} ${lastName || '-----'}`;
    };
    const name = fullName('Bruce', 'Wayne');
    console.log({ name });
})();
