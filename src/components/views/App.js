import React,{ Component,Fragment }                from "react";
import 'styles/app.scss';
import 'styles/mainIphone.scss'
import { Header, Icon ,Dimmer,Search,Grid,Divider,Button, Loader, Image, Segment,Input } from 'semantic-ui-react'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    }
  }

  componentDidMount(){}



    render() {
      return (
          <Fragment>
            <div className='image-container'>
              <div className='logo-container animated  fadeIn'> 
                <h1 className='logo-b'> B </h1>
                <p className='bunzee-tagline'> Bunzee</p>
                <div className='choice-container'>
                  <form className='login-form'>
                    <label className='labels'>
                      <br/>
                      <Input 
                      placeholder='Email'
                      className='form-input'
                      />
                    </label>
                    <br/>
                    <label className='labels'>
                      <br/>
                      <Input 
                      type='password'
                      placeholder='Password'
                      className='form-input'
                      />
                    </label>
                    <br/>
                    <br/>
                    <button className='login-button'> 
                      Login
                    </button>
                  </form>
                  <div className='center-line'> 
                  </div>
                  <div className='browse-option'> 
                  <img className='search-img' src={require('https://res.cloudinary.com/sds-images/image/upload/v1542949699/search_zzt1ve.png')} />
                    <button className='search-button'> 
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
      );
    }
  }



export default App;
