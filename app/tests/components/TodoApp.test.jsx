var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var expect = require('expect');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {

    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'noboru should eat shit';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos:[]});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

});