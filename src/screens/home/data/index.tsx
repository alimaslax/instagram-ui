import {mainUser, user1, user2, user3, user4} from "../../../includes/images";

export const USERS_DATA = [
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: mainUser,
        name: "Your story",
        viewed: true,
        main: true
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: user1,
        name: "_sara_arruda_",
        viewed: false,
        main: false
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: user3,
        name: "priv_design",
        viewed: false,
        main: false
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: user2,
        name: "ds.pino",
        viewed: false,
        main: false
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: user4,
        name: "denise_12",
        viewed: false,
        main: false
    },
];