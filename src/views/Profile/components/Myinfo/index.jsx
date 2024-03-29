import { useForm } from "react-hook-form";

import styles from './MyInfo.module.css';
import { json } from "react-router-dom";
import { useEffect } from "react";

const USER_DATA = 'userData'

const MyInfo = () => {
    const { handleSubmit, register, setValue} = useForm();

    useEffect(() => {
        try {
            const userData = JSON.parse(localStorage.getItem(USER_DATA )) || {}
            setValue('name', userData?.name)
            setValue('age', userData?.age)
            setValue('email', userData?.email)
        } catch (error) {
            
        }
    })
        
    const handleFormSubmit = (data) => {
        try {
            localStorage.setItem(USER_DATA, JSON.stringify(data));
            alert('usuario actualizado')
        } catch (error) {
            alert('Ha ocurrido un error')

        }
    }

    return(
        <form action="" onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
            <label htmlFor="" className={styles.label}>
                Name
                <input {...register('name', {required : true, minLength: 1, maxLength: 120})} className={styles.input} />
            </label>

            <label htmlFor="" className={styles.label}>
                Email
                <input {...register('email', {required : true, minLength: 1, maxLength: 120})} className={styles.input} />
            </label>

            <label htmlFor="" className={styles.label}>
                Age
                <input 
                    {...register('age', {required : true, min: 1, max: 120, valueAsNumber: true})} 
                    className={styles.input} 
                    type="number"
                />
            </label>
            <button type="submit"className={styles.submitButton}>Save</button>
        </form>
    )
}

export default MyInfo