import {useNavigate} from 'react-router-dom';
import heroCoverImage from '../ui/assets/model-hero.jpg';
import TreinoDia from './TreinoDia';

function Hero(){
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Imagem Clicada");
    navigate('/workout');
  };

  return (
    <div className="relative w-full h-64">
      <img src={heroCoverImage} 
      alt="Descrição da imagem" 
      className="mt-6 w-full h-full rounded-xl shadow-xl object-cover brightness-110" 
      onClick={handleClick}
      />
      <div className="">
        <TreinoDia/>
      </div>
    </div>
  )
}

export default Hero;