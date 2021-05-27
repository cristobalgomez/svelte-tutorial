<script>
    import BindingsComments from './BindingsComments.svelte';
    import BindingsFormEvent from './BindingsFormEvent.svelte';

    
    let comments = [
        {username: "tulio", age: 15, city: "Punta Arenas", content: "cool city" },
        {username: "bodoque", age: 18, city: "Valdivia", content: "a lot of fun" }
    ];

    function addComment(e) {
        let comment = e.detail;
        comments = [...comments, comment];
    }
    
</script>

<BindingsFormEvent on:addComment={addComment}/>
<BindingsComments {comments}/>
