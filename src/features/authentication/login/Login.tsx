import { Button, Input } from '@varum-org/varum-ui/ui'
import { useRouter } from 'next/navigation'
import type { Key } from 'react'
import React from 'react'

import AppAuthLayout from '@/components/layout/AppAuthLayout'
import { ROUTE_PATH } from '@/utils/constants/route'
import type { ILoginRequest } from '@/utils/types/interfaces/request/ILoginRequest'

type LoginProps = {
  onLogin: (credentials: ILoginRequest) => void
}

const Login = ({ onLogin }: LoginProps) => {
  const router = useRouter()
  const [formState, setFormState] = React.useState<ILoginRequest>({
    email: 'admin@gmail.com',
    password: '123456',
  })

  const handleChange = (value: Key, name: string) =>
    setFormState((prev) => ({ ...prev, [name]: value }))
  return (
    <AppAuthLayout>
      <div>
        <h2 className='mb-8 w-full text-3xl font-bold'>Welcome to Tibe.vn</h2>
        <p className='mb-4 text-[20px] font-medium'>Sign in</p>
        <div className='flex flex-col items-center gap-4'>
          <Input
            value={formState.email}
            onChange={(value: Key) => handleChange(value, 'email')}
            placeholder='Email'
            fullWidth
          />
          <Input
            value={formState.password}
            onChange={(value: Key) => handleChange(value, 'password')}
            type='password'
            placeholder='Password'
            fullWidth
          />
          <Button
            fullWidth
            onClick={() => {
              onLogin(formState)
            }}
          >
            Login
          </Button>
          <div
            className='cursor-pointer text-center text-[14px] text-main'
            onClick={() => router.push(`${ROUTE_PATH.forgot_password}`)}
          >
            Forgot Password
          </div>
        </div>
      </div>
    </AppAuthLayout>
  )
}

export default Login
