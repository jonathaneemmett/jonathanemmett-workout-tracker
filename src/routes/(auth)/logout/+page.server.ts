import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
	throw redirect(302, '/login');
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ cookies }) => {
		// Eat the cookie
		cookies.set('session', '', {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 0
		});

		throw redirect(302, '/login');
	}
};
