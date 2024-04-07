function Contact(props) {
	const count = props.address === 1;
	return (
		<div>
			{props.name && <h3>{props.name}:</h3>}
			<p>{props.number}</p>
			{count &&<p>{props.number}</p>}
		</div>
	)
}

ReactDOM.render(
	<div>
		<Contact number="91247815"/>
		<Contact name="John" number="9612984659"/>
		<Contact name="John" number="9612984659"/>
		<Contact name="Jessie" number="97097135"/>
		<Contact name="Henry" number="918947532"/>
		<Contact name="Henry" number="918947532" address={1}/>
	</div>
	,document.getElementById("root"));
