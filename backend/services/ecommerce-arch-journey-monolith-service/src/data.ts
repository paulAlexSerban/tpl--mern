export const products = [
    {
        id: 1,
        name: 'Laptop',
        summary: 'This is a laptop',
        description:
            'This is a laptop. It is a portable computer that is small enough to use in your lap. It is a powerful computer that can be easily carried from one place to another. It is a great tool for work and entertainment.',
        category: 'Electronics',
        price: 1000,
        image: {
            url: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_960_720.jpg',
            alt: 'Laptop image.',
        },
    },
    {
        id: 2,
        name: 'Mobile',
        summary: 'This is a mobile',
        description:
            'This is a mobile. It is a wireless handheld device that allows you to make calls, send text messages, and access the internet. It is a great tool for communication and entertainment.',
        category: 'Electronics',
        price: 500,
        image: {
            url: 'https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_960_720.jpg',
            alt: 'Mobile image.',
        },
    },
    {
        id: 3,
        name: 'Tablet',
        summary: 'This is a tablet',
        description:
            'This is a tablet. It is a portable computer that is larger than a mobile phone but smaller than a laptop. It is a great tool for work and entertainment.',
        category: 'Electronics',
        price: 300,
        image: {
            url: 'https://cdn.pixabay.com/photo/2015/02/02/15/28/bar-621033_960_720.jpg',
            alt: 'Tablet image.',
        },
    },
    {
        id: 4,
        name: 'Desktop',
        summary: 'This is a desktop',
        description:
            'This is a desktop. It is a personal computer that is designed to be used on a desk or table. It is a powerful computer that is great for work and entertainment.',
        category: 'Electronics',
        price: 1500,
        image: {
            url: ' https://cdn.pixabay.com/photo/2017/10/15/09/33/desk-2852986_960_720.jpg',
            alt: 'Desktop image.',
        },
    },
];

export const categories = [
    {
        id: 1,
        name: 'Electronics',
        image: {
            url: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/electronics-1868709_960_720.jpg',
            alt: 'Electronics image.',
        },
    },
    {
        id: 2,
        name: 'Clothing',
        image: {
            url: 'https://cdn.pixabay.com/photo/2017/08/06/19/36/scarf-2590270_960_720.jpg',
            alt: 'Clothing image.',
        },
    },
    {
        id: 3,
        name: 'Books',
        image: {
            url: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/book-1867093_960_720.jpg',
            alt: 'Books image.',
        },
    },
    {
        id: 4,
        name: 'Furniture',
        image: {
            url: 'https://cdn.pixabay.com/photo/2016/11/29/02/10/armchair-1867090_960_720.jpg',
            alt: 'Furniture image.',
        },
    },
];

export const cart = [
    {
        id: 1,
        items: [
            {
                id: 1,
                name: 'Laptop',
                price: 1000,
                quantity: 1,
                summary: 'This is a laptop',
            },
            {
                id: 2,
                name: 'Mobile',
                price: 500,
                quantity: 1,
                summary: 'This is a mobile',
            },
        ],
        total: 1500,
    },
];

export const orders = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.smith@test.com',
        address: '123 Main St, New York, NY 10030',
        items: [
            {
                id: 1,
                name: 'Laptop',
                price: 1000,
                quantity: 1,
            },
            {
                id: 2,
                name: 'Mobile',
                price: 500,
                quantity: 1,
            },
        ],
        total: 1500,
        status: 'Delivered',
        date: '2021-06-01',
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@test.com',
        address: '456 Main St, New York, NY 10030',
        items: [
            {
                id: 3,
                name: 'Tablet',
                price: 300,
                quantity: 1,
            },
            {
                id: 4,
                name: 'Desktop',
                price: 1500,
                quantity: 1,
            },
        ],
        total: 1800,
        status: 'Delivered',
        date: '2021-06-02',
    },
];
