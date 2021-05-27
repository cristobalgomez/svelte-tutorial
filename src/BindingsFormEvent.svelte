<script>
    import { createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();
    
    let username;
    let age;
    let city;
    let content;

    let cities = [ "Santiago", "Valdivia", "Punta Arenas"];

    function handleSubmit() {
        const newComment = {
            username: username,
            age: age,
            city: city,
            content: content
        };
        dispatch('addComment', newComment);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label>
        <input type=text placeholder="enter your username" bind:value={username}>
    </label>
    <label>
        <input type=text placeholder="enter your age" bind:value={age}>
    </label>
    <label>
        <textarea placeholder="enter your comment" bind:value={content}></textarea>
    </label>
    <label>
        <select bind:value={city}>
            {#each cities as selectedCity}
                <option value={selectedCity}>{selectedCity}</option>
            {/each}
        </select>
    </label>
        
    
    <button type=submit>
        Submit
    </button>
   

</form>