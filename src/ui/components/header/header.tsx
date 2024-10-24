// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <header>
        <h2>TeacherHunter</h2>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Minhas aulas</a></li>
          </ul>
        </nav>
      </header>
      <div className="ball top"></div>
      <div className="ball bottom"></div>
    </>
  );
};

export default Header;