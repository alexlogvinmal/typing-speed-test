import styles from './Main.module.scss'
import { FC, useEffect, useState } from 'react'
import { Right } from './Right';
import { Left } from './Left';

export const Main: FC = () => {

    // let word='word '
    const [word, setWord] = useState('word')
    const [nword, setNword] = useState(0);
    let reuslt = word.split('')
    

    function testFunc(e: any) {
        let count=e.target.value.length
        console.log(count)
        if(e.target.value[count-1]==word[0]){
            // word = word.substring(1);
            setWord(word.slice(1))
        }else{
            setNword(nword+1)
            return(<div></div>)
        }
      }

    return (
        <>
        <div className={styles.div}>
            <Left/>
            <input className={styles.input} type='string' tabIndex={0} onInput={e=> testFunc(e)}/>
            <p>{word}</p>
            <Right/>
        </div>
        <p>{nword}</p>
        </>
        
    )
}