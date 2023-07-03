import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// 로그인 상태에서 login 시도시 redirect
export const load: PageServerLoad = async ({ locals }) => {
  if (locals.pb.authStore.isValid) {
    throw redirect(303, '/');
  }
};

export const actions: Actions = {
  default: async ({ locals, request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await locals.pb.collection('users').authWithPassword(data.email, data.password);
    } catch (e) {
      console.error(e);
      throw e;
    }

    throw redirect(303, '/');
  }
};
