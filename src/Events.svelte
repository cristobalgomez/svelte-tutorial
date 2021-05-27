<script>
    import EventsOuter from './EventsOuter.svelte';

</script>

<EventsOuter on:randomNumber|once={ (e) => alert(e.detail.number) }/>