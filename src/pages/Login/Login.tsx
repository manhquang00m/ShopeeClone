// import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div>
      <div className='bg-orange'>
        {/* <Helmet>
          <title>Đăng nhập | Shopee Clone</title>
          <meta name='description' content='Đăng nhập vào dự án Shopee Clone' />
        </Helmet> */}
        <div className='container'>
          <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='rounded bg-white p-10 shadow-sm' noValidate onSubmit={onSubmit}>
                <div className='text-2xl'>Đăng nhập</div>
                <input name='email' type='email' className='mt-8' placeholder='Email' />
                <input
                  name='password'
                  type='password'
                  className='mt-2'
                  //   classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                  placeholder='Password'
                  autoComplete='on'
                />
                <div className='mt-3'>
                  <button
                    type='submit'
                    className='flex  w-full items-center justify-center bg-red-500 px-2 py-4 text-sm uppercase text-white hover:bg-red-600'
                  >
                    Đăng nhập
                  </button>
                </div>
                <div className='mt-8 flex items-center justify-center'>
                  <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                  <Link className='ml-1 text-red-400' to='/register'>
                    Đăng ký
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
