import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { generateUsername } from '$lib/utils';

// 로그인 상태에서 login 시도시 redirect
export const load: PageServerLoad = async ({ locals }) => {
  if (locals.pb.authStore.isValid) {
    throw redirect(303, '/');
  }
};

export const actions: Actions = {
  default: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData());

    try {
      await locals.pb.collection('users').authWithPassword(data.email, data.password);
      if (!locals.pb?.authStore?.model?.verified) {
        locals.pb.authStore.clear();
        return {
          notVerified: true
        };
      }
    } catch (err) {
      console.log('Error: ', err);
      // throw error(500, 'Something went wrong logging in');
      throw err;
    }

    throw redirect(303, '/');
  }
};
