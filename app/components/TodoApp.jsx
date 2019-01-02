var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');


var TodoApp = React.createClass({

    // return the default state
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Feed the cat'
                },
                {
                    id: 4,
                    text: 'Learn React'
                },
                {
                    id: 5,
                    text: 'Learn Micro Service'
                }
            ]
        }

    },

    handleAddTodo: function(text) {
       alert('new todo ' + text);
    },

    render: function() {

        var {todos} = this.state;


        return(
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );

    }

});

module.exports = TodoApp;