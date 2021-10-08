import { useState } from "react";
import "./Heder.css";

export const Heder = (props) => {
    const {getValue} = props;
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(value !== "") getValue(Number(value));
        setValue("");
    }
    return (
        <form onSubmit={onSubmit}>
            <input className="input"
                type="number" 
                value={value} 
                onChange={(e) => onChange(e)}>
            </input>
        </form>
    )
}