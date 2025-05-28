"use strict";
(() => {
    let flash = {
        name: 'Berry Allen',
        age: 24,
        powers: [1, 2],
    };
    console.log(flash);
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
    };
    console.log(superman);
})();
(() => {
    const client = {
        name: 'Complex Client',
        age: 30,
        address: {
            id: 1,
            zip: '12345',
            city: 'New York'
        },
        getFullAddress(id) {
            var _a, _b;
            return `${(_a = this.address) === null || _a === void 0 ? void 0 : _a.city}, ${(_b = this.address) === null || _b === void 0 ? void 0 : _b.zip}`;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 25,
        address: {
            id: 2,
            zip: '54321',
            city: 'Los Angeles'
        },
        getFullAddress(id) {
            var _a, _b;
            return `${(_a = this.address) === null || _a === void 0 ? void 0 : _a.city}, ${(_b = this.address) === null || _b === void 0 ? void 0 : _b.zip}`;
        }
    };
})();
//# sourceMappingURL=main.js.map