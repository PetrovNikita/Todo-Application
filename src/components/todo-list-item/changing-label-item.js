import React, {useState, useEffect, useRef} from "react";

export default function ChangingLabelItem ({id, label, changeLabel, changeItem}) {

    let [labelValue, setLabelValue] = useState(label);
    const inputElem = useRef(null);

    useEffect(() => {
        inputElem.current.focus();
        inputElem.current.select();
    }, []);

    const onLabelChange = (event) => {
        let newLabel = event.target.value;
        setLabelValue(newLabel);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        changeLabel(id, labelValue);
        changeItem();
    } 

    return (
        <form className="bottom-panel d-flex label-change-form"
                onSubmit={onSubmit}>
            <input value={labelValue} ref={inputElem}
                    className="form-control label-change-input"
                    onChange={onLabelChange}/>
            <button type="submit"
                        className="btn btn-outline-secondary label-change-submit">Save</button>
        </form>
    );

};