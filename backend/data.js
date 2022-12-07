import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'testAdmin',
            email: 'admintest@test.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'testUser',
            email: 'usertest@test.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Product 1',
            slug: 'product-1',
            category: 'category1',
            image:'/images/p-acro-1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Fake',
            rating: 3.5,
            numReviews: 10,
            description: 'lorem ispum filler text do da do da',

        },
        {
            name: 'Product 2',
            slug: 'product-2',
            category: 'category1',
            image:'/images/p-acro-2.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Fake',
            rating: 4.5,
            numReviews: 10,
            description: 'lorem ispum filler text do da do da',

        },
        {
            name: 'Product 3',
            slug: 'product-3',
            category: 'category1',
            image:'/images/p-scoly-1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Fake',
            rating: 2.5,
            numReviews: 10,
            description: 'lorem ispum filler text do da do da',

        },
        {
            name: 'Product 4',
            slug: 'product-4',
            category: 'category1',
            image:'/images/p-scoly-2.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Fake',
            rating: 4.5,
            numReviews: 10,
            description: 'lorem ispum filler text do da do da',

        },
    ],
};

export default data;