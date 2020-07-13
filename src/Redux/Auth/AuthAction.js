import axios from 'axios'
import { AUTH_SIGNUP, AUTH_SIGNOUT, AUTH_ERROR } from './AuthType'

//create actions functions
// export const signUp = token =>{
//     return{
//         type: AUTH_SIGNUP,
//         payload: token
//     }
// }

// export const signUpError = errorMessage =>{
//     return{
//         type: AUTH_ERROR,
//         payload: errorMessage
//     }
// }

//create action for google 
export const oauthGoogle = data =>{
    return async dispatch =>{
        console.log('we received data', data)
       const res = await axios.post('http://localhost:4000/user/oauth/google', {access_token:data})
       console.log('res', res)

       dispatch({
           type:AUTH_SIGNUP,
           payload:res.data.token
       });

       localStorage.setItem('JWT_TOKEN', res.data.token)
    }
}

//create action using thunk and axios
export const signUpAction = data =>{
    return async dispatch =>{
        try{
           console.log('action creator signup called')
           const resp = await axios.post('http://localhost:4000/user/signup', data)
           console.log('res', resp)

           console.log('action creator signup dispatch called')
           dispatch({
               type:AUTH_SIGNUP,
               payload:resp.data.token
           })
           localStorage.setItem('JWT_TOKEN', resp.data.token)

        }catch(err){
            dispatch({
                type:AUTH_ERROR,
                payload:'Email already exist'
            })
            console.log('err', err)
        }
    }
}


//create action for signout 
export const signOut = () =>{
    return dispatch =>{
        localStorage.removeItem('JWT_TOKEN')

        dispatch({
            type: AUTH_SIGNOUT,
            payload: ''
        })
    };
}