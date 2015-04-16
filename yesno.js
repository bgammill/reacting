var Button = React.createClass({
	render: function() {

		if (this.props.selected) {
			outputText = "not selected";
		} else {
			outputText = "selected";
		}

		this.props.selected = false;

		return (
			<button value="test">{outputText}</button>
		)
	}
});

var Container = React.createClass({
	render: function() {
		return (
			<Button />
		);
	}
});

React.render(
	<Button selected={false} />,
	document.getElementById('content')
);