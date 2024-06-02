
import WorkShema from "../../models/work";
import { connectToMongo } from "../../utils/db";

const MONGODB_URI = process.env.MONGODB_URI;


export async function GET() {
    await connectToMongo(MONGODB_URI);
    try {
        const works = await WorkShema.find();
        return Response.json({ works })
    } catch (error) {
        return Response.json({ message: 'Internal Server Error' });
    }

}
