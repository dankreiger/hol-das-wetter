var React = require('react');
var PropTypes = React.PropTypes;

var FutureWeather = React.createClass({

  render: function() {
    return (
      <div className="card-group">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.props.name} {this.props.country}</h4>
            <p className="card-text">{this.props.temp} °F</p>
            <p className="card-text"><small className="text-muted">{this.props.min} °/ {this.props.max} °</small></p>

          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = FutureWeather;
