import { faGithub, faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import ContactContainer from '../Components/ContactContainer';

const Contact = () => {
    const contacts = [
        {icon: faEnvelope, text: 'angelbertreyes28@gmail.com', iconSize: 'text-4xl'},
        {icon: faFacebook, text: 'Facebook', iconSize: 'text-4xl', link: 'https://web.facebook.com/angel.reyes.111084'},
        {icon: faXTwitter, text: 'X', iconSize: 'text-4xl', link: 'https://x.com/Tweightfor28'},
        {icon: faInstagram, text: 'Instagram', iconSize: 'text-4xl', link: 'https://www.instagram.com/kukumvber/'},
        {icon: faLinkedin, text: 'LinkedIn Profile', iconSize: 'text-7xl', link: 'https://www.linkedin.com/in/angel-reyes-93a7a7346/'},
        {icon: faGithub, text: 'Github Profile', iconSize: 'text-7xl', link: 'https://github.com/kkumber'},
    ]


    return (
        
<div className="grid mt-20 grid-cols-2 grid-rows-4 gap-4 text-white">
    <div className='animate-fadeLeft'><ContactContainer icon={contacts[0].icon} iconSize={contacts[0].iconSize} text={contacts[0].text}/></div>
    <div className="col-start-1 row-start-2 animate-fadeUp"><ContactContainer icon={contacts[1].icon} iconSize={contacts[1].iconSize} text={contacts[1].text} link={contacts[1].link}/></div>
    <div className="col-start-1 row-start-3 animate-fadeDown"><ContactContainer icon={contacts[2].icon} iconSize={contacts[2].iconSize} text={contacts[2].text} link={contacts[2].link}/></div>
    <div className="col-start-1 row-start-4 animate-fadeRight"><ContactContainer icon={contacts[3].icon} iconSize={contacts[3].iconSize} text={contacts[3].text} link={contacts[3].link}/></div>
    <div className="row-span-2 col-start-2 row-start-1 animate-fadeLeft"><ContactContainer icon={contacts[4].icon} iconSize={contacts[4].iconSize} text={contacts[4].text} textDesign={'text-3xl'} link={contacts[4].link}/></div>
    <div className="row-span-2 col-start-2 row-start-3 animate-fadeRight"><ContactContainer icon={contacts[5].icon} iconSize={contacts[5].iconSize} text={contacts[5].text} textDesign={'text-3xl'} subText={'Find more of my repositories'} link={contacts[5].link}/></div>
</div>

     );
}
 
export default Contact;