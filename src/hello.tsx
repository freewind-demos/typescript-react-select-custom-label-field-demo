//import * as React from 'react'
import React, {useState} from 'react'
import Select from 'react-select';

type User = {
  id: string,
  name: string
}

const options: User[] = [
  {id: 'chocolate', name: 'Chocolate'},
  {id: 'strawberry', name: 'Strawberry'},
  {id: 'vanilla', name: 'Vanilla'}
];

export default function Hello() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  return <div>
    <h1>Hello React Select</h1>
    <Select options={options} getOptionLabel={user => user.name} value={selectedUser}
            onChange={user => setSelectedUser(user as User)}
    />
    <div>{JSON.stringify(selectedUser)}</div>
  </div>
};
