import { useCallback, useReducer, Reducer } from 'react';

export type FormState = {
    inputs: {
        [key: string]: {
            value: string;
            isValid: boolean;
        };
    };
    isValid: boolean;
};

export type ChangeActionTypes = {
    type: 'INPUT_CHANGE';
    value: string;
    isValid: boolean;
    inputId: string;
};

export type SetActionTypes = {
    type: 'SET_DATA';
    inputs: FormState['inputs'];
    formIsValid: boolean;
};

const formReducer: Reducer<FormState, ChangeActionTypes | SetActionTypes> = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (!state.inputs[inputId]) {
                    continue;
                }
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid },
                },
                isValid: formIsValid,
            };
        case 'SET_DATA':
            return {
                inputs: action.inputs,
                isValid: action.formIsValid,
            };
        default:
            return state;
    }
};

type UseForm = (
    initialInputs: FormState['inputs'],
    initialFormValidity: boolean
) => [
    FormState,
    (id: string, value: string, isValid: boolean) => void,
    (inputData: FormState['inputs'], formValidity: boolean) => void,
];

export const useForm: UseForm = (initialInputs, initialFormValidity) => {
    const [formState, dispatch] = useReducer<Reducer<FormState, ChangeActionTypes | SetActionTypes>>(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity,
    });

    const inputHandler = useCallback((id: string, value: string, isValid: boolean) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputId: id,
        });
        console.log({ formState });
    }, []);

    const setFormData = useCallback((inputData: FormState['inputs'], formValidity: boolean) => {
        dispatch({
            type: 'SET_DATA',
            inputs: inputData,
            formIsValid: formValidity,
        });
    }, []);

    return [formState, inputHandler, setFormData];
};
