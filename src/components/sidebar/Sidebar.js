'use client';

import { usePathname } from 'next/navigation';
import SidebarItem from './SidebarItem';

export default function Sidebar({ isOpen }) {
  const sidebarItems = [
    {
      icon: 'M9.9175 15.835C8.26363 15.835 6.86407 15.2621 5.71881 14.1162C4.57354 12.9703 4.00061 11.5708 4 9.9175C3.99939 8.26424 4.57233 6.86468 5.71881 5.7188C6.86528 4.57294 8.26485 4 9.9175 4C11.5701 4 12.97 4.57294 14.1171 5.7188C15.2642 6.86468 15.8368 8.26424 15.835 9.9175C15.835 10.5851 15.7288 11.2148 15.5164 11.8065C15.3039 12.3983 15.0156 12.9218 14.6515 13.377L19.7496 18.4751C19.9165 18.642 20 18.8544 20 19.1124C20 19.3703 19.9165 19.5827 19.7496 19.7496C19.5827 19.9165 19.3703 20 19.1124 20C18.8544 20 18.642 19.9165 18.4751 19.7496L13.377 14.6515C12.9218 15.0156 12.3983 15.3039 11.8065 15.5164C11.2148 15.7288 10.5851 15.835 9.9175 15.835ZM9.9175 14.0142C11.0555 14.0142 12.0229 13.6161 12.8198 12.8198C13.6167 12.0235 14.0148 11.0561 14.0142 9.9175C14.0136 8.77891 13.6155 7.81178 12.8198 7.0161C12.0241 6.22043 11.0567 5.82198 9.9175 5.82077C8.7783 5.81955 7.81117 6.218 7.0161 7.0161C6.22103 7.81421 5.82259 8.78134 5.82077 9.9175C5.81895 11.0537 6.21739 12.0211 7.0161 12.8198C7.81481 13.6185 8.78194 14.0167 9.9175 14.0142Z',
      text: 'Cari Video',
      href: '/cari-video',
    },
    {
      icon: 'M6 20V18H18V10H20V20M4 16V4H16V16M8 6V14L13 10',
      text: 'Video Kamu',
      href: '/video-kamu',
    },
  ];

  const pathname = usePathname();

  return (
    <aside
      className={`border-r border-gray-200 bg-white
     ${isOpen ? 'w-64' : 'w-22'} transition-all duration-300`}
    >
      <div className={`flex flex-col px-6 py-6 gap-y-2`}>
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            href={item.href}
            isActive={pathname === item.href}
            showText={isOpen}
          />
        ))}
      </div>
    </aside>
  );
}
