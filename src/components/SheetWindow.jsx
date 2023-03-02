import Handsontable from 'handsontable';
import '../css/Handsontable.css'
import {useEffect, useRef} from "react";


const SheetWindow = (props) => {
    const containerRef = useRef(null);

    useEffect(() => {
        props.hotRef.current?.destroy()

        props.hotRef.current = new Handsontable(containerRef.current, {
            manualColumnResize: true,
            colHeaders: true,
            rowHeaders: true,
            width: 1000,
            height: 500,
            minSpareRows: 2,
            contextMenu: ['row_above', 'row_below', 'remove_row'],
        })
    }, [props.hotRef])

    return <div ref={containerRef}/>
}

export default SheetWindow
