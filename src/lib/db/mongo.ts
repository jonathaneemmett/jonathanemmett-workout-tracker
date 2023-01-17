import mongoose from 'mongoose';
import { MONGO_URI } from '$env/static/private';

export const start_mongo = async () => {
	try {
		const conn = await mongoose.connect(MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (err: any) {
		console.error(`MongoDB connection error: ${err.message}`);
	}
};
