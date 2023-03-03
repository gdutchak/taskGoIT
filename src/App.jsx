import './App.css';
import logo from './images/logo-test.png';
import avatar from './images/avatar.png';
import { useState } from 'react';

function App() {

  const [subscribe, setSubcsribe] = useState(JSON.parse(localStorage.getItem('subcribe')) || false)
  const [followers, setFollowers] = useState(JSON.parse(localStorage.getItem('countFollowers')) || 100501)

  localStorage.setItem('countFollowers', JSON.stringify(followers))
  localStorage.setItem('subcribe', JSON.stringify(subscribe))


  const result = followers.toString().replace('100', '100,')

const addFollower = () => {
  if(subscribe) {
      setFollowers(prev => prev - 1)
      setSubcsribe(false)
      return
  } else {
    setFollowers(prev => prev + 1)
    setSubcsribe(true)
  }
}

  return (
    <section className="section">
      <ul className='section_list'>
        <li className='section_item'>
          <img src={logo} alt="logo" className='section_logo'/>
          <img src={avatar} alt='avatar'className='section_img'/>
          <p className='section_text'> 777 tweets</p>
          <p className='section_text'>{result} Followers</p>
          <button type='button' className={subscribe ? 'section_button--active section_button' : 'section_button'} onClick={addFollower}>{subscribe ? 'Following' : 'Follow'}</button>
        </li>
      </ul>
    </section>
  );
}

export default App;
