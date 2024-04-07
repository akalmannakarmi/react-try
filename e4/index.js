function Header(){
	return (
		<div>
			<img src="react-logo.png" width="100px"></img>
			<h1>Fun facts about React</h1>
		</div>
	)
}

function Page() {
	return (
		<div>
			<Header />
			<ul>
				<li>Was first Released in 2013</li>	
				<li>Was originally created by Jordan Walke</li>	
				<li>Has over 100K star in github</li>	
				<li>Is maintained by facebook</li>	
				<li>Powers thousands of enterprise apps, including mobile apps</li>	
			</ul>
		</div>
	)
}

ReactDOM.render(<Page />,document.getElementById("root"));
