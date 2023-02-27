import { useState, useEffect } from 'react';
import Terminal from '../terminal';
import HeaderList from '../header-list'

import './app.css';

function App() {
    const data = [
        { type: 'Uzcard', name: 'Банк', rsSum: '10107000100010843001', rsVal: '10107840100010843001' },
        { type: 'Humo', name: 'Банк', rsSum: '10107000400010843200', rsVal: '0' }
    ]
    return (
        <div className="App">
            <div className="header">TENGE BANK</div>
            <div className="container">
                <div className="title">Uzcard</div>
                <HeaderList />
                <div className="terminal-list">
                    {
                        data.filter(item => item.type == 'Uzcard').map((element, index) => {
                            return <Terminal terminal={element} key={index} order={index} />
                        })
                    }
                    <button className='btn primary-btn'>Добавить терминал</button>
                </div>
                <div className="title">Humo</div>
                <HeaderList />
                <div className="terminal-list">
                    {
                        data.filter(item => item.type == 'Humo').map((element, index) => {
                            return <Terminal terminal={element} key={index} order={index} />
                        })
                    }
                    <button className='btn primary-btn'>Добавить терминал</button>
                </div>
                <div className="btn-box">
                    <div className="title">Отчеты проводок</div>

                    <button className='btn secondary-btn'>Выдача нал</button>
                    <button className='btn secondary-btn'>Возврат нал</button>
                    <button className='btn secondary-btn'>Сохранить настройки</button>
                </div>
            </div>
        </div>
    );
}

export default App;
