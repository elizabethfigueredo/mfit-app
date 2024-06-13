import CoverUm from '../../ui/assets/atletaDois.jpg';
import CoverDois from '../../ui/assets/atletaCinco.jpg'
import CoverTres from '../../ui/assets/atletaUm.jpg'
import {CgGym} from "react-icons/cg";
import {GiWeightLiftingUp} from "react-icons/gi";

function Program(){
    return(
        <div className="flex flex-col mt-4 p-6"> 
            <p className="mt-6 font-bold">Movimentos do treino</p>

            <div className="items-center mt-3 flex flex-row shadow-md bg-white rounded-xl">
                <img className="rounded-xl h-24 shadow-md" src={CoverUm} alt="CoverProgram"/>
                <div className="flex flex-col space-y-2 ml-2">
                    <p className="text-sm font-medium text-blue">Nome do Exercício</p>
                    <div className="text-sm text-blue-dark flex flex-row space-x-2">
                        <CgGym/>
                        <p>Repetições</p>
                        <GiWeightLiftingUp/>
                        <p>Carga</p>
                    </div>
                    <p className='text-sm text-blue-dark'>Nível de dificuldade</p>
                </div>
            </div> 
            <div className="items-center mt-3 flex flex-row shadow-md bg-white rounded-xl">
                <img className="rounded-xl h-24 shadow-md" src={CoverDois} alt="CoverProgram"/>
                <div className="flex flex-col space-y-2 ml-2">
                    <p className="text-sm font-medium text-blue">Nome do Exercício</p>
                    <div className="text-sm text-blue-dark flex flex-row space-x-2">
                        <CgGym/>
                        <p>Repetições</p>
                        <GiWeightLiftingUp/>
                        <p>Carga</p>
                    </div>
                    <p className='text-sm text-blue-dark'>Nível de dificuldade</p>
                </div>
            </div> 
            <div className="items-center mt-3 flex flex-row shadow-md bg-white rounded-xl">
                <img className="rounded-xl h-24 shadow-md" src={CoverTres} alt="CoverProgram"/>
                <div className="flex flex-col space-y-2 ml-2">
                    <p className="text-sm font-medium text-blue">Nome do Exercício</p>
                    <div className="text-sm text-blue-dark flex flex-row space-x-2">
                        <CgGym/>
                        <p>Repetições</p>
                        <GiWeightLiftingUp/>
                        <p>Carga</p>
                    </div>
                    <p className='text-sm text-blue-dark'>Nível de dificuldade</p>
                </div>
            </div> 
        </div>
    );
}

export default Program;