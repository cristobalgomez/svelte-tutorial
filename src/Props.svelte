<script>
    import PropsInfo from './PropsInfo.svelte';

    const info = {
        name: "Bodoque",
        birthdate: "2015/12/5",
        bestFriend: "Tulio"
    }
</script>
<PropsInfo { ...info } />
