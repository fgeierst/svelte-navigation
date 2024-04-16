<script>
  let menu = [
    {
      name: "Products",
      link: "/products",
      open: false,
      children: [
        {
          name: "New Arrivals",
          link: "/products/new-arrivals",
        },
        {
          name: "On Sale",
          link: "/products/on-sale",
        },
      ],
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/search",
    },
  ];
</script>

<div class="nav">
  <ul class="items">
    {#each menu as item}
      <li>
        {#if item.children}
          <button
            on:click={() => (item.open = !item.open)}
            aria-expanded={item.open}>{item.name}</button
          >
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
</div>

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
    display: block;
    position: fixed;
    list-style: none;
    padding-inline-start: 0;
    top: 3rem;
    left: auto;
    right: auto;
    background: #fff;
    z-index: 1;
    border: 1px solid #ccc;
  }
</style>
