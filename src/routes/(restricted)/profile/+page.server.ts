import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ locals }) => {
	if (!locals?.user) {
		throw redirect(302, '/login');
	}
}) satisfies PageServerLoad;
