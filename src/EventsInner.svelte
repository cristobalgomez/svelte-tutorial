<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function randomNumber() {
        dispatch('randomNumber', {
            number: Math.random()
        });
    }
</script>
<button on:click={randomNumber}>Generate a random number</button>