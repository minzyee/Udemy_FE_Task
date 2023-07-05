import CounterContainer from "./CounterWithRedux/CounterContainer";
import CounterContainerRedux from "./CounterWithRedux/CounterContainerRedux";

function App() {
	return (
		<>
			<CounterContainer />
			<br />
			<hr />
			<br />
			<CounterContainerRedux />
		</>
	);
}

export default App;
