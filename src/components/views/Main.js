import React,{ Component }                from "react";





import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {styles ,tiers,footers} from 'styles/main'
import 'styles/main.scss'
import 'styles/mainIphone.scss'






class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      address: ''
    }
  }

  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };


  render(){
    const { classes } = this.props;
    return(
 
      <React.Fragment>
     
        <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className='addressSearchContainer'>
            <input
              {...getInputProps({
                placeholder: 'Delivery Location.',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#ffffff', cursor: 'pointer' }
                  : { backgroundColor: 'transparent', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span className='SIMM'>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      


        <div className='gurantee'>
          <div className='icontext'>
            <Icon className='motoicon'>motorcycle</Icon>
          </div>
          <div className='icontext'>
            <p className='quickD'> Quick Delivery</p>
          </div>
         
        </div>

      
      
    

      
       


















      {/* Footer */}
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
      {/* End footer */}
    </React.Fragment>
    )
  }
}




export default withStyles(styles)(Main);