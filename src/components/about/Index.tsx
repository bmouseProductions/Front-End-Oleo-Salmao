
import AcordionComponent from '../accordion/Index'
import BasicTabs from '../tabs/Index'

import ilustracao from '../../assets/ilustrapatense.webp'
import patense from '../../assets/patense.png'
import fileIcon from '../../assets/file.svg';

export default function About(){
    return(
        <section className='w-full py-10 bg-gradient-to-b from-[#16a34a] via-slate-800 via-0% to-slate-900 to-100%' >
            <div className='w-ful p-5 flex flex-col items-center lg:flex-row lg:justify-center gap-10'data-aos="fade-up" data-aos-duration="1500">
                <img src={ilustracao} alt="" className='md:max-w-md rounded' />

                <div className='flex flex-col xl:flex-row gap-5 xl:hidden'>
                    <AcordionComponent 
                        id="accordion1" 
                        title="Nossa História"
                        image= {fileIcon}
                        text="Fundada no ano de 1970 por Antônio Gonçalves, a empresa iniciou os seus trabalhos em Patos de Minas ainda de maneira arcaica. Um simples açougueiro da cidade percebeu que existia um mercado muito diferente que agregaria muito para o planeta no que tange sustentabilidade e valores. Nosso projeto é coletar subprodutos animais que antes eram destinados de forma incorreta ao meio ambiente e agregar valor a eles, produzindo proteínas, gorduras e novas matérias-primas para diversos setores da economia nacional."
                        style="w-[100%] md:w-[550px] lg:w-[500px] rounded" //syles gerais
                        styleImage='w-7 h-7 mr-3'
                    />

                    <AcordionComponent 
                        id="accordion2" 
                        title="Grupo Patense"
                        image= {patense}
                        text="Hoje o Grupo conta com as empresas Patense, Farol, Pets Mellon, Originalis e BioSea, que agregam ao grupo tanto valor quanto agregam à nossa biodiversidade. O Grupo Patense contempla mais de 52 anos de história no mercado de rendering, a dedicação e a qualidade entregues aos seus parceiros ao longo desse tempo conferem credibilidade e confiança para todo o grupo. Suas empresas estão localizadas por todo o Brasil, do nordeste à região sul, garantindo, assim, uma grande capacidade de produção, mantendo sempre a qualidade e excelência para atender todos os clientes - nacionais e internacionais."
                        style="w-[100%] md:w-[550px] lg:w-[500px] rounded" //syles gerais
                        styleImage='w-6 h-6 mr-3'
                    />
                </div>

                <div className='hidden xl:block'>
                    <BasicTabs />
                </div>
                
            </div>
            
        </section>
    )
}