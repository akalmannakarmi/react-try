function Header(){
	return (
		<div>
			<nav className="nav">
				<img src="react-logo.png" className="nav-image"></img>
				<ol className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ol>
			</nav>
		</div>
	)
}

function Page() {
	return (
		<div>
			<Header />
			<h1>Fun facts about React</h1>
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
