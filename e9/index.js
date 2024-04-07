function Contact(props) {
	const count = props.address === 1;
	return (
		<div>
			{props.name && <h3>{props.name}:</h3>}
			<p>{props.number}</p>
			{count &&<p>{props.number}</p>}
		</div>
	);
}

function Contacts(){
	const cons = contacts.map(prop=>{
		return <Contact name={prop.name} number={prop.number} address={prop.address} />
	});
	return (<div>{cons}</div>);
}


const contacts = [
	{
		number:"9817356891"
	},
	{
		name:"Jacobs",
		number:"9817356891"
	},
	{
		name:"Henry",
		number:"9817356891"
	},
	{
		name:"Candace",
		number:"9817356891",
		address:1
	}
]
ReactDOM.render(
	<div>
		<Contacts/>
	</div>
	,document.getElementById("root"));
