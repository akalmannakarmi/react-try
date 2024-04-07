function Page() {
	const [count,setCount] = React.useState(0);
	function add() {
		setCount(oldValue => oldValue+1);
	}
	function sub() {
		setCount(oldValue => oldValue-1);
	}
	return (
		<div>
			<h3>{count}</h3>
			<button onClick={add}>+</button>
			<button onClick={sub}>-</button>
		</div>
	);
}



ReactDOM.render(
	<Page/>
	,document.getElementById("root"));
