const data = require('../data/products.json');
const { connect } = require('./mongo');


const COLLECTION_NAME = 'products';

async function collection() {
    const client = await connect();
    return client.db('chopify').collection(COLLECTION_NAME);
}

async function getProducts() {
    const db = await collection();
    const data = db.find().toArray();
    return data;
}

async function getProduct(id) {
    const db = await collection();
    const data = await db.findOne({ id : id });
    return data;
}

async function seed(){
    const db = await collection();
    await db.insertMany(data.products);
    return 'success';
}

module.exports = {
    COLLECTION_NAME,
    collection,
    getProducts,
    getProduct,
    seed
};