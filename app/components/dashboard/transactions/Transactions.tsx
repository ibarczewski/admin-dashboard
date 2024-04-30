import Image from 'next/image';
import styles from './transactions.module.scss';

const Transactions = () => {
    return <div className={styles.container}>
        <h2 className={styles.title}>Latest Transactions</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Amount</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                            John Doe
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.pending} ${styles.status}`}>Pending</span>
                    </td>
                    <td>02/14/2024</td>
                    <td>$3,200</td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                            John Doe
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.done} ${styles.status}`}>Done</span>
                    </td>
                    <td>02/14/2024</td>
                    <td>$3,200</td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                            John Doe
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.cancelled} ${styles.status}`}>Cancelled</span>
                    </td>
                    <td>02/14/2024</td>
                    <td>$3,200</td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Transactions