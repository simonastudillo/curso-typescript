(function () {
    var myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 123;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Fernando',
        age: 23,
        powers: [1, 2, 3],
    };
    console.log(typeof myCustomVariable);
})();
