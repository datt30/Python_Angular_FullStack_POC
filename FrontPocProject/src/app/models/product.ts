export interface Product {
    productName: string;
    price: number;
    detail: string;
}

export const productColumns: string[] = [
    'productName',
    'price',
    'detail',
    'action'
];