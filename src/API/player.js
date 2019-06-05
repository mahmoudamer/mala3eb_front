import axios from '../Configurations/Axios/axios-config';

// //getplayerdata (my profile)
// export const getData = async () => {
//     let response = await axios.get('/player/getdata', {
//         headers: {
//             Authorization: localStorage.getItem('token')
//         }
//     })
//     return response.data;
// }

//getplayer (another profile)
export const getPlayerData = async (id) => {
    let response = await axios.get(`/player/${id}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return response.data;
}

// createPlayer
export const createPlayer = async (playerObj) => {
    let response = await axios.post('/player/add', playerObj, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
    return (response.data);
};