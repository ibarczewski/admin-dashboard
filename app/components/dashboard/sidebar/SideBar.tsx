import styles from './sidebar.module.scss';
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdPeople,
    MdAnalytics,
    MdOutlineSettings,
    MdHelpCenter,
} from 'react-icons/md';

import MenuLink from './menuLink/MenuLink';
import { MenuItem } from '../../../types';
import Image from 'next/image';

const menuItems: MenuItem[] = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/users",
                icon: <MdSupervisedUserCircle  />
            },
            {
                title: "Products",
                path: "/products",
                icon: <MdShoppingBag />
            },
            {
                title: "Transactions",
                path: "/transactions",
                icon: <MdAttachMoney />
            }
        ]
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics  />
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />
            },
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />
            },
        ]
    },
]

const SideBar = () => {
    return <div className={styles.container}>
        <div className={styles.user}>
            <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />
            <div className={styles.userDetail}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.userTitle}>Administrator</span>
            </div>
        </div>
        <ul className={styles.list}>
            {menuItems.map(category => <li key={category.title}>
                    <span className={styles.category}>{category.title}</span>
                    {category.list.map(item => <MenuLink item={item} key={item.title} />)}
                </li>
            )}
        </ul>
    </div>
}

export default SideBar