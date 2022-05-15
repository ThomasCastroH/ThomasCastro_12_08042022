import { useState, useEffect } from "react";

const url = "http://localhost:3001/user/";
const urlMocked = "../";


//True to use mocked data, False to use fetched data
const useMockedData = false;

/**
 * @description Get the user's name from the API or the mocked data
 * @param {number} id - ID of the user
 * @returns name - Name of the user
 */
export function GetUserName(id) {
    const [userName, setUserName] = useState("");
    let userID = id;

    useEffect(() => {
        if (useMockedData) {
            fetch(`${urlMocked}user${userID}.json`)
                .then((res) => {
                    if (res.status === 404) {
                        window.location.href = "/error";
                        return;
                    } else {
                        return res.json();
                    }
                })
                .then((result) => setUserName(result.data.userInfos.firstName))
        } else {
            fetch(`${url}${userID}`)
                .then((res) => {
                    if (res.status === 404) {
                        window.location.href = "/error";
                        return;
                    } else {
                        return res.json();
                    }
                })
                .then((result) => setUserName(result.data.userInfos.firstName))
        }
    }, [userID]);

    return userName;
}

/**
 * @description Get the user's key datas (calories, proteins, carbs, lipides) from the API or the mocked data
 * @param {number} id - ID of the user 
 * @returns User's key datas
 */
export function GetKeyData(id) {
    const [keyData, setKeyData] = useState("");
    let userID = id;

    useEffect(() => {
        if (useMockedData) {
            fetch(`${urlMocked}user${userID}.json`)
                .then((res) => {
                    if (res.status === 404) {
                        window.location.href = "/error";
                        return;
                    } else {
                        return res.json();
                    }
                })
                .then((result) => setKeyData(result.data.keyData));
        } else {
            fetch(`${url}${userID}`)
                .then((res) => {
                    if (res.status === 404) {
                        window.location.href = "/error";
                        return;
                    } else {
                        return res.json();
                    }
                })
                .then((result) => setKeyData(result.data.keyData));
        }
    }, [userID]);

    return keyData;
}

/**
 * @description Get the user's activity (weight and calories per session) from the API or the mocked data
 * @param {number} id - ID of the user
 * @returns - User's activity data
 */
export function GetActivityData(id) {
    const [activityData, setActivityData] = useState("");
    let userID = id;

    useEffect(() => {
        if (useMockedData) {
            fetch(`${urlMocked}${userID}/activity.json`)
                .then((res) => {
                    if (res.status === 404) {
                        window.location.href = "/error";
                        return;
                    } else {
                        return res.json();
                    }
                })
                .then((result) => setActivityData(result.data.sessions));
        } else {
            fetch(`${url}${userID}/activity`)
                .then((res) => {
                    if (res.status === 404) {
                        window.location.href = "/error";
                        return;
                    } else {
                        return res.json();
                    }
                })
                .then((result) => setActivityData(result.data.sessions));
        }
    }, [userID]);

    return activityData;
}

/**
 * @description Get the user's session data from the API or the mocked data
 * @param {number} id - ID of the user
 * @returns - User's sessions length
 */
export function GetSessionData(id) {
    const [sessionData, setSessionData] = useState("");
    let userID = id;

    useEffect(() => {
        if (useMockedData) {
            fetch(`${urlMocked}/${userID}/average-sessions.json`)
                .then((res) => {
                    if (res.status === 404) {
                        window.location.href = "/error";
                        return;
                    } else {
                        return res.json();
                    }
                })
                .then((result) => setSessionData(result.data.sessions));
        } else {
            fetch(`${url}${userID}/average-sessions`)
                .then((res) => {
                    if (res.status === 404) {
                        window.location.href = "/error";
                        return;
                    } else {
                        return res.json();
                    }
                })
                .then((result) => setSessionData(result.data.sessions));
        }
    }, [userID]);

    return sessionData;
}

/**
 * @description Get the user's score  from the API or the mocked data
 * @param {number} id - ID of the user
 * @returns - User's score
 */
export function GetUserScore(id) {
    const [userScore, setUserScore] = useState("");
    let userID = id;

    useEffect(() => {
        if (useMockedData) {
            fetch(`${urlMocked}user${userID}.json`)
                .then((res) => {
                    if (res.status === 404) {
                        window.location.href = "/error";
                        return;
                    } else {
                        return res.json();
                    }
                })
                .then((result) => setUserScore(result.data.todayScore));
        } else {
            fetch(`${url}${userID}`)
                .then((res) => {
                    if (res.status === 404) {
                        window.location.href = "/error";
                        return;
                    } else {
                        return res.json();
                    }
                })
                .then((result) => setUserScore(result.data.todayScore));
        }
    }, [userID]);

    return userScore;
}

/**
 * @description Get the user's score by category from the API or the mocked data
 * @param {number} id - ID of the user
 * @returns - User's performance per category
 */
export function GetUserPerformance(id) {
    const [userPerformance, setUserPerformance] = useState("");
    let userID = id;

    useEffect(() => {
        if (useMockedData) {
            fetch(`${urlMocked}${userID}/performance.json`)
                .then((res) => {
                    if (res.status === 404) {
                        window.location.href = "/error";
                        return;
                    } else {
                        return res.json();
                    }
                })
                .then((result) => setUserPerformance(result.data));
        } else {
            fetch(`${url}${userID}/performance`)
                .then((res) => {
                    if (res.status === 404) {
                        window.location.href = "/error";
                        return;
                    } else {
                        return res.json();
                    }
                })
                .then((result) => setUserPerformance(result.data));
        }
    }, [userID]);

    return userPerformance;
}