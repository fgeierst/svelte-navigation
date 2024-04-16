<script>
  import RadixIconsChevronDown from "./icons/RadixIconsChevronDown.svelte";
  import { menu } from "./menu.js";
</script>

<nav>
  <ul class="items">
    {#each $menu as item}
      <li>
        {#if item.children}
          <button
            on:click={() => (item.open = !item.open)}
            aria-expanded={item.open}
          >
            {item.name}
            <RadixIconsChevronDown />
          </button>
          <ul class="children">
            {#each item.children as child}
              <li>
                <a href={child.link}>{child.name}</a>
              </li>
            {/each}
          </ul>
        {:else}
          <a class="link" href={item.link}>{item.name}</a>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  .items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
  }

  li {
    display: flex;
  }

  a {
    display: block;
    padding: 0.5rem 0;
  }

  .children {
    display: none;
  }

  [aria-expanded="true"] + .children {
    display: flex;
    position: fixed;
    list-style: none;
    padding-inline-start: 0;
    top: var(--header-height, 3rem);
    left: auto;
    right: auto;
    background: #fff;
    z-index: 1;
    border: solid #ccc;
    border-width: 0 1px 1px;
    padding: 1rem;
    gap: 1rem;
    flex-direction: row;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.1rem;

    &[aria-expanded="true"] svg {
      transform: rotate(180deg);
    }
  }
</style>
