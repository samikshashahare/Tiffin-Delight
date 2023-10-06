import './ProfileCard.css'
import { useState, useRef } from 'react'

export default function ProfileCard({ name, no, address, mail }) {

    const inputRef = useRef("");
    const [image , setImage] = useState("")

    const handelImageClick = () => {
        inputRef.current.click();
    }
    const handelImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file)
        setImage(URL.createObjectURL(file))
    }


    // const existingArray = JSON.parse(localStorage.getItem('dataArray')|| "");
    // // const imageUrlToAdd = 'https://example.com/image.jpg'; // Replace with your image URL
    // existingArray.push(image);
    // localStorage.setItem('imageUrls', JSON.stringify(existingArray));
    // console.log('Image URL added to local storage:', image);
    return (
        <>

            <div className='col card-container '>
                <div className="  profile-card">

                    <div className='profile-img-div '>
                        <div onClick={handelImageClick}>
                            <input type="file"
                                ref={inputRef}
                                style={{ display: "none" }}
                                onChange={handelImageChange}
                            />
                            {
                                image ? 
                                ( <img src={image}
                                    alt='profile-image'
                                    className='profile-img'
                                />)
                                :
                                ( <img src={require('./profile-logo.png')}
                                    alt='profile-image'
                                    className='profile-img'
                                />)
                            }

                           
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
                            <span > {address}</span>
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
    )
}