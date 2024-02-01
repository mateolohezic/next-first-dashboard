'use client'

import { usePathname } from "next/navigation";
import style from './SidebarMenuItem.module.css'
import Link from "next/link";

interface Props{
    path: string;
    icon: JSX.Element;
    title: string;
    subTitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {

    const pathname = usePathname()

    return (
        <Link href={path} className={`${style.link} ${pathname === path && style.activeLink}`}>
            <div>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">{title}</span>
                <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
            </div>
        </Link>
    )
}