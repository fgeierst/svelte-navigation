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
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-block-end: 1px solid #ccc;
    gap: 1rem;
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
    top: 3rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 1;
  }

  header :global(a) {
    text-decoration: none;
  }
</style>
