import React, { Component } from 'react'
import {connect} from 'react-redux';

import {searchCollections} from '../../Actions/actions';

class SearchForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         searchQuery: ""
      }
    }
    
    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            searchQuery : e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.searchCollections(this.state.searchQuery);
    }

    render() {
        return (
            <form className="form-inline my-2 my-lg-0" id="searchForm">
                <input className="form-control mr-sm-2" type="search" value={this.state.searchQuery} onChange = {this.changeHandler}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick = {this.submitHandler}>Search</button>
            </form>
        )
    }
}

export default connect(null, {searchCollections})(SearchForm);
