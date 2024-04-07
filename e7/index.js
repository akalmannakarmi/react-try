function Page() {
	const date = new Date();
	const hours = date.getHours();
	let timeOfDay;
	if (hours<12) {
		timeOfDay="Morning";
	} else if(hours>=12 && hours<17){
		timeOfDay="Afternoon"
	} else {
		timeOfDay="night"
	}
	return (
		<h1>{timeOfDay}</h1>
	)
}

ReactDOM.render(<Page />,document.getElementById("root"));
