import { Outlet } from 'react-router-dom';
import Navbar from './DhatriNavbar';
//import '../DStyles/Layout.css'; 
function Layout() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
