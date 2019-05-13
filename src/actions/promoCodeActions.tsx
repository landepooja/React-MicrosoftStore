import {PROMO_CODE} from './types';

export const handleChange = (e: { target: { value: any; }; }) =>
(dispatch: (arg0: { type: string; payload: any; }) => string) => {
    dispatch({
        type: PROMO_CODE,
        payload: e.target.value
    });
};