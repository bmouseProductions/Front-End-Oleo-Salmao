import AcordionComponent from "../accordion/Index";
import { Formulario } from "../formulario/Index";

import farinha from '../../assets/FarinhaCamarao.webp'
import phone from '../../assets/phone-call.png'
import mail from '../../assets/email.png'
import BasicTable from "../table/Index";


export default function Section2() {
    return (
        <section className="py-10 w-full min-h-[50vh] lg:min-h-screen bg-gradient-to-b from-slate-900 via-[#16a34a] via-80% to-slate-800 flex flex-col  items-center max-w-screen text-white" >
            {/*
            <div className="mb-32 px-5 w-full lg:min-h-[450px] flex justify-center items-center video " data-aos="fade-up" data-aos-duration="1800">
                <iframe className="w-full lg:w-[80%] h-[200px] md:h-[350px] lg:h-[450px] " src="https://www.youtube.com/embed/ZNHFoOvSlNs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>*/}

            

            {/* APLICAÇÃO */}
            <div className="mb-16 px-5 w-full md:w-[50%] flex flex-col items-center " data-aos="fade-up-right" data-aos-duration="1500">
                <h2 className="text-4xl font-bold w-full text-center">Aplicação</h2>
                <p className=" md:text-center mt-5 text-xl ">
                O Óleo de Salmão é utilizado como ingrediente na fabricação de rações balanceadas de animais não ruminantes, sendo incluída em dietas de aves, suínos, peixes e rações pet.
                </p>
            </div>

            {/* COMPOSIÇÃO */}
            <div className="mb-16 px-5 w-full md:w-[90%] lg:w-[70%] xl:max-w-[800px] flex flex-col items-center " >
                <div data-aos="fade-up-left" data-aos-duration="1500">
                    <h2 className="text-4xl font-bold w-full text-center">Indicação</h2>
                    <p className=" md:text-center mt-5 text-xl mb-7">
                    Uso proibido na alimentação de ruminantes.
                    </p>
                </div>
                <div className="w-full"  data-aos="flip-up" data-aos-duration="1500">
                    <BasicTable />
                </div>
            </div>

            {/* ACCORDION */}
            <div className="w-full px-5 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-2 lg:gap-5 mb-14 lg:mb-20 ">

                <div className="w-full  flex flex-col items-center lg:items-end gap-2 lg:gap-3" data-aos="fade-down-right" data-aos-duration="1500">
                    <AcordionComponent 
                        id="accordion1" 
                        title="Composição" 
                        text="Óleo de salmão."
                        style="w-full md:w-[450px] rounded" //syles gerais
                    />

                    <AcordionComponent 
                        id="accordion2" 
                        title="Prazo de Validade" 
                        text="6 meses da data de fabricação."
                        style="w-full md:w-[450px] rounded" //syles gerais
                    />

                    
                </div>

                <div className="w-full  flex flex-col items-center lg:items-start gap-2 lg:gap-3" data-aos="fade-down-left" data-aos-duration="1500">
                    <AcordionComponent 
                        id="accordion4" 
                        title="Modos de conservação" 
                        text="Armazenamento em tanques."
                        style="w-full md:w-[450px] rounded" //syles gerais
                    />
                    
                    <AcordionComponent 
                        id="accordion4" 
                        title="Comercialização" 
                        text="A granel, bombonas de polietileno, octabins."
                        style="w-full md:w-[450px] rounded" //syles gerais
                    />
                </div>
            </div>


            {/* CHAMADA */}
            <div className="mb-10 px-5 w-full md:w-[50%] flex flex-col items-center " data-aos="fade-up" data-aos-duration="1500">
                <h2 className="text-5xl font-bold lg:w-[500px] text-center">Entre em contato</h2>
                <p className=" md:text-center mt-10 text-xl ">
                    Para solicitar um orçamento ou obter mais informações envie uma mensagem através do formulário abaixo.
                </p>
            </div>

            {/* FORM */}
            <div className="lg:mb-20 w-full md:px-5 flex items-center justify-center gap-28" >
                <div data-aos="fade-right" data-aos-duration="1800">
                    <Formulario />
                </div>
                
                <img src={farinha} alt="ilustração de um dalmata" className="w-[400px] h-[253px] hidden xl:block" data-aos="fade-left" data-aos-duration="1500"/>
            </div>


            {/* VENDAS */}
            <div data-aos="zoom-in-up" data-aos-duration="2000">
                <div className="w-full px-4 py-10 lg:p-[50px] flex gap-5 flex-col items-center text-white">
                    <h2 className="w-full lg:w-max font-bold text-3xl lg:text-5xl">
                        <strong>Gostaria de comprar nossos produtos? </strong> 
                    </h2><h3 className="w-full lg:w-max font-bold text-[28px]"> <strong> Contate-nos: </strong></h3>
                    
                    <div className="w-full flex flex-col lg:flex-row lg:gap-10 justify-evenly">
                        <div className="flex lg:items-center lg:justify-center gap-5 ">
                            <img src={phone} alt=""/>
                            <h2 className="font-bold text-2xl lg:text-4xl"> 
                                <a href="tel:+553438181800"> 
                                    +55 (34) 3818-1800 
                                </a>
                            </h2>
                        </div>

                        <div className="flex mt-5 lg:mt-0 lg:items-center lg:justify-end gap-5 ">
                            <img src={mail} alt=""/>
                            <h2 className="font-bold text-2xl lg:text-4xl">
                                <a href="mailto:vendas@patense.com.br">vendas@patense.com.br</a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}