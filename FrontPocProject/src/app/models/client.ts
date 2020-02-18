export interface Client {
    identityNumber: number;
    age: number;
    clientName: string;
    clientSurname: string;
}

export const clientColumns: string[] = [
    'identityNumber',
    'age',
    'clientName',
    'clientSurname',
    'action'
];

export const CLIENTS_DATA: Client[] = [
    {
        identityNumber: 1234565,
        age: 12,
        clientName: "David",
        clientSurname: "Tamayo Tirado"
    },
    {
        identityNumber: 12333333,
        age: 12,
        clientName: "Alejandro",
        clientSurname: "Tamayo Tirado"
    }
];