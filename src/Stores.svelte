<script>
    import { itemsInCart, cartContents, totalPrice } from './stores.js';
    import Item from './Item.svelte';


    let inventory = [{ item: 'apples', price: 0.5 },
                    { item: 'berries', price: 1.3 },
                    { item: 'chips', price: 0.5 },
                    { item: 'eggs', price: 1 },
                    { item: 'beers', price: 1.5 },
                    { item: 'salmon', price: 2 }];

</script>

<div>
    {#each inventory as item}
        <Item {...item}/>
    {/each}
</div>

<p>There are { $itemsInCart } items in your cart.</p>
<p>Total price: $ { $totalPrice }</p>
<p>Cart contents:  
      
<ul>
  {#each $cartContents as item}
    <li>{ item.item } - $ {item.price} </li>
  {/each}
</ul>


