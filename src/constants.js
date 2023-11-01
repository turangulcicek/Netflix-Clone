export const options = {
  params: { language: "tr", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzkwMjdiOTQyMDJjYmQwOTU3ODFkMTliOGM2YmZjZCIsInN1YiI6IjY1NDAwNzZkMTA5Y2QwMDBlYWU0Y2U1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2QsIczjALwV68_d3PPZtjUA-ueX5lrN2lT7KMs_noRw",
  },
};

export const genresOptions = {
  method: "GET",
  url: "https://api.themoviedb.org/3/genre/movie/list",
  params: { language: "tr" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzkwMjdiOTQyMDJjYmQwOTU3ODFkMTliOGM2YmZjZCIsInN1YiI6IjY1NDAwNzZkMTA5Y2QwMDBlYWU0Y2U1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2QsIczjALwV68_d3PPZtjUA-ueX5lrN2lT7KMs_noRw",
  },
};

export const baseImgUrl = "http://image.tmdb.org/t/p/original";
