import styles from './Leaderboard.module.scss'
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { fetchUsers } from '../../redux/fetchData/reducer';
import { BoardItem } from './BoardItem';


export const Leaderboard = () => {
    const dispatch = useAppDispatch();
    const update = useAppSelector(state => state.setUpdateReducer.update);
    const usersList = useAppSelector(state => state.fetchReducer.data);
    useEffect(() => {
        dispatch(fetchUsers());
    }, [update]);

    const newUserList = usersList.map(e=>e);

    newUserList.sort((a, b) => {
        if (a.chars > b.chars) {
            return -1;
        }
        if (a.chars < b.chars) {
            return 1;
        }
        if (a.accuracy > b.accuracy) {
            return -1;
        }
        if (a.accuracy < b.accuracy) {
            return 1;
        }
        
        return 0;
    });

    const updatedUserList = newUserList.map((user, index) => ({
        ...user,
        id: `${index + 1}`
      }));

    return (
        <div className={styles.leaderboard}>
            <p className={styles.leaderboard_text}>Leaderboard</p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Name</th>
                        <th>Words</th>
                        <th>Chars</th>
                        <th>Accuracy</th>
                    </tr>
                </thead>
                <tbody>
                    {updatedUserList.map(user => <BoardItem {...user} key={user.id}/>)}
                </tbody>
            </table>
            
        </div>

    )
}