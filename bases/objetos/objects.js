(function () {
    var flash = {
        name: 'Berry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Súper fuerza', 'Volar'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash);
})();
