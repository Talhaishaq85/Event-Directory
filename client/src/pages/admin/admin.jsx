import React,{useState} from 'react'
import "./admin.css";
const Admin = () => {
  const [data,setData] = useState([]);
  return (
    <div className='admin_dash'>
      <table>
        <td>
          <tr>Username</tr>
          <tr>Email</tr>
          <tr>Seller</tr>
          <tr>Country</tr>
          <tr>PhoneNumber</tr>
        </td>
      </table>
      
    </div>
  )
}

export default Admin;
