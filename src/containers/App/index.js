import React, { Component } from 'react';
import {connect} from 'react-redux';  

class App extends Component {

    render () {
        return (
            <div>
                {this.props.text}
            </div>
        )
    };
}

function mapStateToProps(state, ownProps) {  
    return {
        
    };
}

function mapDispatchToProps(dispatch) {  
    return {
        
    };
}     

export default connect(mapStateToProps, mapDispatchToProps)(App); 