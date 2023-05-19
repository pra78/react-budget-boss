import logo from 'images/logo.png'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <div>
{/* <img src=''/> */}
                <p>UserName</p>
                <button type='button'>Exit</button>
            </div>
        </header>
    );
};

export default Header;