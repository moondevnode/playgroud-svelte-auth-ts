import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  return {
    user: locals.user
  };
  // if (locals.user) {
  //   return {
  //     user: locals.user
  //   };
  // }

  // return {
  //   user: undefined
  // };
};
