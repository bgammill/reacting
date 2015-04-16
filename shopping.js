var data = [
    {name: "Bananas", price: 0.50},
    {name: "Chips", price: 1.00},
    {name: "Donut", price: 1.50}
];

var Item = React.createClass({
    
    render: function() {
        return (
            <li onClick={this.handleClick}>{this.props.name} - ${this.props.price}</li>
        );
    },
    handleClick: function(event) {
        console.log("clicked!");
        console.log(event);
    }
});

var ItemList = React.createClass({
    render: function() {
        var items = this.props.data.map(function(item) {
            return <Item name={item.name} price={item.price} />
        });
        
        return (
            <div>
                {items}
            </div>
        );
    }
});

var AddedItemList = React.createClass({
    render: function() {
        
    }
});

var ShoppingCartApp = React.createClass({
    render: function() {
        return (
            <ItemList data={data} />
        );
    }
});

React.render(
    <ShoppingCartApp />,
    document.getElementById('content')
);