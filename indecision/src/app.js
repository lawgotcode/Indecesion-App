console.log('App.js is running!');


var app = {
	title: 'Death Row Records',
	subtitle: 'Los Angeles'
};
var template = (
<div>
 <h1>{app.title}</h1>
 <p>{app.subtitle}</p>
 <ol>
  <li>Item one</li>
  <li>Item two</li>
 </ol>
</div>
);

 


var userName = 'Tupac';
var userAge = 28
var userLocation = 'Italy'
var templateTwo = (
	<div>
	  <h1>{userName.toUpperCase()}</h1>
	  <p>Age: {userAge}</p>
	  <p>Location: {userLocation}</p>
	 </div>
	);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);