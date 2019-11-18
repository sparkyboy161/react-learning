import React , {Component} from 'react';
import './TodoItem.css'

class TodoItem extends Component{
    render(){
        let className = 'TodoItem';
        const {item} = this.props;
        if(item.isComplete){
            className += ' TodoItem-complete';
        } 
        
        return(
            <div className={className}>{this.props.item.title}</div>
        );
    }
}

export default TodoItem