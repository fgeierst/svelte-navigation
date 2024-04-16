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

<style>
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
