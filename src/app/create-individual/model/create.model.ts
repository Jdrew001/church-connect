export interface CreateIndividual {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    birthday: string;
    family: Array<Family>;
    baptized: Array<string>;
    holyGhost: Array<string>;
    connectedWith: Array<string>;
    firstTime: Array<string>;
    notes: string;
}

export interface Family {
    firstname: string;
    lastname: string;
    ageRange: string;
    birthday: string;
    relationship: string;
}