import React from 'react'
import Router from 'next/router'

export type UserProps = {
  id: number;
  email: string;
  name: string;
}

const User: React.FC<{user: UserProps}> = ({ user }) => {
  return (
    <div>
        <h2>{user.name}</h2>
    </div>
  )
}

export default User
