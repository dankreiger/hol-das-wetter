var React = require('react');
var PropTypes = React.PropTypes;

var CurrentWeather = React.createClass({
  render: function() {
    var p = this.props;
    var cardBlockStyle = {
      backgroundImage: 'url('+p.backgroundPhoto+')',
      color: '#333',
      padding: 0
    };
    var overlayStyle = {
      backgroundColor: 'rgba(236,238,239,0.4)',
      padding: '1.25rem'
    };
    var cardContainerStyle = {
      backgroundColor: '#333',
      border: 'none'
    };
    var weatherIconStyle = {
      color: 'rgba(255,255,255,.65)'
    };
    var tempStyle = {
      marginTop: 15
    };

    return (
      <div>
        <div className="card text-xs-center" style={cardContainerStyle}>
          <div className="card-block" style={cardBlockStyle}>
            <div style={overlayStyle}>
              <div className="row">
                <div className="col-xs-12">
                  <h5 className="card-title" >{p.name}, {p.country}</h5>
                </div>
              </div>
              <div className="row" style={tempStyle}>
                <div className="col-xs-12">
                  <h3 className="card-text">{p.currentTemp} °</h3>
                </div>
              </div>
              <div className="row" style={tempStyle}>
                <div className="col-xs-12">
                  <p className="card-text">
                    <i className={p.icon}></i> {p.description}
                  </p>
                </div>
              </div>
              <div className="row" style={tempStyle}>
                <div className="col-xs-12">
                  <p className="card-text">
                     {p.currentMin} °/ {p.currentMax} °
                  </p>
                  <p className="card-text">{p.dt}</p>
                </div>
              </div>
              <div className="row" style={tempStyle}>
                <div className="col-xs-12">
                  <div className="btn-group">
                    <a className={p.metricClass} onClick={p.metricClick}>C</a>
                    <a className={p.imperialClass} onClick={p.imperialClick}>F</a>
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
