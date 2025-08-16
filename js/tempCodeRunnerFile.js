const numbersOfFilms = +prompt("сколько фильмов вы смотрел", "");

const personalMovieDB = {
  count: numbersOfFilms,
  movie: {},
  actors: {},
  genres: {},
  privat: false,
};

const a = prompt("Один из последних просмотренних фильмов", ""),
  b = prompt("на сколько вы его оцените??"),
  c = prompt("Один из последних просмотренних фильмов", ""),
  d = prompt("на сколько вы его оцените??");

personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);
