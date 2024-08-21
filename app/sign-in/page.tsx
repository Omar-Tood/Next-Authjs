import LoginGithub from '@/components/LoginGithub'
import React from 'react'

const SignIn = () => {
  return (
    <div className="w-full flex mt-20 justify-center">
      <section className="flex flex-col w-[400px]">
       <h1>Sign In</h1>
        

        <LoginGithub/>

      </section>
    </div>
  )
}

export default SignIn