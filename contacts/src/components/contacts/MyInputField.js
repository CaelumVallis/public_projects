import React from "react";
import TextField from "@material-ui/core/TextField";
import { useField } from "formik";

function MyInputField({ label, error, ...props }) {
	console.log(props);
	let [field, meta] = useField(props);
	return <TextField error={error ? true : false} helperText={error} {...field} fullWidth={true} label={label} />;
}

export default MyInputField;
