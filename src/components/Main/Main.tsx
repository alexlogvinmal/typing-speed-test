import styles from './Main.module.scss'
import { useEffect, useState } from 'react'
import { Right } from './Right';
import { Left } from './Left';
import { dataEng } from '../../data/eng';

export const Main = () => {


    const [confirmword, setConfirmword] = useState('')
    const [thirdword, setThirdword] = useState(dataEng[Math.floor(Math.random() * 77)])
    const [secondword, setSecondword] = useState(dataEng[Math.floor(Math.random() * 77)])
    const [word, setWord] = useState(dataEng[Math.floor(Math.random() * 77)])
    const [notword, setNotword] = useState(0);
    const [goodword, setGoodword] = useState(0);



    function testFunc(e: any) {
        let count = e.target.value.length
        console.log(word.length)
        if (e.target.value[count - 1] === word[0]) {
            setConfirmword(confirmword + e.target.value[count - 1])
            setGoodword(goodword + 1)
            setWord(word.slice(1))
            if (word.length === 1) {
                console.log('PAW')
                setWord(secondword)
                setSecondword(thirdword)
                setThirdword(dataEng[Math.floor(Math.random() * 77)])
            }
        } else {
            setNotword(notword + 1)
        }
    }

    return (
        <>
            <div className={styles.div}>
                <Left />
                <p>{confirmword}</p>
                <input className={styles.input} type='string' tabIndex={0} onInput={e => testFunc(e)} value={''} />
                <p>{word}{secondword}{thirdword}</p>
                <Right />
            </div>
            <p>Верные символы {goodword}</p>
            <p>Неверные символы {notword}</p>
            <p>Всего слов {confirmword.trim().split(' ').length}</p>
        </>

    )
}