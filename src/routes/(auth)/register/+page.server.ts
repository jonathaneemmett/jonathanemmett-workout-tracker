import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import argon2 from 'argon2';

/** Models */
import User from '$lib/models/User';

export const load = (async ({ locals }) => {
	// Redirect if user is already logged in
	if (locals?.user) {
		throw redirect(302, '/');
	}
}) satisfies PageServerLoad;

export const actions: Actions = {
	register: async ({ cookies, request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const password = data.get('password') as string;
		const password2 = data.get('password2') as string;

		// Simple Validation
		if (!name || !email || !password || !password2) {
			return fail(400, { error_message: 'Please enter all fields' });
		}

		// Check if passwords match
		if (password !== password2) {
			return fail(400, { error_message: 'Passwords do not match' });
		}

		// Check if user exists
		const user = await User.findOne({ email });
		if (user) {
			return fail(400, { error_message: 'User already exists' });
		}

		// Create new user
		const hashedPassword = await argon2.hash(password);

		const token = await argon2.hash(email + password);

		const newUser = await User.create({
			name,
			email,
			password: hashedPassword,
			token
		});

		// Bake the cookie
		if (newUser) {
			cookies.set('session', token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 7 // 1 week
			});
		}

		throw redirect(302, '/');
	}
};
