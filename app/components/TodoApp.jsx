var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uudi = require('node-uuid');

var TodoApp = React.createClass({

    // return the default state
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uudi(),
                    text: 'Walk the dog'
                },
                {
                    id: uudi(),
                    text: 'Clean the yard'
                },
                {
                    id: uudi(),
                    text: 'Feed the cat'
                },
                {
                    id: uudi(),
                    text: 'Learn React'
                },
                {
                    id: uudi(),
                    text: 'Learn Micro Service'
                }
            ]
        }

    },

    handleAddTodo: function(text) {
       this.setState({
           todos: [
               ...this.state.todos,
               {
                   // install uuid: npm install node-uuid --save-dev
                   id: uudi(),
                   text: text
               }
           ]
       });
    },

    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },

    render: function() {

        var {todos} = this.state;


        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );

    }

});

module.exports = TodoApp;