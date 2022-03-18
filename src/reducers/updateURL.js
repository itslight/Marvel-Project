const initialState = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=888a87cb0d5d769126acbf2610ef4b25&hash=325d678a7a04b90ae9fabfe46efcbddc&limit=30";

const changeTheUrl = (state = initialState, action) => {
    switch(action.type){
        case "URLUPDATE": return action.url;
        default: return state;
    }
}

export default changeTheUrl;