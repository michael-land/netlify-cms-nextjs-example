export const attributes: {
  heroImage: string;
  sections: { title: string; description: string }[];
  contacts: { type: string; values: { value: string }[] }[];
  lots: Array<{
    title: string;
    subtitle: string;
    images: Array<{
      image: string;
    }>;
  }>;
  offTheLots: string[];
};
