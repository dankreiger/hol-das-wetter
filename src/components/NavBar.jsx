var React = require('react');
var PropTypes = React.PropTypes;
var SearchBox = require('./SearchBox.jsx');


var NavBar = React.createClass({

  render: function() {
    var navBarStyle = {
      backgroundColor: '#e3f2fd'
    };

    return (
      <div>
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="#">Hol das Wetter</a>
          {
            // <ul className="nav navbar-nav">
            //   <li className="nav-item active">
            //     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            //   </li>
            //   <li className="nav-item">
            //     <a className="nav-link" href="#">Features</a>
            //   </li>
            //   <li className="nav-item">
            //     <a className="nav-link" href="#">Pricing</a>
            //   </li>
            //   <li className="nav-item">
            //     <a className="nav-link" href="#">About</a>
            //   </li>
            // </ul>
          }

          <SearchBox onNewSearch={this.props.onNewSearch} />
        </nav>

      </div>
    );
  }

});

module.exports = NavBar;
