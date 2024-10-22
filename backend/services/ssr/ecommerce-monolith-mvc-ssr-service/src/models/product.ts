import products from '../data';

interface IProduct {
    save: () => void;
}

export type IProductImage = {
    src: string;
    alt: string;
};

type ProductType = {
    id: string;
    title: string;
    price: number;
    description: string;
    img: IProductImage;
};

// Class implementing the IProduct interface
class Product implements IProduct {
    id: string;
    title: string;
    price: number;
    description: string;
    img: IProductImage;

    // Constructor to initialize a product
    constructor(title: string, price: number, description: string, img: IProductImage) {
        this.id = 'p' + (products.length + 1).toString();
        this.title = title;
        this.price = price;
        this.description = description;
        this.img = img;
    }

    // Method to save the current product to the products array
    save() {
        products.push(this);
    }

    static fetchAll(cb: (products: ProductType[]) => void): void {
        cb(products);
    }
}

export default Product;
