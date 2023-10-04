import './ProfileCard.css'

export default function ProfileCard({ name,img, no, address, mail }) {
 
    return (
        <>

            <div className='col card-container '>
                <div className="  profile-card">
                    
                    <div className='profile-img-div '>

                        <img src={img} alt='profile-image' className='profile-img' />
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