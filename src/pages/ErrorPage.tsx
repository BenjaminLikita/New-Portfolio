import { Navigate, useNavigate } from "react-router-dom"



const ErrorPage = () => {
  let navigate = useNavigate()
  navigate('/')
  return <Navigate to="/" />
}

export default ErrorPage