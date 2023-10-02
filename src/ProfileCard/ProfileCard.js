import location from "./location.png"
import phone from "./phone.png"
import './ProfileCard.css'
export default function ProfileCard({ img, no, add, }) {
    return (
        <>

            <div className='col card-container '>
                <div className=" card profile-card">
                    <div className='profile-img-div '>
                        <img src={img} alt='profile-image' className='profile-img' />
                        <p>Name</p>
                    </div>
                    <div className='profile-info-div'>
                        <div className='profile-info'>
                            <img src={phone} alt="icon" className='icon' />
                            <span>Number {no}</span>
                        </div>
                        <br />
                        <div className='profile-info'>
                            <img src={location} alt="icon" className='icon' />
                            <span>Address {add}</span>
                        </div>
                        <br />
                        <div className='profile-info'>
                            <img src={phone} alt="icon" className='icon' />
                            <span>Order</span>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}