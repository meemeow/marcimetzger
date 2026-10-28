import type { StaticImageData } from "next/image";

export type ImageAsset = {
  src: StaticImageData;
  alt: string;
};

export type ExpandLabels = {
  more: string;
  less: string;
};

export type Feature = {
  title: string;
  description: string[];
  image: ImageAsset;
  imagePosition?: "center" | "right";
};
export type Stat = {
  value: string;
  label: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type SelectOption = {
  label: string;
  value: string;
};

export type Affiliation = {
  name: string;
  description: string;
  logo: ImageAsset;
};
