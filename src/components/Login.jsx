import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { data } from 'autoprefixer'
// const DIRECTUS_API_TOKEN = '' || process.env.REACT_APP_NODE_URL


const API_NODE = 'http://localhost:3001/api/user'
const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isConnected, setIsConnected] = useState(false)
    const [error, setError] = useState(false)
    // const [allUser, setUser] = useState({})
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // console.log(process.DIRECTUS_API_TOKEN)

    useEffect(async () => {
        // let data = await getUser()

        // console.log(data)

    }, [isConnected])



    const getUser = async () => {
        setIsLoading(true)
        console.log('url API', `${API_NODE}/?email=${email}&password=${password}`)
        const urlEmailFilter = `${API_NODE}/?email=${email}&password=${password}`
        try {
            const res = await axios.get(urlEmailFilter)
            const data = res.data;
            console.log('data', data)
            setUser(data?.[0])
            setIsConnected(data.length>0 ? true : false)

            console.log(res);
        } catch (err) {
            if (err.response) {
                // ✅ log status code here
                console.log(err.response.status);
                console.log(err.message);
                console.log(err.response.headers); // 👉️ {... response headers here}
                console.log(err.response.data); // 👉️ {... response data here}
            }

        }
        finally {
            setIsLoading(false)
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
        let userres = getUser()
        console.log(userres[0])
        setIsLoading(true)

    }

    const handleChangeMail = (e) => {
        console.log('email')
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {

        console.log('password')
        setPassword(e.target.value)
    }

    const handleLogout = (e) => {

        console.log('logout')

        setIsConnected(false)
        setError(false)
        // const [allUser, setUser] = useState({}
        setUser()
        setEmail('')
        setPassword('')
        setIsLoading(false)
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold"> se Connecter!</h1>
                        <p className="py-6">Connecter vous sur uber calèche pour etre mis en relation avec un transporteur.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control" >
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" onChange={handleChangeMail} id="emailId" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" onChange={handleChangePassword} id="passwordId" />

                            </div>
                            <div className="form-control mt-6">
                                {!isConnected ?
                                    <button className="btn btn-primary" id="login">Login</button>
                                    :
                                    <button className="btn btn-primary " onClick={handleLogout} id="logout">Logout</button>
                                }
                            </div>
                        </form>
                        <label className="flex flex-col label text-center ">
                            {isLoading && <p>...</p>}
                            {error && <p>{error.message}</p>}
                            {console.log('userTESt', { user })}
                            {isConnected && `${user?.firstname} you re connected with succes`}
                        </label>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Login