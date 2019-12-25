export interface User {
    id:string;
    name:string;
    description:string;
    sex:Sex;
}

export enum Sex{
    'Male',
    'Femal',
    'Unclear'
}

