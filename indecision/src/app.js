console.log('App.js is running!');


const app = {
	title: 'Death Row Records',
	subtitle: 'Chicago is the best city in the world',
	options: ['One', 'Two']
};
const template = (
<div>
 <h1>{app.title}</h1>
 {app.subtitle && <p>{app.subtitle}</p>}
 <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
 <ol>
  <li>Item one</li>
  <li>Item two</li>
 </ol>
</div>
);

let count = 0;
const addOne = () => {
	console.log('addOne');
}
const templateTwo = (
 <div>
  <h1>Count: {count}</h1>
  <button onClick={addOne}>+1</button>
</div>
);




const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);