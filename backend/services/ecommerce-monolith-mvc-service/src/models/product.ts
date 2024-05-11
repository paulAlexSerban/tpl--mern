import products from '../data';

interface IProduct {
    save: () => void;
}

type IProductImage = {
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
    constructor(title: string, price: number, description: string, img?: IProductImage) {
        this.id = 'p' + (products.length + 1).toString();
        this.title = title;
        this.price = price;
        this.description = description;
        this.img = img || {
            src: 'https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png',
            alt: 'Default Image',
        };
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
