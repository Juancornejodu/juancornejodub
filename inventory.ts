export type Item = {
  title: string;
  address?: string;
  city?: string;
  province?: string;
  format?: string;
  size?: string;
  orientation?: string;
  availability?: string;
  price_ars?: number | string;
  photo?: string;
  lat?: number | string;
  lng?: number | string;
  notes?: string;
};

export const INVENTORY: Item[] = [
  {title: `Circunvalación Oeste`, address: `Au Cv Oeste, Salta`, city: `Salta`, province: `Salta`, format: `Valla`, size: `8 x 3`, orientation: `N`, availability: `Disponible`, price_ars: 300, lat: -65.4748523739138, lng: -24.7892686101177},
  {title: `Rotondo Grand Bourg`, address: `Gra. Savio y Juan Domingo Perón`, city: `Salta`, province: `Salta`, format: `Medianera`, size: `6 x 4`, orientation: `S`, availability: `Ocupado`, price_ars: 350, lat: `65°26'35.7"W`, lng: `24°46'09.0"S`},
  {title: `Entrada Norte salta`, address: `Ruta 9`, city: `Salta`, province: `Salta`, format: `Valla`, size: `5x 5`, orientation: `O`, availability: `Disponible`, price_ars: 325, lat: `65°21'44.8"W`, lng: `24°45'16.8"S `},
];