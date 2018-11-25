import React,{ Component,Fragment }                from "react";
import 'styles/app.scss';
import 'styles/mainIphone.scss'
import { Header, Icon ,Dimmer,Search,Grid,Divider,Button, Loader, Image, Segment,Input } from 'semantic-ui-react'


class App extends Component {
  constructor(props) {
    super(props);
    this.imageContainer = React.createRef();
    this.userIcon = 'https://res.cloudinary.com/sds-images/image/upload/v1542955431/user_wggsf3.png';
    this.searchIcon = 'https://res.cloudinary.com/sds-images/image/upload/v1542949699/search_zzt1ve.png';
    this.state = {
      loginbtn:false  
    }
  }

  componentDidMount(){
    this.imageContainer.current.addEventListener('mousedown',this.loginClick,false)
    
  }

  loginClick = (e) => {
    const event = e || null
    if(event){
      const container = event.target.className
      if(container === 'browse-option animated fadeIn' || container === 'user-img'  ) {
        this.setState({loginbtn:true})
      }
      else if(container === 'choice-container' || container === 'logo-container animated fadeIn') {
        this.setState({loginbtn:false})
      } 
    }
  }
   
  

  render() {
    const { loginbtn } = this.state
    return (
        <Fragment>
          <div ref={this.imageContainer} className='image-container'>
            <div className='logo-container animated fadeIn'> 
              <h1 className='logo-b'> B </h1>
              <p className='bunzee-tagline'> Delivering high quality goods</p>
              <div className='choice-container'>
              <div className={ loginbtn ? 'login-hide' :'browse-option animated fadeIn'} onClick={()=> this.loginClick()}> 
                <img className='user-img' src={this.userIcon} />
                <button className='user-button'> 
                  Login
                </button>
              </div>
                 <form className={ loginbtn ? 'login-form animated  fadeIn' : 'login-hide'}>
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
                  <button className='login-button'> 
                    Login
                  </button>
                </form> 
                <div className='center-line'> 
                </div>
                <div className='browse-option'> 
                <img className='search-img' src={this.searchIcon} />
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