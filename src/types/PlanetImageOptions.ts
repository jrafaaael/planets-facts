export enum ImageOptions {
  surface,
  internal
}

export interface Option {
  value: keyof typeof ImageOptions
  color: string;
}

export const OPTIONS: Option[] = [
  { value: "surface", color: "#f77f00" },
  { value: "internal", color: "#00509d" },
];
