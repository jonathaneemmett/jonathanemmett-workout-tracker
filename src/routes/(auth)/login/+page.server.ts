import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import User from '$lib/models/User';
import argon2 from 'argon2';

export const load = (async ({ locals }) => {
	if (locals?.user) {
		throw redirect(302, '/');
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		// Simple Validation
		if (!email || !password) {
			return fail(400, { error_message: 'Please enter all fields' });
		}

		// Check if user exists
		const user = await User.findOne({ email });
		if (!user) {
			return fail(400, { error_message: 'Invalid email or password' });
		}

		// Check if password is correct
		const validPassword = await argon2.verify(user.password, password);
		if (!validPassword) {
			return fail(400, { error_message: 'Invalid email or password' });
		}

		// Update the user token
		const token = await argon2.hash(email + password);
		await user.updateOne({ token });

		// Bake the cookie
		cookies.set('session', token, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 7 // 1 week
		});

		throw redirect(302, '/');
	}
};
