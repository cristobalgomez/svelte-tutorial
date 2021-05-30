<script>
    export let processes;

    function dragStart(event, machineIndex, processIndex) {
		const data = {machineIndex, processIndex};
   	    event.dataTransfer.setData('text/plain', JSON.stringify(data));
    }

    function drop(event, machineIndex) {
		event.preventDefault();
        const json = event.dataTransfer.getData("text/plain");
		const data = JSON.parse(json);

		const [process] = processes[data.machineIndex].list.splice(data.processIndex, 1);
		
		processes[machineIndex].list.push(process);
		processes = processes;	
	}
</script>


<div class="container">
{#if processes}
    {#each processes as machine, machineIndex (machine)}
    <div class="machine">
        <h2>Machine {machine.id}</h2>
        <ul on:drop={event => drop(event, machineIndex)}
        ondragover="return false">
            {#each machine.list as process, processIndex (process)}
                <div class="item">
                <li
                    draggable={true}
                    on:dragstart={event => dragStart(event, machineIndex, processIndex)}>
                    {process}
                </li>
                </div>
            {/each}
            <!-- <li draggable={true} 
            on:dragstart={ event => dragStart(event, basketIndex, itemIndex)}>{process.list}</li> -->
        </ul>
    </div>
    {/each}
{:else}
    <span class="err">No data available</span>
{/if}
</div>


<style>
    .err {
        color: red;
        font-weight: bold;
    }
    .machine {
        border: 1px solid black;
    }
    ul {
        min-height: 50px;
    }
    li {
        background-color: green;
        color: white;
        padding: 5px;
        margin: 5px;
        
    }
    .item {
        display: inline;
    }
</style>