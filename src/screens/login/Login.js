import React, { useState } from 'react'
import Modal from '../../common/Modal/Modal'
import './Login.css'
import TabComp from '../../common/TabComp/TabComp'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const Login = ({ isLogin = false, setIsLoginOpen }) => {
  return (
    <div>
      {isLogin && <Modal isOpen={isLogin} onRequestClose={setIsLoginOpen} customStyles={{
        width: '50%',
        // height: '50%'
      }}>
        {/* <h2>Hello</h2> */}
        {/* <button onClick={onRequestClose}>Close</button> */}
        {/* <div>I am a modal</div> */}
        {/* <form>
          <input />
          <button>Tab navigation</button>
          <button>Stays</button>
          <button>Inside</button>
          <button>The modal</button>
        </form> */}
        <div style={{}}>
          <header className='login-header'>
            <div style={{ fontSize: '18px', color: 'white' }}>
              Authentication
            </div>
          </header>
          <body>
            <div style={{padding: '10px'}}>
            <TabComp tabsComp={[
              { value: 0, title: 'Login', render: () => <div><LoginForm/></div> },
              { value: 1, title: 'REGISTER', render: () => <div><RegistrationForm closeRegistrationForm={() => setIsLoginOpen(false)}/></div> }
            ]} />
            </div>
          </body>
        </div>
      </Modal>}
    </div>
  )
}

export default Login
