import styles from './Login.module.css'
import Textinput from '../../components/TextInput/Textinput';
import loginSchemma from '../../Schemmas/loginSchemma';
import { useFormik } from 'formik';
import { login } from '../../api/internal';
import {setUser} from '../../store/userSlice';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {

    const navigat = Navigate();
    const dispatch = useDispatch();

    const [error, setError] = useState('');

    const handleLogIn = async () =>{

        const data = {
            username: values.username,
            password: values.password
        }
        const response = await login(data)

        if(response === 200){
            const user ={
                _id : response.data.user._id,
                email: response.data.user.email,
                username: response.data.user.username,
                auth: response.data.user.auth
            }

            dispatch(setUser(user));

            navigat('/');
        }
        else if(response.code === 'ERR_BAD_REQUEST'){
            setError(response.response.data.errorMessage);
        }
    }

    const {values, touched, handleBlur, handleChange, errors} = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: loginSchemma
    })
    return(
        <div className={styles.loginwrapper}>
            <div className={styles.loginHeading}>Log in to your account</div>
            <Textinput 
            type="text" 
            value= {values.username}
            name= "username"
            onBlur= {handleBlur}
            onChange = {handleChange}
            placeholder = "username"
            error = {errors.username && touched.username ? 1 : undefined}
            errormessage = {errors.username} 
            />
            <Textinput 
            type = "password"
            name = "password"
            value = {values.password}
            onBlur = {handleBlur}
            onChange = {handleChange}
            placeholder = "password"
            error = {errors.password && touched.password ? 1 : undefined}
            errormessage = {errors.password}
            />
            <button className={styles.loginButton} onClick={handleLogIn}>log in</button>
            <span>don't have an account? <button className={styles.creteAccount}>Register</button></span>
        </div>
    )
}


export default  Login;