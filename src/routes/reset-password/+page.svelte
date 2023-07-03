<script>
  export let form;
</script>

<article>
  <h1>암호 초기화</h1>
  <article>We'll send you an email with a link to reset your password</article>
  <form method="POST" action="?/resetPassword">
    <input type="email" name="email" placeholder="이메일" required />
    <button type="submit">암호 초기화</button>
  </form>
  {#if form?.success}
    <article>An email has been sent to reset your password</article>
  {/if}
</article>
