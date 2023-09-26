import { Link } from 'react-router-dom';
// import '../../../assets/css/styles.css';

export default function Navbar() {
  return (
    <div>
      <nav>
        <h1>St Peters UMC</h1>
        <Link to="home">Home</Link>
        <Link to="members">Members</Link>
        <Link to="finance">Finance</Link>
        <Link to="events">Events</Link>
        <Link to="reports">Reports</Link>
        <Link to="settings">Settings</Link>
        <Link to="/">Logout</Link>
      </nav>
    </div>
  );
}
