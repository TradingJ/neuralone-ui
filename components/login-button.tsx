'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export function LoginButton() {
  const supabase = createClientComponentClient()

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if (error) {
      console.error('Google login error:', error.message)
    }
  }

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full py-3 px-4 bg-black text-white rounded-lg text-lg hover:bg-gray-800"
    >
      Continue with Google
    </button>
  )
}
