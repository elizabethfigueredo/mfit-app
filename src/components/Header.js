import Logo from '../ui/assets/logo-dark-blue.png';

function formatName(user){
    return user.firtsName + ' ' + user.lastName;
}
const user = {
    firtsName:'Elizabeth',
    lastName: 'Figueredo'
};

function Header(){
    return(
        <header className="flex flex-row justify-between">
            <p>Olá, {formatName(user)}!</p>
            <img className="size-6 text-blue-dark" src={Logo} alt="Header notification"/>
        </header>
    );
};

export default Header;