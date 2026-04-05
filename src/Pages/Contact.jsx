import { faGithub, faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFingerprint, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    const email = 'angelbertreyes28@gmail.com';

    const socials = [
        { icon: faLinkedin, link: 'https://www.linkedin.com/in/angel-reyes-93a7a7346/', color: 'hover:text-white' },
        { icon: faGithub, link: 'https://github.com/kkumber', color: 'hover:text-white' },
        { icon: faXTwitter, link: 'https://x.com/Tweightfor28', color: 'hover:text-white' },
        { icon: faFacebook, link: 'https://web.facebook.com/angel.reyes.111084', color: 'hover:text-white' },
        { icon: faInstagram, link: 'https://www.instagram.com/kukumvber/', color: 'hover:text-white' },
    ];

    return (
        <div className="min-h-[85vh] flex items-center justify-center p-4 md:p-12 overflow-hidden relative font-sans pb-24 md:pb-12">
            
            {/* --- THE CARD CONTAINER --- */}
            <div className="relative w-full max-w-[750px] md:aspect-[1.58/1] group perspective-2000 animate-fadeUp z-10">
                
                {/* Outer Glow */}
                <div className="absolute -inset-2 bg-brand-orange/10 rounded-[2rem] md:rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* The Card Body */}
                <div className="relative w-full h-full glass-card rounded-[2rem] md:rounded-[2.5rem] overflow-hidden transition-all duration-700 transform-gpu md:group-hover:rotate-x-6 md:group-hover:rotate-y-[-6deg] md:group-hover:scale-[1.03] border-white/10">
                    
                    {/* Reflective Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.02] opacity-100"></div>
                    
                    {/* Card Grid Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff10_1.5px,transparent_1.5px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>

                    <div className="relative h-full p-8 md:p-16 flex flex-col justify-between gap-6 md:gap-0">
                        
                        {/* TOP BAR: WiFi & Chip */}
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faWifi} className="text-zinc-400 text-xl md:text-2xl rotate-90" />
                                {/* Desktop only: Name & Title */}
                                <div className="hidden md:block space-y-1">
                                    <h2 className="text-white font-bold text-3xl md:text-5xl tracking-tight leading-none">Angel Reyes</h2>
                                    <p className="font-mono text-[10px] md:text-xs text-brand-orange tracking-[0.4em] uppercase italic">Full-Stack Developer</p>
                                </div>
                            </div>

                            <div className="w-12 h-10 md:w-20 md:h-16 bg-zinc-900 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                                <div className="grid grid-cols-2 grid-rows-3 w-full h-full opacity-40">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="border border-white/20"></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* MOBILE NAME & TITLE */}
                        <div className="md:hidden space-y-1">
                            <h2 className="text-white font-bold text-3xl tracking-tight leading-none">Angel Reyes</h2>
                            <p className="font-mono text-[10px] text-brand-orange tracking-[0.4em] uppercase italic">Full-Stack Developer</p>
                        </div>

                        {/* EMAIL SECTION */}
                        <div className="space-y-4 py-2 md:py-0">
                            <p className="font-mono text-zinc-500 text-[8px] md:text-xs uppercase tracking-[0.5em] font-black">Professional Identity</p>
                            <h3 className="font-mono text-lg md:text-4xl text-white tracking-[0.12em] break-all leading-snug">
                                {email.split('@')[0]}<span className="text-brand-orange">@</span>{email.split('@')[1]}
                            </h3>
                        </div>

                        {/* SOCIALS & FINGERPRINT */}
                        <div className="flex justify-between items-end gap-4">
                            <div className="flex flex-wrap gap-6 md:gap-10">
                                {socials.map((social, idx) => (
                                    <a 
                                        key={idx}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-zinc-400 text-2xl md:text-4xl transition-all transform hover:-translate-y-2 hover:text-brand-orange`}
                                    >
                                        <FontAwesomeIcon icon={social.icon} />
                                    </a>
                                ))}
                            </div>

                            <div className="flex flex-col items-end gap-2 shrink-0">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-brand-orange transition-colors">
                                    <FontAwesomeIcon icon={faFingerprint} className="text-3xl md:text-5xl opacity-60" />
                                </div>
                                <p className="font-mono text-[6px] md:text-[8px] text-zinc-500 tracking-[0.2em] uppercase font-black text-right uppercase">Access Authorized</p>
                            </div>
                        </div>
                    </div>

                    {/* Glossy Reflective Shine */}
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent rotate-45 pointer-events-none group-hover:translate-x-12 group-hover:translate-y-12 transition-transform duration-1000"></div>
                </div>

                {/* Card Shadow */}
                <div className="absolute -bottom-8 md:-bottom-14 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-brand-orange/5 blur-3xl rounded-full group-hover:opacity-100 transition-opacity"></div>
            </div>
        </div>
    );
}
 
export default Contact;
