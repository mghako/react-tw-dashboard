import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Sidebar from '@/Components/Sidebar'
import StickyNavbar from '@/Components/MegaNavBar';

const Authenticated = ({ user, header, children }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
        <StickyNavbar inner={children}/>
            {/* <div className='flex justify-start'>
                <Sidebar />
                <div className="min-h-screen">
                    <div className="container w-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow mt-2">
                        <main>
                            {children}
                        </main>
                    </div>
                </div>
                
            </div> */}
        </>
    );
}

export default Authenticated;
