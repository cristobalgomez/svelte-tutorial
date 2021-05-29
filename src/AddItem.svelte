<script>

    import { cartContents, itemsInCart } from './stores.js';

    export let price;
    export let item;

    function addItem() {
        itemsInCart.update(items => items +1);
        cartContents.update(items => [...items, {item, price}])
    }


</script>  
  <button on:click={addItem}>
    Add Item
  </button>
  