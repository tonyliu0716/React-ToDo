var React = require('react');
var TodoList = require('TodoList');


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

    render: function() {

        var {todos} = this.state;


        return(
            <div>
                <TodoList todos = {todos}/>
            </div>
        );

    }

});

module.exports = TodoApp;