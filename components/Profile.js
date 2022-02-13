import Image from 'next/image';

const Profile = () => (
    <>
        <div className='profile-box'>
            <div className='container'>
                <img src='/portrait-picture.png'></img>
                <h1>Santiago Tovar</h1>
                <p>Full-Stack Web Developer</p>
            </div>
        </div>
    </>  
);

export default Profile;