var ProgressBar = React.createClass({
    render: function() {
        return (
            <progress value={this.props.value} max={this.props.max} />
        );
    }
});

var ProgressText = React.createClass({
    render: function() {
        return (
            <p>{this.props.value}%</p>
        );
    }
});

var Container = React.createClass({
    render: function() {
        return (
            <div>
                <ProgressText value={this.props.value} />
                <ProgressBar value={this.props.value} max="100" />
            </div>
        );
    }
});

React.render(
    <Container value="75" />,
    document.getElementById('content')
);