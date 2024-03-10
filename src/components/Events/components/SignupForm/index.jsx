import { useForm } from "react-hook-form";

const SignupForm = () => {
    const { register, handleSubmit, reset, formState: {errors} } = useForm()


    const handleClearClick = () => {
        reset()
    }

    const handleSubmitForm = (data) => {
        console.log(data)

    }

    console.log(errors)
    return (
        <form action="" onSubmit={ handleSubmit(handleSubmitForm)}>
            <label htmlFor="">
                Name
                <input {...register('name', {required : true})} required />
            </label>
            <label htmlFor="">
                Age 
                <input {...register('age')} required/>
            </label>
            <label htmlFor="">
                Address
                <input {...register('address')} required/>
            </label>
            <label htmlFor="">
                Zipcode
                <input {...register('zipcode')} required />
            </label>
            <label htmlFor="">
                Phone 
                <input {...register('phone')} required />
            </label>
            <br />
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default SignupForm;