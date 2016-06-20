var React = require('react');
var PropTypes = React.PropTypes;

var CurrentWeather = React.createClass({
  render: function() {
    var inverseStyle = {
      backgroundColor: '#333',
      borderColor: '#333'
    };
    var weatherIconStyle = {
      color: 'rgba(255,255,255,.65)'
    };
    var tempStyle = {
      marginTop: 15
    };

    return (
      <div>
        <div className="row">
          <div className="col-xs-6">
            <div className="card card-inverse" style={inverseStyle}>
              <div className="card-block">
                <div className="row">
                  <div className="col-xs-8">
                    <h5 className="card-title" >{this.props.name}, {this.props.country}</h5>
                    <p className="card-text" ><small className="text-muted">{this.props.min} °/ {this.props.max} ° {this.props.description}</small></p>
                  </div>
                </div>
                <div className="row" style={tempStyle}>
                  <div className="col-xs-1 col-xs-offset-3">
                    <i className={this.props.icon} style={weatherIconStyle}></i>
                  </div>
                  <div className="col-xs-5">
                    <h3 className="card-text">{this.props.temp} °F</h3>
                    <h3 className="card-text">{this.props.tempC} °C</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = CurrentWeather;
