import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const ProfileContainer = () => {
    return ( 
        <div className="bg-gradient-to-bl from-ContainerLinearDark to-backgroundLinearLightGray shadow-2xl
        backdrop-blur-2xl border border-white/10 p-8 text-white rounded-3xl w-full h-full flex flex-col justify-center items-center text-center transition-all duration-500 hover:border-white/20">
            <div className="mb-6">
                <span className='px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide bg-gradient-to-r from-TextLinearOrange to-TextLinearPurple bg-clip-text text-transparent uppercase'>
                    Undergraduate IT Student
                </span>
            </div>
            <div className="w-40 h-40 mb-6 p-2 bg-gradient-to-r from-TextLinearOrange to-TextLinearPurple rounded-full shadow-lg">
                <img src="/images/formal_picture.webp" alt="Profile Picture" className="rounded-full w-full h-full object-cover border-4 border-[#1C1C1C]" />
            </div>
            <div className="mb-8">
                <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-2'>
                    <span className='bg-gradient-to-r from-TextLinearOrange to-TextLinearPurple bg-clip-text text-transparent'>Angel Reyes</span>
                </h2>
                <p className='text-gray-400 text-lg'>Full-Stack Software Developer</p>
            </div>
            <div className="flex gap-6 items-center">
                <a href="https://github.com/kkumber" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faGithub} size='2xl' />
                </a>
                <a href="https://web.facebook.com/angel.reyes.111084" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faFacebook} size='2xl' />
                </a>
                <a href="https://x.com/Tweightfor28" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faXTwitter} size='2xl' />
                </a>
                <a href="https://www.instagram.com/kukumvber/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faInstagram} size='2xl' />
                </a>       
            </div>
        </div>
     );
}
 
export default ProfileContainer; 
