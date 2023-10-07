import './ProfileCard.css';
import { useState, useRef } from 'react';

export default function ProfileCard({ name, no, address, mail }) {
  const inputRef = useRef(null);
  const [image, setImage] = useState('');
  const [storedImage, setStoredImage] = useState(localStorage.getItem('image') || '');

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    setStoredImage(imageUrl);
    localStorage.setItem('image', imageUrl);
  };

  return (
    <>
      <div className='col card-container '>
        <div className='profile-card'>
          <div className='profile-img-div'>
            <div onClick={handleImageClick}>
              <input
                type='file'
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />

              {storedImage ? (
                storedImage === "" ? (
                  <img src={require('./profile-logo.png')} alt='profile' className='profile-img' />
                ) : (
                  <img src={storedImage} alt='profile' className='profile-img' />
                )
              ) : (
                <img src={require('./profile-logo.png')} alt='profile' className='profile-img' />
              )}

              {/* {
                if(storedImage){
                  if(storedImage == ""){
                    <img src={require('./profile-logo.png')} alt='profile' className='profile-img' />
                  }
                  else{
                  <img src={storedImage} alt='profile' className='profile-img' />
                  }
                } 
                else{
                  <img src={require('./profile-logo.png')} alt='profile' className='profile-img' />
                } 
              } */}
              {/* {storedImage ? (
                <img src={storedImage} alt='profile' className='profile-img' />
              ) : (
                <img src={require('./profile-logo.png')} alt='profile' className='profile-img' />
              )} */}
            </div>
            <p className='user-name'>{name}</p>
          </div>
          <div className='profile-info-div'>
            <div className='profile-info'>
              <span className='icon'>📞</span>
              <span>{no}</span>
            </div>
            <br />
            <div className='profile-info'>
              <span className='icon'>🚩</span>
              <span> {address}</span>
            </div>
            <br />
            <div className='profile-info'>
              <span className='icon'>✉</span>
              <span> {mail} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
