
import farinha from '../../assets/oleoSalmao.webp'
import Botao from '../button/Index'

export default function Section1() {
    return(
        <section className="w-full min-h-screen pt-[0px] md:px-[5%] bg-gradient-to-b lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#9c6121] via-[#431716] via-35% md:via-25% to-slate-900 md:to-70%">
            <div className='flex flex-col lg:flex-row md:justify-center md:items-center'>
                <img src={farinha} alt="" className='w-full  md:max-w-lg xl:max-w-xl ' data-aos="fade-right" data-aos-duration="1500"/>
                <div className='w-full px-5 md:px-0 flex flex-col items-center md:w-[60%] max-w-[600px] md:justify-center' data-aos="fade-down" data-aos-duration="1500">
                    <div className='w-full flex flex-col'>
                        <h1 className='mb-5 text-[60px] md:text-[115px] leading-[75px] md:leading-[100px] font-bold text-white text-center lg:text-start'>
                            Óleo de Salmão
                        </h1>
                        
                    </div>
                    <h2 className='mt-4 font-semibold text-white text-center md:text-start mb-10 md:text-[20px]'>O Óleo de Salmão é utilizado como ingrediente na fabricação de rações balanceadas de animais não ruminantes, sendo incluída em dietas de aves, suínos, peixes e rações pet.</h2>
                    <Botao>
                        Chamar no WhatsApp
                    </Botao>
                </div>
            </div>
        </section>
    )
}