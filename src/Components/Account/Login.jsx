import { Field, Formik } from "formik"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const initialValue={
        email:'',
        password:'',
    }
  return (
    <Formik initialValues={initialValue} onSubmit={(values)=>{
        console.log(values);
        navigate('/')
    }}>
        {({values,handleSubmit,handleChange})=>(
            <div className="h-screen flex items-center">

            <form onSubmit={handleSubmit} className=" relative w-[300px] flex flex-col gap-5 p-5 mx-auto shadow-2xl">
            <h1 className="text-center text-2xl font-bold">LOGIN</h1>

            <Field type='email' id='email' name='email' values={values.email} onChange={handleChange} placeholder='Email' className='p-1 text-center rounded-sm border-2'></Field>

            <Field type='password' id='password' name='password' values={values.password} onChange={handleChange} placeholder='Password' className='p-1 text-center rounded-sm border-2'></Field>

            <button type="submit" className="bg-blue-600 p-1 font-mono">Login</button>

        </form>
            </div>
        )}
    </Formik>
  )
}

export default Login