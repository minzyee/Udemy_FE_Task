import React, { useState } from "react";
import Counter from "./Counter";
import styled from "styled-components";
import { createStore } from "redux";

// store 생성 시, 반드시 필요한 리듀서 함수
// 리듀서 함수는 store 안에 있는 함수를 어떻게 바꿀지 경정해준다.
function reducer(initialState, action) {
	return;
}

const store = createStore(reducer);

const CounterContainer = () => {
	const [number, setNumber] = useState(1);
	console.log(number);
	return (
		<DIV id="container">
			<h1>Props Container Root</h1>
			<GRID_DIV id="grid">
				{/* <Provider> */}
				<Left1 number={number} />
				<Right1 onIncrease={() => setNumber(number + 1)} />
				{/* </Provider> */}
			</GRID_DIV>
		</DIV>
	);
};

function Left1(props) {
	return (
		<DIV>
			<h1>Left1: {props.number}</h1>
			<Left2 number={props.number} />
		</DIV>
	);
}

function Left2(props) {
	return (
		<DIV>
			<h1>Left2: {props.number}</h1>
			<Left3 number={props.number} />
		</DIV>
	);
}

function Left3(props) {
	return (
		<DIV>
			<h1>Left3: {props.number}</h1>
		</DIV>
	);
}

function Right1(props) {
	return (
		<DIV>
			<h1>Right1: {props.number}</h1>
			<Right2 onIncrease={() => props.onIncrease()} />
		</DIV>
	);
}

function Right2(props) {
	return (
		<DIV>
			<h1>Right2</h1>
			<Right3 onIncrease={() => props.onIncrease()} />
		</DIV>
	);
}

function Right3(props) {
	return (
		<DIV>
			<h1>Right3</h1>
			<button onClick={() => props.onIncrease()}>증가</button>
		</DIV>
	);
}

export default CounterContainer;

const DIV = styled.div`
	border: 4px solid red;
	padding: 10px;
`;

const GRID_DIV = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
`;
