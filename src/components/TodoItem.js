import React , {Component} from 'react';
import './TodoItem.css';
import 'classnames'

class TodoItem extends Component{
    render(){
        const classNames = require('classnames');
        
        const {item} = this.props;
        let className = classNames('TodoItem',{' TodoItem-complete': item.isComplete}); 
        
        return(
            <div className={className}>{this.props.item.title}</div>
        );
    }
}

export default TodoItem