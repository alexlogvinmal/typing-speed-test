import { useEffect, useState } from 'react';
import styles from './Header.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setIsRunning } from '../../redux/reducer/setIsRunning';

export const Header = () => {
    const [seconds, setSeconds] = useState(0);
    const [progress, setProgress] = useState(0);
    const isRunning = useAppSelector(state => state.setIsRunningReducer.isRunning);
    const words = useAppSelector(state => state.setWordsReducer.words);
    const chars = useAppSelector(state=> state.setCharsReducer.chars);
    const accuracy = useAppSelector(state => state.setAccuracyReducer.accuracy);
    const dispatch = useAppDispatch();

    useEffect(() => {
      let interval: NodeJS.Timeout | null = null;
  
      if (isRunning) {
        interval = setInterval(() => {
          setSeconds(prevSeconds => {
            if (prevSeconds < 60) {
              return prevSeconds + 1;
            } else {
              clearInterval(interval!);
              dispatch(setIsRunning(false));
              return 0;
            }
          });
        }, 1000);
      }
  
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }, [isRunning]);
  
    useEffect(() => {
      const totalSeconds = 60;
      const currentProgress = (seconds / totalSeconds) * 100;
      setProgress(currentProgress);
    }, [seconds]);
  
    const handleClick = () => {
      setIsRunning(!isRunning);
    };

    return (
        <>
            <span className={styles.main_span}>
                <p className={styles.p_main_span1}>TYPING SPEED TEST</p>
                <p className={styles.p_main_span2}>Test your typing skills</p>
            </span>
            <div className={styles.result_div}>
                <div className={styles.result_timer} onClick={handleClick}>
                    <svg viewBox="0 0 110 110" width="100" height="100" >
                        <circle cx="55" cy="55" r="53" fill="none" stroke="#337AB7" strokeWidth="4" />
                        <circle cx="55" cy="55" r="53" fill="#FFF" stroke="white" strokeWidth="5" strokeDasharray="335px" strokeDashoffset={335 - (335 * progress) / 100} style={{ transition: 'stroke-dashoffset 1s linear' }} />
                        <text x="50%" y="50%" textAnchor="middle" dy="7" fontSize="42" fill="black" fontWeight="700">
                        {60 - seconds > 0 ? 60 - seconds : 0}
                        </text>
                        <text x="50%" y="75%" textAnchor="middle" dy="7" fontSize="14" fill="black">
                            seconds
                        </text>
                    </svg>
                </div>
                <div className={styles.result_info}>
                    <p className={styles.result_number}>{words}</p>
                    <p className={styles.result_text}>words/min</p>
                </div>
                <div className={styles.result_info}>
                    <p className={styles.result_number}>{chars}</p>
                    <p className={styles.result_text}>chars/min</p>
                </div>
                <div className={styles.result_info}>
                    <p className={styles.result_number}>{accuracy  ? accuracy : 0}</p>
                    <p className={styles.result_text}>% accuracy</p>
                </div>
            </div>
        </>
    );
}

