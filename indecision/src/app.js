console.log('App.js is running!');


var app = {
	title: 'Death Row Records',
	subtitle: 'Chicago'
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


var user = {
  name: 'Tupac',
  age: 28,
  location: 'Accra'
   };

 function getLocation(location) {
    if (location) {
    	return <p>Location {location}</p>;
    
    }
 }

var templateTwo = (
	<div>
	  <h1>{user.name}</h1>
	  <p>Age: {user.age}</p>
	  {getLocation(user.location)}
	 </div>
	);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);