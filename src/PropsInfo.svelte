<script>
    export let name;
    export let birthdate;
    export let bestFriend;

    //https://www.w3resource.com/javascript-exercises/javascript-date-exercise-18.php
    function calculateAge(dob) { 
        let diff_ms = Date.now() - dob.getTime();
        let age_dt = new Date(diff_ms); 
  
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
</script>
<h1>Hello!</h1>
<p>My name is { name }, I am { calculateAge(new Date(birthdate)) } years old, and
my best friend is { bestFriend }</p>