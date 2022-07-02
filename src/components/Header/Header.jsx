import React from 'react';
import { ActionPanel } from '../Common/ActionPanel/ActionPanel';
import './Header.scss';
import { addCounter, removeCounter } from '../../store/slices/CounterSlice';

export function Header() {
  return (
    <header className="header">
        <div className="header__wrapper wrapper">
            <a href="https://datagile.ru/" target="_blank" rel="noreferrer"> 
                <span className="icon icon-logo"></span>
            </a>
            <ActionPanel 
                decrement={removeCounter}
                increment={addCounter}
            />
        </div>
    </header>
  );
}