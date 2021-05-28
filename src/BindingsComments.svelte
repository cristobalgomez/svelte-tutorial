<script>
    export let comments;
</script>

{#each comments as comment, i}
    <div>
        <p>#{i+1}. @{comment.username} - {comment.age} years young - Visited city: {comment.city}</p>
        <p>Comment: {comment.content}</p>
    </div>
{/each}

<style>
	div {
        margin: 1em;
        padding: 0.5em;
        border: 1px solid #eee;
        border-radius: 4px;
	}
</style>