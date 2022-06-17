import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function BasicSelect() {
	const [state, setState] = React.useState("");

	const handleChange = (event) => {
		setState(event.target.value);
	};
	return (
		<FormControl className="w-1/2">
			<InputLabel id="demo-simple-select-label">Select State</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={state}
				label="Select State"
				onChange={handleChange}
			>
				<MenuItem value={0.23}>Virginia</MenuItem>
				<MenuItem value={0.3}>North Carolina</MenuItem>
				<MenuItem value={0.25}>South Carolina</MenuItem>
			</Select>
		</FormControl>
	);
}
