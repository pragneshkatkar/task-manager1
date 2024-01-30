import Link from "next/link"
import Icon from "../icon"

function SidebarItem(props) {
    const { name, icon, isActive, link } = props
    return (
        <Link href={link} className={`sidebar-item ${isActive ? "active" : ""}`}>
            <Icon icon={icon} />
            <p>{name}</p>
        </Link>
    )
}

export default function Sidebar(props) {
    const { active } = props

    const SIDEBAR_ITEMS = [
        {
            name: "Tasks",
            link: "/tasks",
            icon: "dashboard-primary"
        },
    ]
    return (
        <>
            <div className="sidebar">
                {
                    SIDEBAR_ITEMS.map((item, key) => <SidebarItem key={key} {...item} isActive={active == item.name} />)
                }
            </div>
        </>
    )
}