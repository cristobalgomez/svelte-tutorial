<script>
    export let count = 1;
    let obj = {b: "Chao"};
    let numbers = [...Array(count).keys()].map( i => i + 1);

    function addNumber() {
        numbers[numbers.length] = numbers.length + 1;
        count++;
    }

    $: obj.a = count;
    $: sum = numbers.reduce( (accum, curr) => accum + curr );
    $: if(count > 15) {
        alert('clicked too many times');
        console.log('clicked too many times');
        count = 1;
        numbers = [1];
    }
    
</script>

<button on:click={ addNumber }>Add number</button>

<p>La raiz de { count } es { Math.sqrt(count) }</p>

<p>{ obj.a } - { obj.b }</p>

<p>{ numbers.join(' + ') }  = { sum } </p>
