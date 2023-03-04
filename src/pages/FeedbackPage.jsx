import {useEffect, useRef, useState} from "react";
import "../css/Handsontable.css";
import SheetWindow from "../components/SheetWindow";
import {v4} from "uuid";

const FeedbackPage = () => {
    const pageRef = useRef(null);
    const [pageRefSize, setPageRefSize] = useState({width: 0, height: 0});
    const hotRef = useRef(null);
    const hotDataRef = useRef(
        Array.from({length: 100}, () => ({rowId: v4()}))
    );

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const {width, height} = entry.contentRect;
                setPageRefSize({...pageRefSize, width: width, height: height});
            }
        });
        observer.observe(pageRef.current);
        return () => observer.disconnect();
    }, [pageRefSize]);

    return (
        <div ref={pageRef} className={"w-full h-full"}>
            <SheetWindow
                hotRef={hotRef}
                hotRefSize={pageRefSize}
                hotDataRef={hotDataRef}
            />
        </div>
    );
};

export default FeedbackPage;
