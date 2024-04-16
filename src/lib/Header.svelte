<script>
  import MenuMobile from "./MenuMobile.svelte";
  import Nav from "./Nav.svelte";
  import Search from "./Search.svelte";

  let open = false;
</script>

<header>
  <a href="/">Svelte Navigation</a>
  <div class="desktop-only">
    <Nav />
    <Search />
  </div>
  <div class="mobile-only">
    <button on:click={() => (open = !open)} aria-expanded={open}>Menu</button>
    <div class="mobile-nav">
      <MenuMobile />
      <Search />
    </div>
  </div>
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

  .desktop-only {
    display: none;

    @media (width > 768px) {
      display: contents;
    }
  }

  .mobile-only {
    display: block;
    @media (width > 768px) {
      display: none;
    }
  }

  .mobile-nav {
    display: none;
  }

  [aria-expanded="true"] + .mobile-nav {
    display: block;
    position: fixed;
    top: var(--header-height, 3rem);
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 1;
    padding: 1rem;
  }

  header :global(a) {
    text-decoration: none;
  }
</style>
