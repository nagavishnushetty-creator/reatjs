import React, { useState } from 'react';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleLogin = () => {
    const storedUser = localStorage.getItem('regUsername');
    const storedPass = localStorage.getItem('regPassword');
    if (username === storedUser && password === storedPass) {
      setMessage('Login successful!');} 
    else {setMessage('Invalid credentials.');}};
  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <input type="text"placeholder="Username"value={username}onChange={e => setUsername(e.target.value)}style={styles.input}/>
      <input type="password"placeholder="Password"value={password}onChange={e => setPassword(e.target.value)}style={styles.input}/>
      <button onClick={handleLogin} style={styles.button}>
        Login</button>
      <p>{message}</p>
    </div>);}
const styles = {
  container: { width: 300, margin: '100px auto', textAlign: 'center' },
  input: { width: '100%', padding: 10, margin: '10px 0' },
  button: { width: '100%', padding: 10 }};