 class IndecisionApp extends React.Component {
 	render() {
 		const title = 'Indecision';
 		const subtitle = 'Put your life in the hands of a computer';

 		return (
 		 <div>
 		  <Header title={title} subtitle={subtitle} />
 		  <Action />
 		  <Options />
 		  <AddOptions />
 		 </div>
 		);
 	}
 }



 class Header extends React.Component {
     render() {
     	return (
     		<div>
     		 <h1>{this.props.title}</h1>
     		 <h2>{this.props.subtitle}</h2>
     		</div>
     		);
     }
 }

 class Action extends React.Component {
 	render() {
 		return (
 		 <div>
 		  <button>What should I do</button>
 		 </div>
 		);
 	}
 }

 class Options extends React.Component {
 	render() {
 		return (
 		 <div>
 		  <p>You have the choice to use these options</p>
 		 <Option></Option>
 		 </div>

 		);
 	}
 }

 class Option extends React.Component {
 	render() {
 		return (
 		 <div>
 		  Option Component here
 		 </div>
 		);
 	}
 }

 class AddOptions extends React.Component {
 	render() {
 		return (
 		 <div>
 		  AddOptions here
 		</div>

 		);
 	}
 }




 ReactDOM.render(<IndecisionApp />, document.getElementById('app'));