import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const ProfileContainer = () => {
    return ( 
        <div className="bg-gradient-to-bl from-ContainerLinearDark from-30% via-backgroundLinearLightGray shadow-md
        backdrop-blur-2xl border-borderColor p-4 text-white rounded-sm w-full h-full justify-center items-center grid text-center">
            <div className="mb-4 md:m-auto">
                <p className='bg-gradient-to-r from-TextLinearOrange to-TextLinearPurple bg bg-clip-text text-transparent'>Undergraduate Student</p>
            </div>
            <div className="w-32 m-auto mb-4 md:m-auto">
                <img src="/images/formal_picture.jpg" alt="Profile Picture" className="rounded-full" />
            </div>
            <div className="mb-4 md:m-auto">
                <b><span className='text-3xl bg-gradient-to-r from-TextLinearOrange to-TextLinearPurple bg bg-clip-text text-transparent'>Angel Reyes</span></b>
            </div>
            <div className="flex justify-between items-center">
                <a href="https://github.com/kkumber" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2xl' /></a>
                <a href="https://web.facebook.com/angel.reyes.111084" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size='2xl' /></a>
                <a href="https://x.com/Tweightfor28" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} size='2xl' /></a>
                <a href="https://www.instagram.com/kukumvber/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size='2xl' /></a>       
            </div>
        </div>
     );
}
 
export default ProfileContainer; 