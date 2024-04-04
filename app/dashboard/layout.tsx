import { NavBar, SideBar } from "../components/dashboard"
import styles from '../components/dashboard/dashboard.module.css'
const Layout = ({children}) => {
    return <div className={styles.container}>
        <div className={styles.menu}>
            <SideBar />
        </div>
        <div className={styles.content}>
            <NavBar />
            {children}
        </div>
    </div>
}

export default Layout