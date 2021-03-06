var React = require('react');

var CountryDisplay = React.createClass({
  render: function(){
    return(
      <div>
        <h4>Country Name: {this.props.country.name}</h4>
        <h4>Country Population: {this.props.country.population}</h4>
        <h4>Language(s) spoken: {this.props.country.languages}</h4>
        <h4>Currency: {this.props.country.currencies}</h4>
        </div>
        )
  }
})


module.exports = CountryDisplay;