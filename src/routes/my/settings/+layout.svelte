<script>
  import { page } from '$app/stores';
  const navigation = [
    {
      title: 'Profile',
      href: '/my/settings/profile'
    },
    {
      title: 'Account',
      href: '/my/settings/account'
    },
    {
      title: 'Security',
      href: '/my/settings/security'
    }
  ];
</script>

<main class="container">
  <div class="grid">
    <aside>
      <nav>
        <ul>
          {#each navigation as navItem}
            <li>
              <a
                href={navItem.href}
                class="font-medium {$page.url.pathname === navItem.href ? 'active' : ''}"
                >{navItem.title}</a
              >
            </li>
          {/each}
        </ul>
      </nav>
    </aside>
    <div role="document">
      <slot />
    </div>
  </div>
</main>
