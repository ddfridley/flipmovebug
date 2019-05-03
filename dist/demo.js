'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FlipMove from 'react-flip-move';

class FlipItem extends React.Component {
  render() {
    const {
      bgColor,
      id,
      moveToTop
    } = this.props;
    return React.createElement("div", {
      key: `item-${id}`
    }, React.createElement("div", {
      style: {
        backgroundColor: bgColor,
        width: '250px',
        height: '50px',
        cursor: "pointer"
      },
      onClick: moveToTop
    }, React.createElement("div", {
      style: {
        textAlign: 'center',
        height: "100%"
      }
    }, id)));
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        _id: '0',
        color: 'cyan'
      }, {
        _id: '1',
        color: 'magenta'
      }, {
        _id: '2',
        color: 'magenta'
      }, {
        _id: '3',
        color: 'magenta'
      }, {
        _id: '4',
        color: 'magenta'
      }, {
        _id: '5',
        color: 'yellow'
      }]
    };
  }

  moveToTop(id, e) {
    var items = [];
    var itm;

    for (var i in this.state.items) {
      itm = Object.assign({}, this.state.items[i]);

      if (this.state.items[i]._id === id) {
        itm.color = 'cyan';
        items.unshift(itm);
      } else {
        itm.color = 'magenta';
        items.push(itm);
      }
    }

    items[items.length - 1].color = 'yellow';
    this.setState({
      items
    });
  }

  render() {
    var items = this.state.items;
    let articles = [];
    items.forEach(item => {
      articles.push(React.createElement(FlipItem, {
        bgColor: item.color,
        key: item._id,
        id: item._id,
        moveToTop: e => this.moveToTop(item._id, e)
      }));
    });
    return React.createElement("div", {
      className: "demo"
    }, React.createElement("div", null, "This demo shows where react-flip-move is not rendering the item, where react alone is.  Click on any numbered rectangle below the top.  Then keep clicking on that same spot. That rectangle will be moved to the top, and it's color will be changed to cyan.  All the other rectangles will be below that one, and will be colored magenta, except the last one will be yellow.  On the left, the list is rendered with react-flip-move. One the right, the list is rendered without it.  You can see that the numbers are always aligned between left and right, but the colors are not."), React.createElement("div", {
      style: {
        display: 'table'
      }
    }, React.createElement("div", {
      style: {
        display: 'table-cell',
        width: "300px"
      }
    }, React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, "With FlipMove"), React.createElement(FlipMove, {
      duration: 500
    }, articles)), React.createElement("div", {
      style: {
        display: 'table-cell',
        width: "300px"
      }
    }, React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, "Without"), articles)), React.createElement("button", {
      onClick: () => this.forceUpdate()
    }, "Force Update"));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));