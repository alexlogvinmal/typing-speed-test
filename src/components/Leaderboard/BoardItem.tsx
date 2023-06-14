import { FirstPlaceMedal, SecondPlaceMedal, ThirdPlaceMedal } from "../Icons/Icons"


interface BoardItemListType {
    id: string,
    name: string,
    words: number,
    chars: number,
    accuracy: number
}


export const BoardItem = ({ id, name, words, chars, accuracy }: BoardItemListType) => {

    let icon =  null;

    if(id === '1'){
        icon = <FirstPlaceMedal/>
    }else if(id === '2'){
        icon = <SecondPlaceMedal/>
    }else if(id === '3'){
        icon = <ThirdPlaceMedal/>
    }

    return (
        <tr>
            <td>{+id <= 3 ? icon : id }</td>
            <td>{name}</td>
            <td>{words}</td>
            <td>{chars}</td>
            <td>{accuracy}%</td>
        </tr>

    )
}