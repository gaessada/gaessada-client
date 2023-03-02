import {useRef} from "react";
import '../css/Handsontable.css'
import SheetWindow from "../components/SheetWindow";


const FeedbackPage = (props) => {
    const hotRef = useRef(null)

    return <>
        <SheetWindow hotRef={hotRef}/>
    </>
}

export default FeedbackPage
