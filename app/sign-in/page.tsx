import { auth } from '@/auth'
import { LoginButton } from '@/components/login-button'
import { LoginForm } from '@/components/login-form'
import { Separator } from '@/components/ui/separator'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
const handleGoogleLogin = async () => {
  const supabase = createClientComponentClient()
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
  if (error) {
    console.error('Google login error:', error.message)
  }
}


export default async function SignInPage() {
  const cookieStore = cookies()
  const session = await auth({ cookieStore })
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] flex-col items-center justify-center py-10">
      <div className="w-full max-w-sm">
        <LoginForm action="sign-in" />
        <Separator className="my-4" />
        <div className="flex justify-center">
          <LoginButton />
        </div>
      </div>
    </div>
  )
}
