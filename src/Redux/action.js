import axios from 'axios'


let FetchSucessful = (payload) => {

    return {

        type: "fetch",
        payload
    }

}


let Fetching = () => {

    return {

        type: "fetching",
      
    }

}


let fetchData = () => {

    return async (dispatch) => {

        try {

            dispatch(Fetching())

            let res = await axios.get("https://jsonplaceholder.typicode.com/todos")

            dispatch(FetchSucessful(res.data))


        } catch (error) {
            dispatch(FetchSucessful(error))
        }

    }
}


export { FetchSucessful, fetchData,Fetching }