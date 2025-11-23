import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Reg() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleRegister = () => {
    const usernameRegex = /^[A-Za-z0-9]+$/;
    if (!username || !password || !confirmPassword) {
      alert('Please fill in all fields.');return;}
    if (!usernameRegex.test(username)) {
      alert('Username should not contain special characters!');return;}
    if (password !== confirmPassword) {alert('Passwords do not match!');return;}
    localStorage.setItem('regUsername', username);
    localStorage.setItem('regPassword', password);
    alert('Registration successful!');navigate('/login');
  };
  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <input type="text"placeholder="Username"value={username} onChange={e => setUsername(e.target.value)}style={styles.input}/>
      <input type="password"placeholder="Password"value={password}onChange={e => setPassword(e.target.value)}style={styles.input}/>
      <input type="password"placeholder="Confirm Password"value={confirmPassword}onChange={e => setConfirmPassword(e.target.value)}style={styles.input}/>
      <button onClick={handleRegister} style={styles.button}>Register</button>
    </div>);}
const styles = {
  container: { width: 300, margin: '100px auto', textAlign: 'center' },
  input: { width: '100%', padding: 10, margin: '10px 0' },
  button: { width: '100%', padding: 10 }};