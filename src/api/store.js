import { LineAxisOutlined } from '@mui/icons-material'
import create from 'zustand'
import * as endpoints from './endpoints'
import axios from 'axios'
import { CONNECTION_ERROR, LOGIN_SUCCESSFUL, SIGNOUT } from './messages'
import { toast } from 'react-toastify'



export const useThemeStore = create((set) => ({
    currentTheme: 'dark',
    changeTheme: () => set((state) => {
        return { 
            currentTheme: state.currentTheme === 'dark' ? 'light' : 'dark'
        }
    })
}))

export const dashboardStore = create((set) => ({
    activePage: 'dashboard',
    setActivePage: (page) => set(page)
}))



export const authStore = create( (set, get) => ({
    user: {},
    authenticated: false,
    loading: true,
    token: "",
    refresh: "",
    loging_in: false,
    registering: false,

    get_token_from_localstorage: () => {
        const token = localStorage.getItem('token')
        if(! token) {
            set({loading:false})
            return
        }
        get().get_profile()
        set({token, refresh: localStorage.getItem('refresh'), authenticated: true, loading:false})
        
    },

    logout: () => {
        set({token: "", refresh: ""})
        localStorage.removeItem("token")
        localStorage.removeItem("refresh")
    },

    setUser: ( user ) => set( {user} ),
    setAuthenticated: (authenticated) => set({authenticated}),
    setLoading: (loading) => set({loading}),


    generate_token: async ({ mobile='', password, email='' }) => {
        const f = new FormData()
        f.append("mobile", mobile)
        if (email) f.append("email", email)

        f.append("password", password)
        return new Promise( (res, rej) => {

            axios.post(endpoints.GENERATE_TOKEN,f)
            .then((response) => {
                const {data} = response
                if(response.status === 200 && data.error === 0){
                    localStorage.setItem('verify_type', 'login')
                    localStorage.setItem('verify_mobile', mobile)
                    localStorage.setItem('verify_email', email)
                    localStorage.setItem('verify_password', password)
                    localStorage.setItem('verify_token', data.id)
                }
                return res({code: response.status, result: [data.message]})
            })
            .catch(generate_token_storejs => {

                if(generate_token_storejs?.response?.status === 400){
                    return res({code: 400, result: generate_token_storejs.response.data.message})
                }
                console.log({generate_token_storejs})
                return res({code: 500, result: [CONNECTION_ERROR]})
            })
        })
       
    },
    register: async ({ mobile, password, ref_code, email}) => {
        return new Promise( (res, rej) => {
            axios.post(endpoints.REGISTER_TOKEN,{ mobile, password, ref_code, email})
            .then((response) => {
                const {data} = response
                if(data.error === 1)
                    return res({error: 1, message: data.message })
                
                localStorage.setItem("verify_action", "register")
                localStorage.setItem("verify_token", data.token)
                if(email){
                    localStorage.removeItem("verify_mobile")
                    localStorage.setItem("verify_email", email)
                }else{
                    localStorage.removeItem("verify_email")
                    localStorage.setItem("verify_mobile", mobile)

                }
                return res({error: 0, token: data.token })
            })
            .catch(register_storejs => {
                console.log({register_storejs})
                return res({code: 500, result: [CONNECTION_ERROR]})
            })
        })
    },
    resend_otp: async ({ token }) => {
        return new Promise( (res, rej) => {
            axios.post(endpoints.RESEND_OTP,{ token })
            .then((response) => {
                const {data} = response
                if(data.error === 1)
                    return res({error: 1, message: data.message })
                
                localStorage.setItem("verify_type", "register")
                localStorage.removeItem("verify_token")
                localStorage.setItem("verify_token", data.token)
                return res({error: 0, token: data.token })
            })
            .catch(register_storejs => {
                console.log({register_storejs})
                return res({code: 500, result: [CONNECTION_ERROR]})
            })
        })
    },
    verify_register: async ({ token_id, code }) => {
        return new Promise( (res, rej) => {
            axios.post(endpoints.REGISTER_VERIFY,{ code, token_id })
            .then((response) => {
                const {data} = response
                if(data.error === 1)
                    return res({error: 1, message: data.message })
                
                localStorage.setItem("token", data.access)
                localStorage.setItem("refresh",data.refresh)
                
                get().get_profile()
                set({token:data.access, refresh: data.refresh, authenticated: true})
                return res({error: 0, message: data.message })
            })
            .catch(register_storejs => {
                console.log({register_storejs})
                return res({error: 1, result: [CONNECTION_ERROR]})
            })
        })
    },
    verify_login: async ({ id, otp }) => {
        return new Promise( (res, rej) => {
            axios.post(endpoints.CONFIRM_TOKEN,{ otp, id })
            .then((response) => {
                const {data} = response
                if(response.status  !== 200)
                    return res({error: 1, message: data.message })
                
                localStorage.setItem("token", data.access)
                localStorage.setItem("refresh",data.refresh)
                get().get_profile()
                set({token:data.access, refresh: data.refresh,  authenticated: true})
                return res({error: 0, message: LOGIN_SUCCESSFUL })
            })
            .catch(verifyLogin_storejs => {
                console.log({verifyLogin_storejs})
                return res({error: 1, result: [CONNECTION_ERROR]})
            })
        })
    },
    get_profile: async() => {
        axios.get(endpoints.GET_PROFILE)
        .then(({data}) => {
            set({user: data})
            return Promise.resolve()
        })
        .catch(getProfile => {
            console.log({getProfile})
            return Promise.reject()
        })
    },
    signout: () => {
        set({user: {}, authenticated: false, refresh: "", token: ''})
        localStorage.removeItem('token')
        localStorage.removeItem('refresh')
        toast.success(SIGNOUT)

    }

}))
