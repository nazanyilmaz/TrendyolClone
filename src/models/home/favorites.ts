interface FavoriteItem {
  price: number;
  title: string;
  image: string;
  description: string;
}

interface FavoritesTypes {
  favorites: FavoriteItem[];
}

export type {FavoriteItem, FavoritesTypes};
