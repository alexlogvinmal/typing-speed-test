import styles from './TypingTest.module.scss'
import { useEffect, useRef, useState } from 'react'
import { dataEng } from '../../data/eng';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setWords } from '../../redux/reducer/setWords';
import { setChars } from '../../redux/reducer/setChars';
import { setAccuracy } from '../../redux/reducer/setAccuracy';
import { setIsRunning } from '../../redux/reducer/setIsRunning';

export const TypingTest = () => {
    const [confirmword, setConfirmword] = useState('')
    const [fourthword, setFourthword] = useState(dataEng[Math.floor(Math.random() * 76)])
    const [thirdword, setThirdword] = useState(dataEng[Math.floor(Math.random() * 76)])
    const [secondword, setSecondword] = useState(dataEng[Math.floor(Math.random() * 76)])
    const [word, setWord] = useState(dataEng[Math.floor(Math.random() * 76)])
    const [notword, setNotword] = useState(0);
    const [goodword, setGoodword] = useState(0);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const isRunning = useAppSelector(state => state.setIsRunningReducer.isRunning);
    const update = useAppSelector(state => state.setUpdateReducer.update);
    const dispatch = useAppDispatch();

    useEffect(() => {
        confirmword === '' ? dispatch(setWords(0)) : dispatch(setWords(confirmword.trim().split(' ').length))
        dispatch(setChars(goodword))
        dispatch(setAccuracy(Math.floor((goodword / (goodword + notword)) * 100)))
    }, [confirmword, goodword, notword]);

    function testFunc(e: any) {
        dispatch(setIsRunning(true))
        let count = e.target.value.length
        if (e.target.value[count - 1] === word[0]) {
            setConfirmword(confirmword + e.target.value[count - 1])
            setGoodword(goodword + 1)
            setWord(word.slice(1))
            if (paragraphRef.current) {
                paragraphRef.current.scrollLeft = paragraphRef.current.scrollWidth;
            }
            if (word.length === 1) {
                setWord(secondword)
                setSecondword(thirdword)
                setThirdword(fourthword)
                setFourthword(dataEng[Math.floor(Math.random() * 76)])
            }
        } else {
            setNotword(notword + 1)
        }
    }

    const handleInputContainerClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    useEffect(() => {
        setConfirmword('')
        setFourthword(dataEng[Math.floor(Math.random() * 76)])
        setThirdword(dataEng[Math.floor(Math.random() * 76)])
        setSecondword(dataEng[Math.floor(Math.random() * 76)])
        setWord(dataEng[Math.floor(Math.random() * 76)])
        setNotword(0)
        setGoodword(0)
    }, [update]);  ////////функция обновления после закрытия модального окна (redux)



    return (
        <div className={styles.main_div}>
            <div className={isRunning ? styles.visibility_hidden : styles.arrow_help}>Start typing</div>
            <div>
                <div className={styles.second_div} onClick={handleInputContainerClick}>
                    <p className={styles.left_div} ref={paragraphRef}>{confirmword}</p>
                    <input className={styles.input} type='string' tabIndex={0} onInput={e => testFunc(e)} value={''} autoFocus ref={inputRef} />
                    <p className={styles.right_div}>{word}&nbsp;{secondword}&nbsp;{thirdword}&nbsp;{fourthword}</p>
                </div>
            </div>
        </div>
    )
}