type Props = {
  status: number
  message: string
}

const ErrorHandler = ({ status, message }: Props) => {
  return (
    <div className='flex h-screen justify-center items-center space-x-3'>
      <p className='text-3xl'>{status}</p>
      <div className='border-l border-gray-500 h-5' />
      <p className='text-xl'>{message}</p>
    </div>
  )
}

export default ErrorHandler
