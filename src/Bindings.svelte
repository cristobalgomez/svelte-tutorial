<script>
    import BindingsComments from './BindingsComments.svelte';
    import BindingsEventForm from './BindingsEventForm.svelte';
    
    let comments = [
        {username: "tulio", age: 15, city: "Punta Arenas", content: "cool city" },
        {username: "bodoque", age: 18, city: "Valdivia", content: "a lot of fun" }
    ];

    function addComment(e) {
        let comment = e.detail;
        comments = [...comments, comment];
    }
    
</script>

<BindingsEventForm on:addComment={addComment}/>
<BindingsComments {comments}/>
