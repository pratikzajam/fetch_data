
let initialState = {
    loading: false,
    data: []

}


let fetchReducer = (state = initialState, action) => {


    if (action.type == "fetch") {
        return {
            loading: false,
            data: action.payload
        }
    }

    if (action.type == "fetching") {
        return {
            loading: true,
            data: []
        }
    }





    return state

}

export default fetchReducer