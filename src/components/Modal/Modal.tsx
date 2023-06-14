import styles from './Modal.module.scss'
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setOpenModal } from '../../redux/reducer/setOpenModal';
import { setUpdate } from '../../redux/reducer/setUpdate';
import { databaseCollection } from '../../api/firebase';
import { addDoc } from 'firebase/firestore';

export const Modal = () => {
    const [inputValue, setInputValue] = useState('');
    const words = useAppSelector(state => state.setWordsReducer.words);
    const chars = useAppSelector(state=> state.setCharsReducer.chars);
    const accuracy = useAppSelector(state => state.setAccuracyReducer.accuracy);
    const dispatch = useAppDispatch();

    const handleSubmit = async () => {
        if (inputValue.trim() === '') {
            // Если поле ввода пустое, не выполняем отправку формы
            return;
        }

        let obj = {
            name: inputValue.trim(),
            words: words,
            chars: chars,
            accuracy: accuracy
        };
        try {
            await addDoc(databaseCollection, obj);
            dispatch(setOpenModal(false));
            dispatch(setUpdate());
        } catch (err) {
            console.error(err)
        }
    };

    const handleClose = () => {
        dispatch(setOpenModal(false));
        dispatch(setUpdate());
    };


    return (
        <div className={styles.popup_container}>
            <div className={styles.popup_overlay}>
                <div className={styles.popup_wrapper}>
                    <div className={styles.popup_all}>
                        <div className={styles.popup_close} onClick={handleClose}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="u-w-auto" data-reactid=".0.1.0.$=10.0.0.0.0.0"><circle cx="18" cy="18" r="18" fill="#fff" data-reactid=".0.1.0.$=10.0.0.0.0.0.0"></circle><path d="M25 12.4L23.6 11 18 16.6 12.4 11 11 12.4l5.6 5.6-5.6 5.6 1.4 1.4 5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6 5.6-5.6z" fill="#1B1B20" data-reactid=".0.1.0.$=10.0.0.0.0.0.1"></path></svg>
                        </div>
                        <div className={styles.popup_text}>
                            <p className={styles.p4}>Nice try!</p>
                            <span className={styles.span_text}> <p>You type with the speed of <b>{words} WPM</b> ({chars} CPM).</p><p> Your accuracy was <b>{accuracy}%</b>. It could be better!</p></span>
                            <p>Leave your name if you want to compete with other users.</p>
                            <input type="text" className={styles.input_modal} placeholder="Your name.." maxLength={25} required onChange={e => { setInputValue(e.target.value) }} autoFocus/>
                            <div className={styles.for_bttn}>
                                <button className={styles.btn_blue} onClick={handleClose}>Try again</button>
                                <button type='submit'className={styles.btn_green} onClick={handleSubmit}>Let's compete!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}