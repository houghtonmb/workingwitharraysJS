const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];

const people = [
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem',
    'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walrer', 'Benn, Tony',
    'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentson, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berl, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh',
    'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
];

const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1600);
console.table(fifteen);

const fullNames = inventors.map(inventor => `${inventor.first} + {inventor.last}`);
console.log((fullNames));

// const ordered = inventors.sort(function (firstPerson, secondPerson) {
//     if (firstPerson.year > secondPerson.year){
//         return 1;
//     } else {
//         return -1;
//     }
// });

const ordered = inventors.sort((firsPerson, secondPerson) => firsPerson.year > secondPerson.year ? 1 : -1);
console.table(ordered);

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0);

console.log(totalYears);

const oldest = inventors.sort(function (firstPerson, secondPerson) {
    const lastPerson = firstPerson.passed - firstPerson.year;
    const nextPerson = secondPerson.passed = secondPerson.year;
    return lastPerson > nextPerson ? -1 : 1;
});
console.table(oldest);


// This next one must be done through the console i your web browser at link https://en.wikipedia.org/wiki/Category:boulevards_in_paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//     .map(link => link.textContent)
//     .filter(streetName => streetName.includes('de'));

const alpha = people.sort((lastName, firstName) => {
    const  [aLast, aFirst] = lastName.split(', ');
    const  [bLast, bFirst] = firstName.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);

const  data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'van', 'car', '' +
    'track'
];

const  transportation = data.reduce(function(obj, item) {
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);




