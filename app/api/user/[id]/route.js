import User from "@lib/models/User";
import { connectToDB } from "@lib/mongodb/mongoose";

export const GET = async (req, { params }) => {
    try {
		console.log("params: ",params)
        await connectToDB();
        const user = await User.findOne({ clerkId: params.id })
            .populate("followers following")
            .exec();

        if (!user) {
            return new Response("User not found", { status: 404 });
        }

        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to get user", { status: 500 });
    }
};
