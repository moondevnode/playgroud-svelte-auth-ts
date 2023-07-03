import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { generateUsername } from '$lib/utils';

// 로그인 상태에서 register 시도시 redirect
export const load: PageServerLoad = async ({ locals }) => {
  if (locals.pb.authStore.isValid) {
    throw redirect(303, '/');
  }
};

export const actions: Actions = {
  default: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData());
    let username = generateUsername(data.name.split(' ').join('')).toLowerCase();

    try {
      // ? create user
      await locals.pb.collection('users').create({ username, ...data });
      await locals.pb.collection('users').requestVerification(data.email); // TODO: verify page redirect
      console.log(`send email to ${data.email}`);
    } catch (err) {
      console.log('Error: ', err);
      // throw error(500, 'Something went wrong');
    }

    throw redirect(303, '/login');
  }
};
