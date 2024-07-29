export type Card = {
    image: string;
    date: string;
    title: string;
    info: string;
    location: string;
    duration: number;
    cost: number;
    id: number;
};

export type CardList = {
    cards: Card[];
};

export type PageLinks = {
    parentClass: string;
    itemClass: string;
};

export type Link = {
    id: number;
    text: string;
    href: string;
};

export type PageLink = {
    link: Link;
    itemClass: string;
};

export type SocialLink = {
    itemClass: string;
    href: string;
    icon: string;
    target: string;
    rel: string;
};

export type Title = {
    title: string;
    subTitle: string;
};

type Service = {
    icon: string;
    title: string;
    text: string;
};
