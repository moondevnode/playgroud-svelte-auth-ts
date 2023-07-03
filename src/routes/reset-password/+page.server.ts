import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// 로그인 상태에서 login 시도시 redirect
export const load: PageServerLoad = async ({ locals }) => {
  if (locals.pb.authStore.isValid) {
    throw redirect(303, '/');
  }
};

export const actions: Actions = {
  resetPassword: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData());

    try {
      await locals.pb.collection('users').requestPasswordReset(data.email);
      return {
        success: true
      };
    } catch (err) {
      console.log('Error: ', err);
      // throw error(500, 'Something went wrong');
      throw err;
    }
  }
};
