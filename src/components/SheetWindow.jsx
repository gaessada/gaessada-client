import Handsontable from 'handsontable';
import '../css/Handsontable.css'
import {useEffect, useRef} from "react";


const SheetWindow = (props) => {
    const containerRef = useRef(null);

    useEffect(() => {
        props.hotRef.current?.destroy()

        props.hotRef.current = new Handsontable(containerRef.current, {
            data: props.hotDataRef.current,
            columns: ['A', 'B', 'C','D'],
            rowHeights: 100,
            stretchH: 'all',
            manualColumnResize: true,
            colHeaders: true,
            rowHeaders: true,
            width: props.hotRefSize.width,
            height: props.hotRefSize.height,
            minSpareRows: 2,
            contextMenu: ['row_above', 'row_below', 'remove_row'],
        })
    }, [props.hotRef, props.hotRefSize, props.hotDataRef])

    return <div ref={containerRef}/>
}

export default SheetWindow
