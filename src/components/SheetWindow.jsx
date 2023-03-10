import Handsontable from 'handsontable';
import '../css/Handsontable.css'
import {useEffect, useRef} from "react";
import {customImageRenderer, customStatusRenderer} from "../helpers/hotRenderer";


const SheetWindow = (props) => {
    const containerRef = useRef(null);

    useEffect(() => {
        props.hotRef.current?.destroy()

        const customStatusEditor = Handsontable.editors.DropdownEditor.prototype.extend();
        customStatusEditor.prototype.prepare = function (row, col, prop, td, originalValue, cellProperties) {
            Handsontable.editors.DropdownEditor.prototype.prepare.apply(this, arguments);
            this.TEXTAREA.readOnly = true
        };

        const customImageEditor = Handsontable.editors.TextEditor.prototype.extend();
        customImageEditor.prototype.init = function () {
            Handsontable.editors.TextEditor.prototype.init.apply(this, arguments);
        }

        function statusRenderer(instance, td) {
            Handsontable.renderers.DropdownRenderer.apply(this, arguments)
            customStatusRenderer(arguments[2], arguments[3], arguments[5], td)
        }

        function imageRenderer(instance, td) {
            Handsontable.renderers.HtmlRenderer.apply(this, arguments)
            customImageRenderer(arguments[2], arguments[3], arguments[5], td)
        }

        props.hotRef.current = new Handsontable(containerRef.current, {
            data: props.hotDataRef.current,
            columns: [{
                data: 'status',
                type: 'dropdown',
                editor: customStatusEditor,
                source: ['진행전', '진행중', '재요청', '승인대기중', '승인완료'],
                renderer: statusRenderer
            },
                {data: 'image', type: 'text', editor: customImageEditor, renderer: imageRenderer},
                {data: 'description', type: 'text'}],
            colWidths: [1, 3, 6],
            rowHeights: 100,
            stretchH: 'all',
            manualColumnResize: true,
            manualRowResize: true,
            colHeaders: ['상태', '캡쳐화면', '설명'],
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
