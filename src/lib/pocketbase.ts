import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
// import { POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD } from '$env/static/private';
import Pocketbase from 'pocketbase';

export const pb = new Pocketbase(PUBLIC_POCKETBASE_URL);

export const pbAdmin = async () => {
  // await pb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD);
};
