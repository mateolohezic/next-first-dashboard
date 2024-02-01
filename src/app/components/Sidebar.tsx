import Image from "next/image"
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5"
import { SidebarMenuItem } from "."
import Link from "next/link"

const menuItems = [
    {
        path:'/dashboard/main',
        icon: <IoBrowsersOutline size={40}/>,
        title: 'Dashboard',
        subTitle: 'Menu principal'
    },
    {
        path:'/dashboard/counter',
        icon: <IoCalculator size={40}/>,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
]

export const Sidebar = () => {
    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-[400px] h-screen overflow-y-auto">
            <div id="logo" className="my-8 px-4">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="mr-2"/>
                    <span>Dash</span>
                    <span className="text-blue-500">Loh</span>
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-4 my-8">
                <p className="text-slate-500">Welcome back,</p>
                <Link href="/" className="mt-2 inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            alt="Foto de perfil"
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Mateo Lohezic
                    </span>
                </Link>
            </div>
            <div id="nav" className="w-full px-2 flex flex-col space-y-2">
                {
                    menuItems.map( menuItem => <SidebarMenuItem key={menuItem.path} {...menuItem}/>)
                }
            </div>
        </div>
    )
}