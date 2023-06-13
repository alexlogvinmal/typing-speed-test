import styles from './Modal.module.scss'
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setOpenModal } from '../../redux/reducer/setOpenModal';

export const Modal = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        if (inputValue.trim() === '') {
            // Если поле ввода пустое, не выполняем отправку формы
            return;
        }

        // Здесь добавить логику для отправки формы
        console.log('Форма отправлена');
    };

    const handleClose = () => {
        dispatch(setOpenModal(false))
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
                            <span className={styles.span_text}> <p>You type with the speed of <b>0 WPM</b> (0 CPM).</p><p> Your accuracy was <b>0%</b>. It could be better!</p></span>
                            <p>Leave your name if you want to compete with other users.</p>
                            <input type="text" placeholder="Your name.." maxLength={25} required onChange={e => { setInputValue(e.target.value) }} />
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