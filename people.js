var data = [
    {first: 'Omar', last: 'Shari'},
    {first: 'Audrey', last: 'Hepburn'},
    {first: 'Marilyn', last: 'Moinroe'},
    {first: 'Alex', last: 'DiAntonio'},
    {first: 'Manuel', last: 'Castellano'}
];

var Person = React.createClass({
    render: function() {
        return (
            <div>
                <h2>{this.props.last}, {this.props.first}</h2>
            </div>
        );
    }
});

var PersonList = React.createClass({
    render: function() {
        var people = this.props.data.map(function(person) {
            return <Person first={person.first} last={person.last} />
        });
        return (
            <div>
                {people}
            </div>
        );
    }
});

var PersonApp = React.createClass({
    render: function() {
        return (
            <div>
                <h1>This is the PersonApp</h1>
                <PersonList data={this.props.data} />
            </div>
        );
    }
});

React.render(
    <PersonApp data={data} />,
    document.getElementById('content')
);
