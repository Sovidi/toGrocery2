import { dbConnect } from "../route";
import { dbConnect2 } from "../route";

export async function GET(req) {
    const {client, collection} = await dbConnect("match_member");
    const {client2, collection2} = await dbConnect2("new_match");
    const qData = await Object.fromEntries(req.nextUrl.searchParams);

    const data = await collection.find({sNum: qData.num}).toArray();
    const modifydata = await collection2.updateOne({num: qData.num}, {$set: {mCount: data.length}});
    const getdata = await collection2.find({num: qData.num}).toArray();
    
    await client.close();
    await client2.close();
    return Response.json(getdata)
}
