import React from 'react';
import { Input, List } from "antd";

/* class TodoItem extends React.Component {
    render() {
        const { todo } = this.props;
        return (
            <li>{todo}</li>
        );
    }
} */

const TodoItem = ({ todo }) => <li>{todo}</li>


class TodoList extends React.Component {
    state = {
        todoList: ['react', 'python', 'django'],
        current: ''
    }

    onChange = (e) => {
        const { value } = e.target;
        this.setState({
            current: value,
        });

    };

    onKeyDown = (e) => {
        if (e.keyCode === 13) {
            const { todoList, current } = this.state;
            if (current.trim().length > 0) {
                this.setState({
                    todoList: [...todoList, current],
                    current: '',
                })
            }
        }
    }


    render() {
        return (
            <div style={{ width: '300px', margin: '30px auto' }}>
                <List
                    header={"Todo List"}
                    dataSource={this.state.todoList}
                    bordered={true}
                    renderItem={todo => (
                        <List.Item>
                            {todo}
                        </List.Item>

                    )}
                    style={{
                        marginBottom: '4px'
                    }}

                />
                <Input type='text' placeholder='Write What to do' value={this.state.current} onChange={this.onChange} onKeyDown={this.onKeyDown} />

                <ul>
                    {this.state.todoList.map((todo, index) =>
                        <TodoItem key={index} todo={todo} />
                    )}
                </ul>
                <input type='text' placeholder='Write What to do' value={this.state.current} onChange={this.onChange} onKeyDown={this.onKeyDown} />
                <button>Submit</button>
                <hr />
                {JSON.stringify(this.state)}
            </div>
        );
    }
}

export default TodoList;