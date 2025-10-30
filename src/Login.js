import React, { useState } from 'react'
import './Login.css'
function Login() {
    let [state, setState] = useState("modal ab")
    let [name, setName] = useState("")
    let [password, setPassword] = useState("")
    return (
        <div>

            <li onClick={() => { setState("modal bc") }}>Login</li>
            <div class={state} tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">welcome back</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => (setState("modal ab"))}></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <label className='mt-1'>email</label>
                                <input type="text" className='form-control' placeholder='enter email or phone'
                                    onChange={(event) => { setName(event.target.value) }}
                                />
                                {
                                    (name.length < 3 && name.length > 0) ? (<p className='text-danger'>Name is to short</p>) :
                                        (<p className='text-success'>{name}</p>)
                                }
                                <label className='mt-1'>Password:</label>
                                <input type="text" className='form-control' />
                                <a href="#" className='d-flex justify-content-end mt-1'>forget password</a>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-warning mt-2" type="button">Button</button>
                                </div>
                                <p className='d-flex justify-content-center mt-1'>Do not have an account?<a href="#">Signup</a></p>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login