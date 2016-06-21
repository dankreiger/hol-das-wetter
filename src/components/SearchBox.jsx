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
          <form className="form-inline pull-xs-right" onSubmit={this.handleSubmit}>
            <input className="form-control" ref="searchInput" type="text" placeholder="Search city or place" />
            <button className="btn btn-success-outline" type="submit">Search</button>
          </form>

        </div>
    );
  }
});

module.exports = SearchBox;
