// import App from './App.svelte';
// import Introduction from './Introduction.svelte';
// import Reactivity from './Reactivity.svelte';
// import Props from './Props.svelte';
// import Logic from './Logic.svelte';
// import Events from './Events.svelte';
import Bindings from './Bindings.svelte';


// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'mundo'
// 	}
// });

// export default app;

// const introduction = new Introduction({
// 	target: document.body
// });
// export default introduction;

// const reactivity = new Reactivity({
// 	target: document.body,
// 	props: {
// 		count: 4
// 	}
// });
// export default reactivity;

// const props = new Props({
// 	target: document.body
// });
// export default props;

// const logic = new Logic({
// 	target: document.body
// });
// export default logic;

// const events = new Events({
// 	target: document.body
// });

const bindings = new Bindings({
	target: document.body
});
export default bindings;