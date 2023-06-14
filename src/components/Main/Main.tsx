import { Header } from "../Header/Header"
import { Modal } from "../Modal/Modal"
import { TypingTest } from "../TypingTest/TypingTest"
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { Leaderboard } from "../Leaderboard/Leaderboard";

export const Main = () => {
    const openModal = useAppSelector(state=>state.setOpenModalReducer.openModal)

    return (
        <>
            <Header/>
            <TypingTest/>
            <Leaderboard/>
            {openModal ? <Modal/> : null } 
        </>

    )
}