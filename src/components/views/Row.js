import React,{ Component }                from "react";
import 'styles/row.scss'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'
  import Button from '@material-ui/core/Button';
  import MediaCard from 'components/views/card'
  import 'styles/mainIphone.scss'

  





class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'row'
    }
  }

    componentDidMount(){   
    }


    render() {

     
      return (
       
          <div className="row">  
              <div> </div>
              <div className='container'> 
              <div> 
                 <p className='flowerText'> Flower</p>
                 <p className='subText'> The best bud. Grind it up, roll it, or pack into your preferred smoking device.</p>
              </div>
              <div className='cardsrow'>
                  <div style={{display:'inline-block',margin:'10px'}}>
                    <MediaCard/>
                  </div>
                  <div style={{display:'inline-block',margin:'10px'}}>
                    <MediaCard/>
                  </div>
                  <div style={{display:'inline-block',margin:'10px'}}>
                    <MediaCard/>
                  </div>
                  <div style={{display:'inline-block',margin:'10px'}}>
                    <MediaCard/>
                  </div>
                
              </div>
              </div>
              <div> </div>
              <div className='container'> 
              <div> 
                 <p className='flowerText'> Edibles</p>
                 <p className='subText'> A tasty alternative for enjoyment and relief. Everything from low dose to non-psychoactive options that deliver a long-lasting effect</p>
              </div>
              <div className='cardsrow'>
                  <div style={{display:'inline-block',margin:'10px'}}>
                    <MediaCard/>
                  </div>
                  <div style={{display:'inline-block',margin:'10px'}}>
                    <MediaCard/>
                  </div>
                  <div style={{display:'inline-block',margin:'10px'}}>
                    <MediaCard/>
                  </div>
                  <div style={{display:'inline-block',margin:'10px'}}>
                    <MediaCard/>
                  </div>
                
              </div>
              </div>
          </div>
        
      );
    }
  }







export default Row;
