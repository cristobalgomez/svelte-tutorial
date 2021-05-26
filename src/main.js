// import App from './App.svelte';
// import Introduction from './Introduction.svelte';
// import Reactivity from './Reactivity.svelte';
import Props from './Props.svelte';

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

const props = new Props({
	target: document.body
});
export default props;