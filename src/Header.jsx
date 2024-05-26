import { useContext } from 'react';
import Logo from './assets/logo.png';
import Ring from './assets/ring.svg';
import Dark_Mode from './assets/icons/moon.svg';
import Shopping_cart from './assets/shopping-cart.svg';
import { ProductContext } from './Context/ProductContext';
import CartDetail from './Product/CartDetail';


function Header() {
    const { showCart, handelShowCart, cartData } = useContext(ProductContext);

    return (
        <>
            <header>
                {showCart && <CartDetail />}
                <nav className="container flex items-center justify-between space-x-10 py-6">
                    <a href="index.html">
                        <img src={Logo} width="112" height="26" alt="" />
                    </a>

                    <ul className="flex items-center space-x-5">
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <img src={Ring} width="24" height="24" alt="" />
                            </a>
                        </li>
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                                <img src={Dark_Mode} width="24" height="24" alt="" />
                            </a>
                        </li>
                        <li>
                            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" onClick={handelShowCart}>
                                <img src={Shopping_cart} width="24" height="24" alt="" />
                                {cartData?.length > 0 && (
                                    <span className='rounded-full absolute top-[-1rem] left-7 bg-[#12CF6F] text-white text-center p-1 w-7 h-7'>
                                        {cartData?.length}
                                    </span>
                                )}
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;
