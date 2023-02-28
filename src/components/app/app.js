import { useState, useEffect } from 'react';
import Terminal from '../terminal';
import HeaderList from '../header-list'
import Settings from '../settings';

import './app.css';

function App() {
    const data = {
        terminal: [
            { type: 'Uzcard', name: 'Банк', rsSum: '10107000100010843001', rsVal: '10107840100010843001' },
            { type: 'Humo', name: 'Иняз', rsSum: '10107000400010843200', rsVal: '0' }
        ],
        korr: {
            sumDebet: '10101000100010843001',
            sumKredit: '17301000900001176001',
            valKredit: '10101000100010843009',
            valDebet: '17301000900001176009'
        }
    }

    const { terminal, korr } = data

    return (
        <div className="App">
            <div className="header">TENGE BANK</div>
            <div className="container">
                <div className="title">Uzcard</div>
                <HeaderList />
                <div className="terminal-list">
                    {
                        terminal.filter(item => item.type == 'Uzcard').map((element, index) => {
                            return <Terminal terminal={element} key={index} order={index} />
                        })
                    }
                    <button className='btn secondary-btn'>Добавить терминал</button>
                </div>
                <div className="title">Humo</div>
                <HeaderList />
                <div className="terminal-list">
                    {
                        terminal.filter(item => item.type == 'Humo').map((element, index) => {
                            return <Terminal terminal={element} key={index} order={index} />
                        })
                    }
                    <button className='btn secondary-btn'>Добавить терминал</button>
                </div>
                <div className="btn-box">
                    <div className="title-box">Отчеты проводок</div>
                    <button className='btn primary-btn'>Выдача нал</button>
                    <button className='btn primary-btn'>Возврат нал</button>
                    <button className='btn primary-btn'>Движение валюты</button>
                </div>
                <div className="title">Настройки</div>
                <Settings korr={korr} />
                <div className="btn-box">
                    <button className='btn secondary-btn'>Сохранить настройки</button>
                </div>
            </div>
        </div>
    );
}

export default App;
