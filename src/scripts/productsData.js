export async function fetchAlbums() {
  try {
    const response = await fetch('https://api.example.com/albums');

    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }

    const albumList = await response.json();
    return albumList;
  } catch (error) {
    console.error('Erro ao buscar álbuns:', error);
    return [];
  }
}

export async function renderAlbums() {
  const albumList = await fetchAlbums();

  albumList.forEach(album => {
    console.log(`${album.title} - ${album.band} (${album.year}) - $${album.price}`);

  });
}

export const genresList = [
  "Todos",
  "Pop",
  "MPB",
  "Samba",
  "Rap",
  "Hip-Hop",
  "Jazz",
  "Rock",
  "Reggae",
];

renderAlbums();