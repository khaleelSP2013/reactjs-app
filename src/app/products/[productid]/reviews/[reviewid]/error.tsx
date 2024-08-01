'use client'
const ErrorPage = ({error,reset}:{
    error:Error;
    reset:()=>void
}) => {
  return (
    <>
      <p>
        {error.message}<button onClick={reset}>Try Again</button>
      </p>
    </>
  )
}

export default ErrorPage
