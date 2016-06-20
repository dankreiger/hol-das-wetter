var React = require('react');
var PropTypes = React.PropTypes;

var FutureWeather = React.createClass({

  render: function() {
    return (
      <div className="card-group">
        <div className="card">
          <div className="card-block">
            <h6 className="card-title">{this.props.day1}</h6>
            <p className="card-text">{this.props.day1Temp} °F</p>
            <p className="card-text"><small className="text-muted">{this.props.day1Min} °/ {this.props.day1Max} °</small></p>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <h6 className="card-title">{this.props.day2}</h6>
            <p className="card-text">{this.props.day2Temp} °F</p>
            <p className="card-text"><small className="text-muted">{this.props.day2Min} °/ {this.props.day2Max} °</small></p>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <h6 className="card-title">{this.props.day3}</h6>
            <p className="card-text">{this.props.day3Temp} °F</p>
            <p className="card-text"><small className="text-muted">{this.props.day3Min} °/ {this.props.day3Max} °</small></p>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <h6 className="card-title">{this.props.day4}</h6>
            <p className="card-text">{this.props.day4Temp} °F</p>
            <p className="card-text"><small className="text-muted">{this.props.day4Min} °/ {this.props.day4Max} °</small></p>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <h6 className="card-title">{this.props.day5}</h6>
            <p className="card-text">{this.props.day5Temp} °F</p>
            <p className="card-text"><small className="text-muted">{this.props.day5Min} °/ {this.props.day5Max} °</small></p>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = FutureWeather;
