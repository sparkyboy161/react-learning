import React , {Component} from 'react';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends Component{
    render(){
        const {item} = this.props;
        return(
            <div className={classNames('TodoItem',{' TodoItem-complete': item.isComplete=== true})}>
            {this.props.item.title}</div>
        );
    }
}

export default TodoItem