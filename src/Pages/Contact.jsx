import { faGithub, faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Contact = () => {
    const email = 'angelbertreyes28@gmail.com';
    const [copied, setCopied] = useState(false);

    const socials = [
        { icon: faLinkedin, link: 'https://www.linkedin.com/in/angel-reyes-93a7a7346/' },
        { icon: faGithub, link: 'https://github.com/kkumber' },
        { icon: faXTwitter, link: 'https://x.com/Tweightfor28' },
        { icon: faFacebook, link: 'https://web.facebook.com/angel.reyes.111084' },
        { icon: faInstagram, link: 'https://www.instagram.com/kukumvber/' },
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center p-4 sm:p-6 md:p-12 relative font-sans pb-32">
            
            {/* --- PHYSICAL BUSINESS CARD --- */}
            <div className="relative w-full max-w-[550px] group animate-fadeUp z-10 transition-transform duration-500 hover:scale-[1.01]">
                
                {/* Clean, Precise Card Shadow */}
                <div className="absolute inset-0 bg-slate-900/10 rounded-sm translate-x-2 translate-y-2 blur-xl opacity-40"></div>
                
                {/* The Card Body */}
                <div className="relative w-full h-full bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col p-8 sm:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] min-h-[300px] sm:min-h-0">
                    
                    {/* Minimal Branding Accent */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600"></div>

                    {/* IDENTITY: Top Section */}
                    <div className="mb-12 sm:mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-2">
                            Angel Reyes
                        </h2>
                        <p className="text-sm sm:text-base font-medium text-slate-400 uppercase tracking-[0.4em] italic">
                            Full-Stack Developer
                        </p>
                    </div>

                    {/* CONTACT & SOCIALS: Bottom Section */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-10 mt-auto">
                        
                        {/* Email with subtle copy interaction */}
                        <div 
                            onClick={copyToClipboard}
                            className="group/email cursor-pointer min-w-0"
                        >
                            <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Email</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm sm:text-base text-slate-600 font-bold hover:text-indigo-600 transition-colors truncate">
                                    {email}
                                </span>
                                <FontAwesomeIcon 
                                    icon={copied ? faCheck : faCopy} 
                                    className={`text-[10px] ${copied ? 'text-green-500' : 'text-slate-300'} transition-all shrink-0`} 
                                />
                            </div>
                        </div>

                        {/* Social Icons - Clean Row */}
                        <div className="flex gap-5 sm:gap-6 shrink-0">
                            {socials.map((social, idx) => (
                                <a 
                                    key={idx}
                                    href={social.link}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-indigo-600 transition-all transform hover:-translate-y-0.5"
                                >
                                    <FontAwesomeIcon icon={social.icon} className="text-xl sm:text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Subtle Tactile Texture */}
                    <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
        </div>
    );
}

export default Contact;
