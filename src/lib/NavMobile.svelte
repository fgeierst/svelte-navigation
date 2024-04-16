<script>
  import RadixIconsCross1 from "./icons/RadixIconsCross1.svelte";
  import RadixIconsHamburgerMenu from "./icons/RadixIconsHamburgerMenu.svelte";
  import { menu } from "./menu.js";

  let open = false;
</script>

<nav class="" aria-labelledby="main-menu-label">
  <button on:click={() => (open = !open)} aria-expanded={open}>
    <span class="sr-only" id="main-menu-label">Main Menu</span>
    {#if open}
      <RadixIconsCross1 aria-hidden="true" />
    {:else}
      <RadixIconsHamburgerMenu aria-hidden="true" />
    {/if}
  </button>
  <div class="panel">
    <ul class="items">
      {#each $menu as item}
        <li>
          <a class="link" href={item.link}>{item.name}</a>
          {#if item.children}
            <ul class="children">
              {#each item.children as child}
                <li>
                  <a href={child.link}>{child.name}</a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .panel {
    display: none;
  }

  [aria-expanded="true"] + .panel {
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

  .items {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .children {
    list-style: none;
    padding-inline-start: 1rem;
  }
</style>
