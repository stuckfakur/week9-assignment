import { useRouteError } from 'react-router-dom'

interface ErrorPageProps {
  message?: string
  statusText?: string
}

const ErrorPage = () => {
  const error: ErrorPageProps = useRouteError() as ErrorPageProps
  return (
    <div>
      <h1>Oops...</h1>
      <p>Something went wrong</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
