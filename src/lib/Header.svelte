<script>
  import RadixIconsHome from "./icons/RadixIconsHome.svelte";
  import NavDesktop from "./NavDesktop.svelte";
  import NavMobile from "./NavMobile.svelte";
  import Search from "./Search.svelte";
</script>

<header>
  <a class="logo" href="/">
    <RadixIconsHome aria-hidden="true" />
    Svelte Navigation
  </a>

  <div class="desktop-only"><NavDesktop /></div>

  <div class="push-right">
    <Search />
  </div>

  <div class="mobile-only"><NavMobile /></div>
</header>

<style>
  header {
    --header-height: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    border-block-end: 1px solid #ccc;
    padding-inline: 1rem;
    gap: 1rem;
    height: var(--header-height);
  }

  header :global(a) {
    text-decoration: none;
  }

  .logo {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .desktop-only {
    display: none;

    @media (width > 768px) {
      display: contents;
    }
  }

  .mobile-only {
    display: contents;

    @media (width > 768px) {
      display: none;
    }
  }

  .push-right {
    margin-inline-start: auto;
    @media (width > 768px) {
      margin-inline-start: 0;
    }
  }
</style>
