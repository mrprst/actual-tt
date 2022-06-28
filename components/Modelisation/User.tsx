import React from 'react'

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
