import mongoose from "mongoose";
import config from "config";

async function connect() {
	const dbUri = config.get<string>("dbUri");

	try {
		await mongoose.connect(dbUri);
        console.error("connected to DB");
	} catch (error) {
		console.error("not connected to DB");
		process.exit(1);
	}
}

export default connect;
