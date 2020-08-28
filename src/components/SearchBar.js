import React, { Component } from 'react';
import  Search from '@material-ui/icons/Search';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert( this.state.value);
        event.preventDefault();
      }
    render() {
        return (
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="Search"  value={this.state.value} onChange={this.handleChange}  />
                    <Search className="search-icon"/>
                </form>
            )
        }
    }
    
export default SearchBar