export interface Publicacao {
    id: string;
    user: User;
    description: string;
    img: PublicacaoImg;
}

export interface User {
    name: string;
    description: string;
    alt: string; 
    src: string;
}

export interface PublicacaoImg {
    alt: string;
    src: string;
}