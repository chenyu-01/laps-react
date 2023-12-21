import { React } from 'react';
import Layout from './Layout.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';
import { useContext } from 'react';
export default function Dashboard() {
  const { userData } = useContext(AuthContext);

  return (
    <Layout>
      <div className={'prose flex flex-col mx-auto container'}>
        <h1 className={'mt-5 mx-auto'}>Profile</h1>
        <h2>Id: {userData.id}</h2>
        <h2>Role: {userData.role}</h2>
        <h2>User: {userData.name}</h2>
        <h2>Email: {userData.email}</h2>
        {userData.role === 'User' ? (
          <h3>Waiting for Admin to assign you your role</h3>
        ) : null}
      </div>
    </Layout>
  );
}
