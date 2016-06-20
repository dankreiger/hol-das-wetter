var React = require('react');

var CityDataContainer = React.createClass({


  render: function() {
    var p = this.props;


    return (
        <div className="row">
          <div className="components col-sm-4">
            <h4>{p.cityName} {p.country}</h4>
          </div>
        </div>

    );
  }
});

module.exports = CityDataContainer;
