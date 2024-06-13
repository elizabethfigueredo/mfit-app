import personalImage from '../../ui/assets/model-hit.jpg'

function Personal (){
    return(
        <div className="flex items-center p-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <img className="size-28 rounded-full" src={personalImage} alt="Trainer" />
            <div className="ml-4">
                <p className="text-sm font-medium text-blue">Tom Cruiser</p>
                <p className="text-sm text-blue-dark">Expert Trainer</p>
            </div>
    </div>
    );
}

export default Personal;