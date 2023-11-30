import { ReactElement } from "react"

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface botaoProps{
    children: ReactElement | string
}

export default function Botao( {children}:botaoProps){
    return (
        <a href="https://wa.me/554792034473" target='_blank' className="w-full md:max-w-[22.8rem]">
            <button className="w-full  py-5 rounded font-bold text-white text-[22px] bg-[#169c49] shadow-[0px_0px_20px_#169c49] hover:bg-yellow-500 hover:shadow-[0px_0px_20px_#eab308] transition-all duration-200">
                <WhatsAppIcon className='mr-5 fill-white w-[40px] h-[40px] animate-bounce'/> 
                {children}
            </button>
        </a>
    )
}