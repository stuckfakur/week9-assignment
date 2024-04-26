import { Link } from 'react-router-dom'
import FormLogin from '../Fragments/FormLogin.tsx'

const LoginLayouts = () => {
  return (
    <div className="grid justify-items-center">
      <div className="group mt-12 grid w-full justify-items-center gap-5 rounded-md bg-slate-200 p-4 shadow transition duration-300 hover:bg-slate-100 sm:w-[500px]">
        <h1 className="text-2xl font-bold">Login Page</h1>
        <FormLogin />
        <p>
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-sm underline opacity-40 hover:opacity-100 group-hover:text-red-600"
          >
            Create account now
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginLayouts
