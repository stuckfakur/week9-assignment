import FooterComponent from '../Components/Elements/Footer/Footer'
import NavHeader from '../Components/Elements/Header/Navigation'
import RegisterLayout from '../Components/Layouts/RegisterLayouts'

const RegisterPage: React.FC = () => {
  return (
    <>
      <NavHeader hidden>Register</NavHeader>
      <RegisterLayout />
      <FooterComponent />
    </>
  )
}

export default RegisterPage
