export const genres = [
  { _id: "6019a24f655e553f06522be1", name: "Action" },
  { _id: "6035de0bf23b51b693b419e0", name: "Sci Fi" },
  { _id: "6035de13f23b51b693b419e1", name: "Horror" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
