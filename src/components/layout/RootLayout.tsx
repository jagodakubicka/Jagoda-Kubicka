import { Outlet } from 'react-router-dom';

//styles

import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
