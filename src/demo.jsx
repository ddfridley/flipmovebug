'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FlipMove from 'react-flip-move';

class FlipItem extends React.Component {
    render(){
        const {bgColor, id, moveToTop } = this.props;
        return(
                <div  key={ `item-${id}` }>
                    <div style={{backgroundColor: bgColor, width: '250px', height: '50px', cursor: "pointer"}} onClick={moveToTop} >
                        <div style={{ textAlign: 'center', height: "100%"}}>
                            {id}
                        </div>
                    </div>
                </div>
        );
    }
}


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={items: [
                {_id: '0', color: 'cyan'},
                {_id: '1',color: 'magenta'},
                {_id: '2',color: 'magenta'},
                {_id: '3',color: 'magenta'},
                {_id: '4',color: 'magenta'},
                {_id: '5',color: 'yellow'}
        ]}
    }

    moveToTop(id,e) {
        var items=[];
        var itm;
        for(var i in this.state.items){
            itm=Object.assign({},this.state.items[i]);
            if(this.state.items[i]._id === id) {
                itm.color='cyan'
                items.unshift(itm)
            } else { 
                itm.color='magenta';
                items.push(itm);
            }
        }
        items[items.length-1].color='yellow';
        this.setState({items})
    }

    render(){
        var items=this.state.items;
        let articles=[];
        items.forEach(item=>{
            articles.push(
                <FlipItem 
                    bgColor={item.color}
                    key={item._id}
                    id={item._id}
                    moveToTop={(e)=>this.moveToTop(item._id,e)}
                />
            )
        })

        return (
            <div className="demo">
                <div>This demo shows where react-flip-move is not rendering the item, where react alone is.  Click on any numbered rectangle below the top.  Then keep clicking on that same spot. That rectangle will be moved to the top, and it's color will be changed to cyan.  All the other rectangles will be below that one, and will be colored magenta, except the last one will be yellow.  On the left, the list is rendered with react-flip-move. One the right, the list is rendered without it.  You can see that the numbers are always aligned between left and right, but the colors are not.</div>
                <div style={{display: 'table'}} >
                    <div style={{display: 'table-cell', width: "300px" } }>
                        <div style={{textAlign: 'center'}}>With FlipMove</div>
                        <FlipMove duration={500}>
                            {articles}
                        </FlipMove>
                    </div>
                    <div style={{display: 'table-cell', width: "300px" } }>
                        <div style={{textAlign: 'center'}}>Without</div>
                        {articles}
                    </div>
                </div>
                <button onClick={()=>this.forceUpdate()}>Force Update</button>
            </div>
        );
    }
}

ReactDOM.render(

  <App />,

  document.getElementById('root')
);


