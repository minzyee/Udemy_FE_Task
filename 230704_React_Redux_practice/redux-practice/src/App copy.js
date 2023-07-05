import Counter from "./Counter";

import { createStore } from "redux"; // 1. createStore를 import 하여 호출한다.
import { Provider } from "react-redux"; // 4. Provider를 호출하여 애플리케이션에 공급한다.

createStore(reducer);

// 2. reducer 함수를 선언한다.
function reducer(state, action) {
	if (action.type === "up") {
		return { ...state, value: state.value + action.step };
	}
	return state;
}

// 3. 초기값 셋팅한다.
const initialState = { value: 0 };
console.log(initialState);

// 4. store에 createStore를 할당
const store = createStore(reducer, initialState);

function App() {
	return (
		<>
			{/* 4-1. Provider를 애플리케이션에 공급할 때, store를 넘겨주지 않으면 에러가 발생한다. */}
			<Provider store={store}>
				<Counter />
			</Provider>
			<br />
			<hr />
		</>
	);
}

export default App;
