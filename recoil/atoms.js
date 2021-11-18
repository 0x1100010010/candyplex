import { atom } from "recoil";

const themeState = atom({
    key: 'activeTheme', // unique ID (with respect to other atoms/selectors)
    default: 'light', // default value (aka initial value)
});

export {
    themeState
}