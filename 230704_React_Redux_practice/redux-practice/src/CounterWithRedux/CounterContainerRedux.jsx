import React, { useState } from "react";
import Counter from "./Counter";
import styled from "styled-components";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
// Provider: state를 어떤 컴포넌트들에게 제공할 것인가에 대해 가장 바깥쪽에서 제공해주는 울타리 역할을 한다.
// useSelector: 어떤 state 값을 쓰고 싶은지 선택한다.
// useDispatch: state 값을 변경시킬 때 사용한다.
// connect: 재사용성으로 사용할 때 필요하지만 그렇지 않은 경우엔 쓰지 않아도 됨(사용하기 어려움)

const store = createStore(reducer);

// store 생성 시, 반드시 필요한 리듀서 함수로, store 안에 있는 함수를 어떻게 바꿀지 경정해준다.
// initialState: 현재의 state 값
// action: 어떻게 바꿀것인지에 대한 요청을 하는 곳
// reducer함수는 action을 받아서 새로운 state값을 리턴한다.
function reducer(currentState, action) {
	if (currentState === undefined) {
		return { number: 1 };
	}

	const newState = { ...currentState }; // 불변성을 유지하기 위해 state를 복제 한다.

	if (action.type === "PLUS") {
		newState.number++;
	}

	return newState; // 그렇게 변화시킨 state를 리턴한다.
}

const CounterContainerRedux = () => {
	return (
		<DIV id="container">
			<h1>Redux ContainerRoot</h1>
			<GRID_DIV id="grid">
				<Provider store={store}>
					<Left1 />
					<Right1 />
				</Provider>
			</GRID_DIV>
		</DIV>
	);
};

function Left1() {
	return (
		<DIV>
			<h1>Left1: </h1>
			<Left2 />
		</DIV>
	);
}

function Left2() {
	return (
		<DIV>
			<h1>Left2:</h1>
			<Left3 />
		</DIV>
	);
}

function Left3() {
	const number = useSelector((state) => state.number);
	return (
		<DIV>
			<h1>Left3: {number}</h1>
		</DIV>
	);
}

function Right1() {
	return (
		<DIV>
			<h1>Right1: </h1>
			<Right2 />
		</DIV>
	);
}

function Right2() {
	return (
		<DIV>
			<h1>Right2</h1>
			<Right3 />
		</DIV>
	);
}

function Right3() {
	// dispatch를 이용해 일치하는 action을 발생시킨다.
	const dispatch = useDispatch();
	return (
		<DIV>
			<h1>Right3</h1>
			<button onClick={() => dispatch({ type: "PLUS" })}>증가</button>
		</DIV>
	);
}

export default CounterContainerRedux;

const DIV = styled.div`
	border: 4px solid green;
	padding: 10px;
`;

const GRID_DIV = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
`;
