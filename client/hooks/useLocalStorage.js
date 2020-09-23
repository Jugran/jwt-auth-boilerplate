import { useEffect, useState } from 'react';

const PREFIX = 'node-app-'

export default function useLocalStorage(key, initialValue){
    const prefixedKey = PREFIX + key;
    const [state, setState] = useState(() => {
        try {
            const serializableState = localStorage.getItem(prefixedKey);

            if (serializableState === null) {
                return initialValue;
            }
            else {
                return JSON.parse(serializableState);
            }

        } catch (err) {
            return initialValue
        }
        
    });

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(state));
    }, [prefixedKey, state]);

    return [state, setState];

}