import Trending from './assets/icons/trending.svg';
import New_Relese from './assets/icons/newRelease.svg';
import Comming_soon from './assets/icons/commingSoon.svg';
import Favourite from './assets/icons/favourite.svg';
import Watch_Later from './assets/icons/watchLater.svg';

function Sidebar() {
    return (
        <>
            <aside>
                <ul className="space-y-2">
                    <li>
                        <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                            <img src={Trending} width="24" height="24" alt="" />
                            <span>Trending</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={New_Relese} width="24" height="24" alt="" />
                            <span>New Releases</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={Comming_soon} width="24" height="24" alt="" />
                            <span>Coming Soon</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={Favourite} width="24" height="24" alt="" />
                            <span>Favourites</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={Watch_Later} width="24" height="24" alt="" />
                            <span>Watch Later</span>
                        </a>
                    </li>
                </ul>
            </aside>

        </>
    )
}

export default Sidebar;
