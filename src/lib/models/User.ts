import mongoose, { Schema, Document } from 'mongoose';

export interface IUser {
	name: string;
	email: string;
	password: string;
	token: string;
	role: string;
	avatar: string;
}

export interface IUserModel extends IUser, Document {}

const userSchema: Schema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	token: { type: String, required: true },
	role: { type: String, required: true, default: 'user' },
	avatar: { type: String, required: false }
});

export default mongoose.model<IUserModel>('User', userSchema);
