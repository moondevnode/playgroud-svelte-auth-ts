import { redirect, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals }) => {
  locals.pb.authStore.clear();
  locals.user = null;

  throw redirect(303, '/');
};
