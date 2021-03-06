"use strict";

var Content = React.createClass({
	displayName: "Content",

	//here we are setting an initial state of the Content, it is an empty space
	getInitialState: function getInitialState() {

		return { value: '' }; // empty space
	},

	//change function "e" 
	change: function change(e) {

		console.log(e.target.value); //setting a value when the function e is called
		console.log(React.findDOMNode(this.refs.textbox).value); //Here we are calling a DOM Node and setting a value passed this refs textbox
		this.setState({ value: e.target.value }); // here we are setting a State of our Component to the value passed.
	},
	//here we are rendering our view
	render: function render() {

		return React.createElement(
			"div",
			null,
			React.createElement("input", { type: "text",
				onChange: this.change,
				placeholder: "Hello",
				ref: "textbox" }),
			React.createElement(
				"span",
				null,
				this.state.value,
				" "
			)
		);
	}
});

// rendering the view, we need to pass 2 elements, what and were.  What is Content and where is the element ID 'content'
React.render(React.createElement(Content, null), document.getElementById('content'));
