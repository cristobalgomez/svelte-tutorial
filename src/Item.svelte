<script>
    import AddItem from './AddItem.svelte';

    export let item;
    export let price;

    

</script>
<div class="item">
    <h2>{ item }</h2>
    <h4>$: { price }</h4>
    <AddItem price={price} item={item}/>
</div>

<style>
    .item {
        padding: 5px;
        border: 1px solid black;
        margin: 5px;
        display: inline-block;
    }
</style>