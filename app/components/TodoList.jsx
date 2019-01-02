var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

    render: function() {
        var {todos} = this.props;

        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                   // needs to provide key for React to keep track of the component
                   <Todo key={todo.id} {...todo}/>
                );
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }

});

module.exports = TodoList;