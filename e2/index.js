function MainContent(){
	return (<h1>I am learning react</h1>)
}

ReactDOM.render(<MainContent />,
	document.getElementById("root")
);

const page = <p>I hope i am doing good!!!</p>

ReactDOM.render(page,
	document.getElementById("root1")
);