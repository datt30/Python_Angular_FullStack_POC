export interface ExternalProvider {
    externalProviderName: string;
    phone: number;
    detail: string;
}

export const externalProviderColumns: string[] = [
    'externalProviderName',
    'phone',
    'detail',
    'action'
];