const numberOfFilms = +prompt("How much films have you seen already ?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false,
};

const a = prompt('The last film seen ?', ''),
b = prompt('Rate us?', ''),

c = prompt('The last film seen ?', ''),

d = prompt('Rate us?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

