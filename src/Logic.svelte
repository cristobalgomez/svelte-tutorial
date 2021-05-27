<script>
    async function getPokemon() {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await res.json();

        if(res.ok) return data;
        else throw new Error(data);

    }

    let promise = getPokemon();

</script>

{#await promise }
    <p>loading...</p>
{:then pokemon }
    {#each pokemon.results as poke, i }
        {#if (i+1)%2 === 0}
            <p class="par"> { i + 1 }. <a href={ poke.url }>{ poke.name }</a></p>
        {:else}
            <p class="impar"> { i + 1 }. <a href={ poke.url }>{ poke.name }</a></p>
        {/if}
    {/each}
{:catch error }
    <p style="color: red">{ error.message } </p>
{/await}

<style>
    .par { 
        color: white;
        background-color: orange; 
        padding: 0.2em 0.5em;  
    }
    .impar {
        color: white;
        background-color: green;
        padding: 0.2em 0.5em;
    }
    a {
        text-decoration: none;
        color: white;
    }
</style>