import React from 'react';
import { Link } from 'react-router-dom';
import { github } from '../assets';
import { styles } from '../styles';

function Project() {
  return (
    <footer className={`w-full flex justify-center items-center py-4`}>
      <div>
        <div className="p-2 bg">
          <Link to={'https://github.com/danielcorreia-dev/threejs-port'}>
            <img
              src={github}
              alt="github"
              className="h-16 w-16 object-contain hover:opacity-75 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Project;
