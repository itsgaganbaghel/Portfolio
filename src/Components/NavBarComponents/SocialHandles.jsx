import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { RxLinkedinLogo } from 'react-icons/rx'

const SocialHandles = () => {
  return (
    <section className='flex gap-4 text-3xl'>
      <a href='https://github.com/itsgaganbaghel' target='_blank'>
        <FaGithubSquare />
      </a>
      <a href='https://www.linkedin.com/in/itsgaganbaghel/' target='_blank'>
        <RxLinkedinLogo />

      </a>
    </section>
  )
}

export default SocialHandles