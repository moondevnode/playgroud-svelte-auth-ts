<!-- <script>
  import { enhance, applyAction } from '$app/forms';
  import { invalidateAll } from '$app/navigation';
  import { Icon, Pencil } from 'svelte-hero-icons';
  import { Input } from '$lib/components';
  import { getImageURL } from '$lib/utils';
  export let data;
  let loading;
  $: loading = false;
  const showPreview = (event) => {
    const target = event.target;
    const files = target.files;
    if (files.length > 0) {
      const src = URL.createObjectURL(files[0]);
      const preview = document.getElementById('avatar-preview');
      preview.src = src;
    }
  };
  const submitUpdateProfile = () => {
    loading = true;
    return async ({ result }) => {
      switch (result.type) {
        case 'success':
          await invalidateAll();
          break;
        case 'error':
          break;
        default:
          await applyAction(result);
      }
      loading = false;
    };
  };
</script> -->

<div class="flex flex-col w-full h-full">
  <form
    action="?/updateProfile"
    method="POST"
    class="flex flex-col space-y-2 w-full"
    enctype="multipart/form-data"
  >
    <h3>Update Profile</h3>
    <article>
      <heaer>Profile Picture</heaer>
      <div>
        <img src="https://via.placeholder.com/80x80?text=user" alt="user avatar" />
      </div>
      <input type="file" name="avatar" id="avatar" value="" accept="image/*" />
      <!-- <input type="file" name="avatar" id="avatar" value="" accept="image/*" hidden /> -->
    </article>
  </form>
</div>
