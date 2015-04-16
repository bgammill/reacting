var comments = [
    {date: '3 days ago', username: 'bgammill', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus nunc, feugiat bibendum dignissim in, viverra nec mauris. Vestibulum nec metus non enim consectetur posuere.'},
    {date: 'yesterday', username: 'cbrown', content: 'Cras sodales libero quis finibus viverra. Donec lobortis nisl sit amet euismod pretium.'},
    {date: 'today', username: 'wmaiuri', content: 'Quisque aliquam lobortis condimentum. Nulla nec nibh eros. Mauris eget nulla nunc.'},
    {date: 'a week ago', username: 'bgammill', content: 'In aliquam, elit sit amet aliquet sagittis, felis nibh laoreet est, ut tempor nisl dui at arcu. Nullam interdum consectetur dui.'},
    {date: '13 days ago', username: 'cbrown', content: 'Suspendisse tristique erat est, ut pharetra ante tincidunt ac.'}
];

var Comment = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-1">
                        <div className="thumbnail">
                            <img className="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                        </div>
                    </div>

                    <div className="col-sm-5">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <strong>{this.props.username}</strong> <span className="text-muted">{this.props.date}</span>
                            </div>
                            <div className="panel-body">{this.props.content}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Comments = React.createClass({
    getInitialState: function() {
        return {comments: comments};
    },
    
    render: function() {
        return (
            <div>
            <h1>Thread 124131212</h1>
            {this.state.comments.map(function(item, i) {
                return (
                <Comment date={item.date} username={item.username} content={item.content} />
             );
            }, this)}
            </div>
        );
    }
});

var ThreadList = React.createClass({
    
});

React.render(<Comments />, document.body);