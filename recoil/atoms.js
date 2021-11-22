import { atom } from "recoil";

const userStatsState = atom({
    key: 'userStats',
    stats: [], // unique ID (with respect to other atoms/selectors)
    default: ["test"], // default value (aka initial value)
});



export {
    userStatsState
}