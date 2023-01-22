import User from '$lib/models/User';
import type { Handle } from '@sveltejs/kit';
import { start_mongo } from '$lib/db/mongo';

start_mongo();

export const handle = (async ({ event, resolve }) => {
	const session = event.cookies.get('session');

	if (!session) {
		return await resolve(event);
	}

	const user = await User.findOne({ token: session }).select('-password');

	if (user) {
		console.log('user', user);
		event.locals.user = {
			email: user.email,
			name: user.name,
			avatar: user.avatar,
			role: user.role
		};
	}

	return await resolve(event);
}) satisfies Handle;
