import { FC, ChangeEvent, useReducer, useEffect } from 'react';
import { validate } from '../../util/validators';
import './Input.scss';

export type InputProps = {
    element: 'input' | 'textarea';
    id: string;
    type?: string;
    placeholder?: string;
    label: string;
    rows?: number;
    errorText?: string;
    validators: any[];
    onInput: (id: string, value: string, isValid: boolean) => void;
    value?: string;
    valid?: boolean;
};

export type ActionTypes = {
    type: 'CHANGE' | 'TOUCH';
    val: string;
    validators: any[];
};

export type StateType = {
    value: string;
    isValid: boolean;
    isTouched: boolean;
};

const inputReducer = (state: StateType, action: ActionTypes) => {
    const actions = {
        CHANGE: {
            ...state,
            value: action.val,
            isValid: validate(action.val, action.validators),
        },
        TOUCH: {
            ...state,
            isTouched: true,
        },
    };
    return actions[action.type] || state;
};

const Input: FC<InputProps> = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.value || '',
        isValid: props.valid || false,
        isTouched: false,
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch({ type: 'CHANGE', val: event.target.value, validators: props.validators });
    };

    const touchHandler = () => {
        dispatch({ type: 'TOUCH', val: '', validators: [] });
    };

    const element =
        props.element === 'input' ? (
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={changeHandler}
                value={inputState.value}
                onBlur={touchHandler}
            />
        ) : (
            <textarea
                id={props.id}
                rows={props.rows || 3}
                onChange={changeHandler}
                value={inputState.value}
                onBlur={touchHandler}
            />
        );

    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText} is not valid</p>}
        </div>
    );
};

export default Input;
