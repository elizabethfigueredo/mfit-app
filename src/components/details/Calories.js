function Calories(){
    return(
    <div className="">
        <div className="-mt-[5%] z-40 relative p-3 max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl">
            <div className="flex items-center justify-center gap-4">

                <div className="flex flex-row gap-3 items-center">
                    <span className="inline-flex items-baseline">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" fill="currentColor" class="text-blue size-6">
                        <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <div className="flex flex-col">
                        <span className="text-blue-dark">Burns </span>
                        <span className="text-blue-dark">165 kcal</span>
                    </div>
                </div>
                
                <span className="mx-2 text-blue">•</span>

                <div className="flex flex-row gap-3 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                        fill="currentColor" class="text-blue size-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                        </svg>

                    </span>
                    <div className="flex flex-col">
                        <span className="text-blue-dark">Duration </span>
                        <span className="text-blue-dark">25 mins</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-6"> 
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Powerfull Crusher</h1>
            <p className="mt-2 text-blue-dark">
                Do as many sets as possible within a given amount of time. To avoid injury, 
                make sure you've mastered the exercises first.</p>
        </div>
    </div>
    );
}

export default Calories;