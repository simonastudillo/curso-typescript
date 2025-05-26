"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '-----'}`;
    };
    const name = fullName('Bruce', 'Wayne');
    console.log({ name });
})();
//# sourceMappingURL=args-optional.js.map