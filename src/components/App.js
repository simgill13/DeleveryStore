import React,{ Component }               from "react";
import {connect}            from "react-redux";
// import {Link}               from "react-router";








class App extends Component {
 
    render() { 
        console.log(this.props)
        return (
            <div>
                <h2> app component test </h2>
            </div> 
        );
    }
}








const mapStateToProps = (state) => {
  return {
    firstReducer:state.firstReducer,
    secondReducer:state.secondReducer
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
