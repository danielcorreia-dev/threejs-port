import React from 'react';
import { Link } from 'react-router-dom';
import { github } from '../assets';
import { styles } from '../styles';
import { members } from '../constants';

function Project() {
  return (
    <footer
      className={`w-full flex sm:flex-row justify-between items-center py-4 max-w-7xl mx-auto px-2`}
    >
      <div className="p-2">
        <Link to={'https://github.com/danielcorreia-dev/threejs-port'}>
          <img
            src={github}
            alt="github"
            className="h-16 w-16 object-contain hover:opacity-75 transition-opacity"
          />
        </Link>
      </div>
      <div className="flex flex-col ">
        <p className={`${styles.sectionSubText}`}>Members: </p>
        <ul className="list-none text-sm">
          {members.map((member) => (
            <li key={member.name} className='py-[1px]'>
              <Link
              to={member.github} className='hover:opacity-80'>
                {member.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className={`${styles.sectionSubText}`}>Hours Worked</h3>
        <p>60 HOURS</p>
      </div>
    </footer>
  );
}

export default Project;
