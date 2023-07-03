import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  if (locals.user) {
    return {
      profile: locals.user
    };
  }
};
