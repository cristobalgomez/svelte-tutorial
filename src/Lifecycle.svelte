<script>
    import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
    import { onInterval } from './utils.js';

    let pokemon = [];
    let div;
    let autoscroll;

    onMount( async() => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        pokemon = await res.json();
        pokemon = pokemon.results; 
    });

    let numberPokemon = 1;
	onInterval(() => numberPokemon < pokemon.length ? numberPokemon+=1 : numberPokemon = 1, 1000);
    
    beforeUpdate(() => {
        autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
    });

    afterUpdate(() => {
	    if (autoscroll) div.scrollTo(0, div.scrollHeight);
    });
</script>
# pokemon: {numberPokemon}

<div class="container">
    <div class="scrollable" bind:this={div}>
        {#each pokemon.slice(0,numberPokemon) as t,i}
            <span>{i+1}.{t.name}</span>
        {:else}
            loading...
        {/each}
    </div>
</div>


<style>
    .container {
		display: flex;
		flex-direction: column;
		height: 10%;
	}
	.scrollable {
		flex: 1 1 auto;
		border-top: 1px solid #eee;
		margin: 0 0 0.5em 0;
		overflow-y: auto;
	}
    span {
		padding: 0.5em 1em;
		display: block;
	}

</style>


