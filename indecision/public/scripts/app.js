'use strict';

console.log('App.js is running!');

var app = {
	title: 'Death Row Records',
	subtitle: 'Los Angeles'
};
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);

var userName = 'Tupac';
var userAge = 28;
var userLocation = 'Italy';
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		userName.toUpperCase()
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		userAge
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		userLocation
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
