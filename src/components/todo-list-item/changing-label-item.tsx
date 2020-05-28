import React, {useState, useEffect, useRef} from "react";
import { ITodoListItemChanging } from '../../interfaces/interfaces';

const ChangingLabelItem:React.FC<ITodoListItemChanging> = ({id, label, changeLabel, changeItem}) => {

    let [labelValue, setLabelValue] = useState<string>(label);
    const inputElem = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputElem.current!.focus();
        inputElem.current!.select();
    }, []);

    const onLabelChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        let newLabel = event.target.value;
        setLabelValue(newLabel);
    };

    const onSubmit = (event:React.FormEvent) => {
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

export default ChangingLabelItem;