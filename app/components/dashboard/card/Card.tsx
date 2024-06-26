import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.scss';

const Card = () => {
    return <div className={styles.container}>
        <MdSupervisedUserCircle size={24} />
        <div className={styles.texts} >
            <span className={styles.title}>Total Users</span> 
            <span className={styles.number}>10,273</span> 
            <span className={styles.detail}>
                <span>
                    <span className={styles.positive}>12%</span> more than the previous week
                </span>
            </span>
        </div>
    </div>
}

export default Card