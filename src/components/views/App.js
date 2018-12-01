import React,{ Component,Fragment }                from "react";
import { Header,Form,Label, Modal,Icon ,Dimmer,Search,Grid,Divider,Button, Loader, Image, Segment,Input } from 'semantic-ui-react';
import Dropzone from 'react-dropzone'
import 'styles/app.scss';
import 'styles/mainIphone.scss'


class App extends Component {
  constructor(props) {
    super(props);
    this.imageContainer = React.createRef();
    this.sampleUserImg ='https://react.semantic-ui.com/images/avatar/large/rachel.png';
    this.userIcon = 'https://res.cloudinary.com/sds-images/image/upload/v1542955431/user_wggsf3.png';
    this.searchIcon = 'https://res.cloudinary.com/sds-images/image/upload/v1542949699/search_zzt1ve.png';
    this.state = {
      loginbtn:false,
      signupModal:false,
      signUpForm:{},
      imgSizeErr:'',
      userselectedImg:'',
      imgUploadError:'',
      dropAnImageText:'Drop An Image'
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

  modalClose = () => {
    this.setState({signupModal:false})
  }

  updateForm = (e) => {
    switch(e.target.id) {
      case 'firstName':
        this.setState({signUpForm:{...this.state.signUpForm, firstName:e.target.value}})
          break;
      case 'lastName':
      this.setState({signUpForm:{...this.state.signUpForm, lastName:e.target.value}})
          break;
      case 'email':
      this.setState({signUpForm:{...this.state.signUpForm, email:e.target.value}})
          break;
      case 'password':
      this.setState({signUpForm:{...this.state.signUpForm, password:e.target.value}})
          break;
      default:
          null
    }
  }

  createBase64 = (files, cb) => {
    try {
      const reader = new FileReader();
      const blob = files[0];
      reader.onload = () => {
          const base64data = reader.result;
          cb(base64data, blob.name);
      };
      if(blob){
        reader.readAsDataURL(blob);
      }else{
        throw({error:'Image upload no blob'}) 
      }            
    } catch (e) {
      this.setState({ 
        imgSizeErr: 'Images only',
        imgUploadError: e,
        dropAnImageText:' Error ! Try Another Image'
      }); 
      setTimeout(() => {
        this.setState({ 
          dropAnImageText: 'Drop An Image',
          imgSizeErr: '' 
        });
      }, 3000); 
    }
  }

      
  signUpModal = () => {
    return (
      <Modal dimmer={'blurring'} open={this.state.signupModal} onClose={this.modalClose}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size='medium'
            src={this.state.userselectedImg ? this.state.userselectedImg : this.sampleUserImg}
          />
          <Dropzone
              className='dropzone'
              multiple={false}
              maxSize={2000000}
              accept="image/*"
              onDrop={files => this.createBase64(files, (data, name) => {
                  if (data) {
                      this.setState({userselectedImg:data})
                  }
              })}
            >
              <p className='drop-an-image'> {this.state.dropAnImageText} </p>
          </Dropzone>
          <Modal.Description className='signup-form-description'>
            
            <Form>
              <Form.Field>
                <input id='firstName' type='text' placeholder='First name' onChange={(e) => this.updateForm(e)} />
              </Form.Field>
              <Divider />
              <Form.Field>
                <input id='lastName' type='text' placeholder='Last Name' onChange={(e) => this.updateForm(e)}/>
              </Form.Field>
              <Divider />
          
              <Form.Field inline>
                <input id='email' type='text' placeholder='Email'onChange={(e) => this.updateForm(e)} />
              </Form.Field>
              <Divider />
          
              <Form.Field inline>
                <input id='password' type='password' placeholder='Password' onChange={(e) => this.updateForm(e)} />
              </Form.Field>
          </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={this.modalClose}>
            Cancle
          </Button>
          <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content="Yep, that's me"
            onClick={this.modalClose}
          />
        </Modal.Actions>
      </Modal>
    )
  }
  

  render() {
    const { loginbtn } = this.state
    return (
        <Fragment>
          <div ref={this.imageContainer} className='image-container'>
            <div className='sign-up-container'>
              <button onClick={()=> this.setState({signupModal:!this.state.signUpModal})} className='signup-button'> 
                <Icon disabled name='add user' />
              </button>
            </div>
            {this.signUpModal()}
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
                    autoComplete="username"
                    /> 
                  </label>
                  <br/>
                  <label className='labels'>
                    <br/>
                    <Input 
                    type='password'
                    placeholder='Password'
                    className='form-input'
                    autoComplete="current-password"
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