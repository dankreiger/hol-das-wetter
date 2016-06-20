var React = require('react');


var SearchBox = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    if (this.refs.searchInput.value.trim() && this.props.onNewSearch) {
    	this.props.onNewSearch(this.refs.searchInput.value);
      this.refs.searchInput.value = '';
    }
  },

  render: function() {
    return (
        <div>
          <form className="form-inline pull-xs-left" onSubmit={this.handleSubmit} >
          <input className="form-control" ref="searchInput" placeholder="Search..." />
          <button type="btn" className="btn btn-success-outline"><i className="fa fa-search"></i></button>
          </form>
        </div>
    );
  }
});

module.exports = SearchBox;
