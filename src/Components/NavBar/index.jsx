import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import React, {useContext} from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {

    const {count} = useContext(ShoppingCartContext)

 
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to='/'
                    >
                        Shopi

                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        All

                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        Clothes

                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronic'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        Electronic

                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        Furnitures

                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        Toys

                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={({ isActive}) => isActive ? activeStyle : undefined} 
                    >
                        Others

                    </NavLink>
                </li>

            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    juan@gamil.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        My Orders

                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        My account

                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive}) => isActive ? activeStyle : undefined}
                    >
                        Sign In

                    </NavLink>
                </li>
                <li className='flex items-center ml-2'>
                   <ShoppingCartIcon className='h-6 w-6 text-black-500'/>
                   <div className='ml-1'>
                        {count}
                   </div>
                </li>
            </ul>
        </nav> 
    )
}

export {NavBar}


/*

flex = con solo colocarlo los elemtos se posiciona uno a lado del otro 
z-10 z-index
w-full = width-full todo el tamaño de la pantalla

<nav></nav> = etiqurta con contexto para barra de navegacion
*/