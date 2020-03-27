/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { Input, Button } from 'reactstrap'

import { connect } from 'react-redux'

import TodoList from '../../Presentational/todoList'

import { updateValue, addItem } from '../../Store/action'

class TodoOuter extends Component {
    // eslint-disable-next-line react/require-render-return
    // constructor(props) {
    //     super(props);
    // }
    onChange = (e) => {
        // this.setState({
        //     value: e.target.value
        // })
        this.props.updateValue(e.target.value)
    }
    addItem = () => {
        // this.setState(state => {
        //    return {
        //     items: [...new Set([...state.items, state.value])]
        //     // items: [...state.items, state.value]
        //    } 
        // })
        const gh = this.props.listData.indexOf(this.props.value) === -1;
        if(this.props.value && gh) {
            this.props.addItem(this.props.value)
        }
        
    }
    KeyUpAddItem = (event) => {
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
        // this.setState(state => {
        //    return {
        //     items: [...new Set([...state.items, state.value])]
        //     // items: [...state.items, state.value]
        //    } 
        // })
        const gh = this.props.listData.indexOf(this.props.value) === -1;
        this.props.value && gh && this.props.addItem(this.props.value)
    }
    }
    render() {
        const { todo } = this.props;
        console.log("todo", todo);
        return (
            <React.Fragment>
                <div style={{ display: 'flex'}}>
                <Input 
                type="text" 
                value={this.props.value}
                onChange={this.onChange}
                onKeyUp={this.KeyUpAddItem} />
                <Button  style={{padding: '3px', flex: '1 1 100%'}} color="info" onClick={this.addItem}> Add Item</Button>
                </div>
                <TodoList
                    items={this.props.listData} 
                    loader={this.props.loader}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo,
        value: state.todo.value,
        listData: state.todo.listData,
        loader: state.todo.loader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateValue: value => dispatch(updateValue(value)),
        addItem: item => dispatch(addItem(item))
    }
}


export default connect( mapStateToProps, mapDispatchToProps)(TodoOuter);