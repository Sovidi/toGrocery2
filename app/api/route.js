import { MongoClient } from 'mongodb';

export async function dbConnect(str) {    
    const client = new MongoClient(process.env.S_HOST);
	await client.connect();
    const db = client.db("toGrocery");
    const collection = db.collection(str);
    console.log("MongoDB 접속성공");

    return {client, collection};
};

export async function dbConnect2(str) {    
    const client2 = new MongoClient(process.env.S_HOST);
	await client2.connect();
    const db = client2.db("toGrocery");
    const collection2 = db.collection(str);
    console.log("MongoDB2 접속성공");

    return {client2, collection2};
};