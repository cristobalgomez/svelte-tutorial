<script>
    import IntroductionChild from './IntroductionChild.svelte';

    let string = `<a href="#">los strings</a> pueden contener <strong>etiquetas html</strong>`;
</script>
<p>Parrafo 1</p>
<IntroductionChild/>
{@html string}

<style>
    p {
        color: orange;
        border: 2px solid black;
        padding: 10px;
    }
</style>