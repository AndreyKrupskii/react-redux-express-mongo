import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class App extends Component {
	render(){
		return (
			<h1>Hello world</h1>
		)
	}
}

function mapStateToProps(state){
	return{
		list: state.list
	}
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		authActions: bindActionCreators(authActions, dispatch)
// 	}
// }

export default connect(mapStateToProps)(App)