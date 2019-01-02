var React = require('react');

var AddTodo = React.createClass({

    handleSubmit: function(e) {
        e.preventDefault();

        // assuming all the to do items are valid
        var text = this.refs.todoText.value;

        if(text.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(text);
        } else {
            this.refs.todoText.focus();
        }

        // add new id to new to do item



    },

    render: function() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add ToDo</button>
                </form>
            </div>

        );
    }

});

module.exports = AddTodo;