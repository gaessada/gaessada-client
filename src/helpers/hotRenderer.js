import Handsontable from 'handsontable'

export const customStatusRenderer = (r, c, v, td) => {
    td.style.fontSize = '1rem'
    td.style.textAlign = 'center'
    td.style.verticalAlign = 'middle'
}

export const customImageRenderer = (r, c, v, td) => {
    if (v) {
        const img = document.createElement('IMG')
        img.src = v
        Handsontable.dom.empty(td)
        td.appendChild(img)
    }
}
