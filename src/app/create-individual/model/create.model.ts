export interface CreateIndividual {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    birthday: string;
    family: Array<Family>;
    baptized: string;
    holyGhost: string;
    connectedWith: Array<string>;
    firstTime: string;
    notes: string;
}

export interface Family {
    firstname: string;
    lastname: string;
    ageRange: string;
    birthday: string;
    relationship: string;
}