export const products: Product[] = [];

export class Product {
    title: string;

    constructor(t: string) {
        this.title = t;
    }

    save(): void {
        products.push(this);
    }

    static fetchAll(): Product[] {
        return products;
    }
}
