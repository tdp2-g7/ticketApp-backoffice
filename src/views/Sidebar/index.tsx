import React, { FunctionComponent } from 'react';
import { ISidebarProps } from './types';

const Sidebar: FunctionComponent<ISidebarProps> = () => (
      <aside>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/productos">Productos</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </aside>
);

export default Sidebar;
