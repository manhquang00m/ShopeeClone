import { FieldValues, UseFormRegister } from 'react-hook-form'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>
  errorMessage?: string
}

export default function Input({ register: registerResult, className, errorMessage, ...rest }: Props) {
  const handleType = () => {
    // if (rest.type === 'password') {
    //   return openEye ? 'text' : 'password'
    // }
    return rest.type
  }
  return (
    <div className={'relative mt-2' + className}>
      <input
        className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
        {...registerResult}
        {...rest}
        type={handleType()}
      />
      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMessage}</div>
    </div>
  )
}
