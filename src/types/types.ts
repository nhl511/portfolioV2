interface LinkType {
  title: string;
  path: string;
}

interface itemType {
  title: string;
  level: string;
  imageUrl: string;
}

interface projectType {
  title: string;
  des: string;
  techs: string;
  imgUrl: string;
  url?: string;
  source?: string;
}

interface blogType {
  date: string;
  title: string;
  content: string;
  imageUrl: string;
  topic: string;
}
