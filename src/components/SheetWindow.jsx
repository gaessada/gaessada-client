import Handsontable from 'handsontable';
import '../css/Handsontable.css'
import {useEffect, useRef} from "react";


const SheetWindow = (props) => {
    const containerMain = useRef(null);

    useEffect(() => {
        props.hotRef.current?.destroy()

        props.hotRef.current = new Handsontable(containerMain.current, {
            manualColumnResize: true,
            colHeaders: true,
            rowHeaders: true,
            width: 1000,
            height: 500,
            minSpareRows: 2,
            contextMenu: ['row_above', 'row_below', 'remove_row'],
        })
    }, [])

    return <div ref={containerMain}/>
}

export default SheetWindow
