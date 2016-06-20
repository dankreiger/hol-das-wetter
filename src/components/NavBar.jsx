var React = require('react');
var PropTypes = React.PropTypes;

var NavBar = React.createClass({

  render: function() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="#">DK</a>
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Wetter <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

});

module.exports = NavBar;
