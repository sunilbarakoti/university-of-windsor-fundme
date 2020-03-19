import React from 'react'

export const FileInput = ({ input, resetKey }) => {
	const { value, ...inputProps } = input

	const handleChange = (e) => {
		debugger;
		console.log("The target file",input);
		input.onChange(e.target.files[0])
	}

	return (
		<div className = "ui field" >
			<label>Upload an Image</label>
			<input {...inputProps} key={resetKey} type="file" onChange={handleChange} onBlur={() => {}} />
		</div>
	)
}