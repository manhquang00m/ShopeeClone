import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input/input'
import { Schema, schemaRegister } from 'src/utils/rule'
import { yupResolver } from '@hookform/resolvers/yup'
type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>
const registerSchema = schemaRegister.pick(['email', 'password', 'confirm_password'])

export default function Register() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                name='email'
                type='email'
                className='mt-8'
                register={register}
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                // classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                errorMessage={errors.password?.message}
                placeholder='Password'
                autoComplete='on'
              />

              <Input
                name='confirm_password'
                register={register}
                type='password'
                className='mt-2'
                // classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                errorMessage={errors.confirm_password?.message}
                placeholder='Confirm Password'
                autoComplete='on'
              />

              <div className='mt-2'>
                <button className='flex w-full items-center justify-center bg-red-500 px-2 py-4 text-sm uppercase text-white hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
