'use client'; // Ensure this file runs on the client side

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import triangle icons

const Sidebar = () => {
  const pathname = usePathname();
  
  // State to manage which main menu is open (null means no menu is open)
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // Toggle function for each menu
  const toggleMenu = (menu: string) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  return (
    <div className="flex flex-col h-screen text-white w-64" style={{ backgroundColor: '#611684' }}>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          {/* Dashboard Section */}
          <li>
            <button
              className={`block p-2 rounded hover:bg-white-600 w-full text-left ${
                pathname === '/dashboard' || openMenu === 'dashboard' ? 'bg-white-600' : ''
              }`}
              onClick={() => toggleMenu('dashboard')} // Pass the menu name for toggling
            >
              <div className="flex items-center">
                Dashboard
                <div className="ml-10"> {/* Adds space between text and icon */}
                  {openMenu === 'dashboard' ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
              </div>
            </button>
            {openMenu === 'dashboard' && (
              <ul className="pl-6 space-y-2">
                <li>
                  <Link
                    href="/dashboard/overview"
                    className={`block p-2 rounded hover:bg-white-600 ${
                      pathname === '/dashboard/overview' ? 'bg-white-600' : ''
                    }`}
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/statistics"
                    className={`block p-2 rounded hover:bg-white-600 ${
                      pathname === '/dashboard/statistics' ? 'bg-white-600' : ''
                    }`}
                  >
                    Statistics
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* User Management Section */}
          <li>
            <button
              className={`block p-2 rounded hover:bg-white-600 w-full text-left ${
                pathname === '/user-management' || openMenu === 'userManagement' ? 'bg-white-600' : ''
              }`}
              onClick={() => toggleMenu('userManagement')} // Pass the menu name for toggling
            >
              <div className="flex items-center">
                User Management
                <div className="ml-10"> {/* Adds space between text and icon */}
                  {openMenu === 'userManagement' ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
              </div>
            </button>
            {openMenu === 'userManagement' && (
              <ul className="pl-6 space-y-2">
                <li>
                  <Link
                    href="/user-management/view"
                    className={`block p-2 rounded hover:bg-white-600 ${
                      pathname === '/user-management/view' ? 'bg-white-600' : ''
                    }`}
                  >
                    View Users
                  </Link>
                </li>
                <li>
                  <Link
                    href="/user-management/add"
                    className={`block p-2 rounded hover:bg-white-600 ${
                      pathname === '/user-management/add' ? 'bg-white-600' : ''
                    }`}
                  >
                    Add User
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Leave Management Section */}
          <li>
            <button
              className={`block p-2 rounded hover:bg-white-600 w-full text-left ${
                pathname === '/leave-management' || openMenu === 'leaveManagement' ? 'bg-white-600' : ''
              }`}
              onClick={() => toggleMenu('leaveManagement')} // Pass the menu name for toggling
            >
              <div className="flex items-center">
                Leave Management
                <div className="ml-10"> {/* Adds space between text and icon */}
                  {openMenu === 'leaveManagement' ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
              </div>
            </button>
            {openMenu === 'leaveManagement' && (
              <ul className="pl-6 space-y-2">
                <li>
                  <Link
                    href="/leave-management/requests"
                    className={`block p-2 rounded hover bg-white-600 ${
                      pathname === '/leave-management/requests' ? 'bg-white-600' : ''
                    }`}
                  >
                    Leave Requests
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leave-management/approvals"
                    className={`block p-2 rounded hover:bg-white-600 ${
                      pathname === '/leave-management/approvals' ? 'bg-white-600' : ''
                    }`}
                  >
                    Leave Approvals
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* KPI Section */}
          <li>
            <button
              className={`block p-2 rounded hover:bg-white-600 w-full text-left ${
                pathname === '/kpi' || openMenu === 'kpi' ? 'bg-white-600' : ''
              }`}
              onClick={() => toggleMenu('kpi')} // Pass the menu name for toggling
            >
              <div className="flex items-center">
                KPI
                <div className="ml-10"> {/* Adds space between text and icon */}
                  {openMenu === 'kpi' ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
              </div>
            </button>
            {openMenu === 'kpi' && (
              <ul className="pl-6 space-y-2">
                <li>
                  <Link
                    href="/kpi/overview"
                    className={`block p-2 rounded hover:bg-white-600 ${
                      pathname === '/kpi/overview' ? 'bg-white-600' : ''
                    }`}
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kpi/targets"
                    className={`block p-2 rounded hover:bg-white-600 ${
                      pathname === '/kpi/targets' ? 'bg-white-600' : ''
                    }`}
                  >
                    Targets
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
