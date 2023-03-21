import React, { useRef } from "react";
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

// Defining the input field component on the main App
const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur();
            }}>

            <input
                ref={inputRef}
                type="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter a Task"
                className="input__box">
            </input>

            <button className="input_submit" type="submit">
                Add
            </button>

        </form>
    );
}

export default InputFeild;