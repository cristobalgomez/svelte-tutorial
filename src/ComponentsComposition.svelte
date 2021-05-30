<script>
    import DragnDrop from './DragnDrop.svelte';
    
    
    let listProcesses = [{id: 5531, list: ['paint','move']},
                        {id: 2, list: ['interior assembly', 'drive test']},
                        {id: 656562, list: ['ighgh', 'drfghfghive fghfgh']}];
   
</script>

<DragnDrop processes={listProcesses}/>  
    
