var React = require('react');
var PropTypes = React.PropTypes;

var FutureWeather = React.createClass({

  render: function() {
    var p = this.props;

    return (
      <div className="card-group">
        <div className="card">
          <div className="card-block">
            <h6 className="card-title text-xs-center">{p.day1}</h6>
            <p className="card-text text-xs-center">{p.day1Temp} °</p>
            <p className="card-text text-xs-center"><i className={p.day1Icon}></i> {p.day1Description}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <h6 className="card-title text-xs-center">{p.day2}</h6>
            <p className="card-text text-xs-center">{p.day2Temp} °</p>
            <p className="card-text text-xs-center"><i className={p.day2Icon}></i> {p.day2Description}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <h6 className="card-title text-xs-center">{p.day3}</h6>
            <p className="card-text text-xs-center">{p.day3Temp} °</p>
            <p className="card-text text-xs-center"><i className={p.day3Icon}></i> {p.day3Description}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <h6 className="card-title text-xs-center">{p.day4}</h6>
            <p className="card-text text-xs-center">{p.day4Temp} °</p>
            <p className="card-text text-xs-center"><i className={p.day4Icon}></i> {p.day4Description}</p>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = FutureWeather;
