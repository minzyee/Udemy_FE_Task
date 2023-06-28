import React, { useState } from "react";

const useForm = (initialValues) => {
	const [values, setValues] = useState(initialValues);

	const handleChange = (e) => {
		const { name, value } = e.target;

		// input으로 들어온 값을 [name]: value 형태로 받아온다.
		setValues((prevValues) => ({ ...prevValues, [name]: value }));
	};

	const resetForm = () => {
		setValues(initialValues);
	};

	return { values, handleChange, resetForm };
};

export default useForm;
