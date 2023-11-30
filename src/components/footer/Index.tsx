
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Linkedin from '@mui/icons-material/Linkedin';

export default function Footer() {
    return(
        <footer className="w-full py-5 flex flex-col items-center gap-3 lg:flex-row justify-center lg:gap-20 text-white text-sm bg-slate-900">
            <div className='flex gap-2 justify-center items-center'>
            
                <a href="https://www.facebook.com/empresapatense" target='_blank'> <FacebookIcon className='fill-white'/> </a>
                <a href="https://www.instagram.com/patense/" target='_blank'> <InstagramIcon className='fill-white'/> </a>
                <a href="https://www.youtube.com/user/empresapatense" target='_blank'> <YouTubeIcon className='fill-white'/> </a>
                <a href="https://www.linkedin.com/company/grupopatense/" target='_blank'> <Linkedin className='fill-white'/> </a>
            
            </div>

            <p>Copyright Ⓒ 2023 Patense.</p>

            <a  className='' href="https://www.bmouseproductions.com/" target="_blank" rel="noopener noreferrer"> Desenvolvido por <strong>BMOUSE PPRODUCTIONS</strong> </a>
        </footer>
    )
}