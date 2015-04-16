var data = [
    {first: 'Bobby', last: 'Gammill', username: 'bgammill'},
    {first: 'Jennifer', last: 'Rich', username: 'jrich'},
    {first: 'Christopher', last: 'Brown', username: 'cbrown'},
    {first: 'Thomas', last: 'Gebert', username: 'tgebert'},
    {first: 'Alex', last: 'Morris', username: 'amorris'}
];

var Profile = React.createClass({
    render: function() {
        return (
            <div className="col-md-4">
                <div className="well well-sm">
                    <div className="media">
                        <a className="thumbnail pull-left" href="#">
                            <img className="media-object" src={"https://robohash.org/" + this.props.username } />
                        </a>
                        <div className="media-body">
                            <h4 className="media-heading">{this.props.first} {this.props.last}</h4>
                            <p><span className="label label-info">888 photos</span> <span className="label label-warning">150 followers</span></p>
                            <p>
                                <a href="#" className="btn btn-xs btn-default"><span className="glyphicon glyphicon-comment"></span> Message</a>
                                <a href="#" className="btn btn-xs btn-default"><span className="glyphicon glyphicon-heart"></span> Favorite</a>
                                <a href="#" className="btn btn-xs btn-default"><span className="glyphicon glyphicon-ban-circle"></span> Unfollow</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var ProfileList = React.createClass({
    render: function() {
        var profiles = this.props.data.map(function(profile) {
            return <Profile first={profile.first} last={profile.last} username={profile.username} />
        });
        return (
            <div>
                {profiles}
            </div>
        );
    }
});

var ProfileApp = React.createClass({
    render: function() {
        return (
            <div>
                <h1>This is the ProfileApp</h1>
                <ProfileList data={this.props.data} />
            </div>
        );
    }
});

React.render(
    <ProfileApp data={data} />,
    document.getElementById('content')
);