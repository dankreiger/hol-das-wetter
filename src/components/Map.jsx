var React = require('react');
var PropTypes = React.PropTypes;

var Map = React.createClass({

  render: function() {
    var p = this.props;
    var mapStyles = {
      border: '1px solid black'
    }
    return (
      <div>
        <iframe
          width="100%"
          height="290"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src={p.mapUrl}
          style={p.mapStyles}>
        </iframe>
      </div>
    );
  }

});

module.exports = Map;
