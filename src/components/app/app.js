import { useState, useEffect } from 'react';
import TerminalList from '../terminal-list';
import Settings from '../settings';

import './app.css';

const getData = (def=false) => {
    const defaultData = {
        terminals: [
            { type: 'Uzcard', name: 'Банк', rsSum: '10107000100010843001', rsVal: '10107840100010843001', id: 101 },
            { type: 'Uzcard', name: 'Иняз', rsSum: '10107000200010843013', rsVal: '10107840400010843008', id: 102 },
            { type: 'Uzcard', name: 'Богдод', rsSum: '10107000900010843011', rsVal: '10107840900010843006', id: 103 },
            { type: 'Uzcard', name: 'Вокзал', rsSum: '10107000300010843002', rsVal: '10107840300010843002', id: 104 },
            { type: 'Uzcard', name: 'Корзинка', rsSum: '10107000700010843004', rsVal: '10107840700010843004', id: 105 },
            { type: 'Uzcard', name: 'Атлас', rsSum: '10107000500010843003', rsVal: '10107840500010843003', id: 106 },
            { type: 'Uzcard', name: 'Норхоз', rsSum: '10107000100010843012', rsVal: '10107840200010843007', id: 107 },
            { type: 'Uzcard', name: 'БАМ', rsSum: '10107000000010843010', rsVal: '10107840900010843005', id: 108 },
            { type: 'Humo', name: 'Банк', rsSum: '10107000400010843200', rsVal: '0', id: 109 },
            { type: 'Humo', name: 'Иняз', rsSum: '10107000500010843213', rsVal: '10107840700010843207', id: 110 },
            { type: 'Humo', name: 'Богдод', rsSum: '10107000300010843211', rsVal: '10107840300010843205', id: 111 },
            { type: 'Humo', name: 'Вокзал', rsSum: '10107000600010843201', rsVal: '0', id: 112 },
            { type: 'Humo', name: 'Корзинка', rsSum: '10107000000010843203', rsVal: '10107840000010843203', id: 113 },
            { type: 'Humo', name: 'Атлас', rsSum: '10107000800010843202', rsVal: '10107840800010843202', id: 114 },
            { type: 'Humo', name: 'Норхоз', rsSum: '10107000400010843212', rsVal: '10107840500010843206', id: 115 },
            { type: 'Humo', name: 'БАМ', rsSum: '10107000200010843210', rsVal: '10107840100010843204', id: 116 },
        ],
        korrs: {
            sumDebet: '10101000100010843001',
            sumKredit: '17301000900001176001',
            valKredit: '10101000100010843009',
            valDebet: '17301000900001176009'
        }
    }

    let localData = JSON.parse(localStorage.getItem('data'))

    return (localData && !def) ? localData : defaultData
}

function App() {

    const [data, setData] = useState(getData())

    const deleteTerminal = (id) => {
        // console.log(id)
        let newTerminals
        let terminals = data.terminals
        let index = terminals.findIndex(elem => elem.id == id)
        if (index > -1) {
            newTerminals = [...terminals.slice(0, index), ...terminals.slice(index + 1)]
            setData({
                ...data,
                terminals: newTerminals
            })
        }
    }

    const addTerminal = (type) => {
        let sortedArrayOfIdOfTerminals = data.terminals.map(item => item.id).sort()
        let maxId = sortedArrayOfIdOfTerminals[sortedArrayOfIdOfTerminals.length - 1]

        let newElement = { type: type, name: 'Новый', rsSum: '-', rsVal: '-', id: maxId + 1 }
        let terminals = data.terminals
        let newTerminals = [...terminals, newElement]
        setData({
            ...data,
            terminals: newTerminals
        })
    }

    const saveData = () => {
        let dataForStorage = JSON.stringify(data)
        localStorage.setItem('data', dataForStorage);
    }

    const loadDefaultData = () => {
        let defaultData = getData(true)
        localStorage.setItem('data', JSON.stringify(defaultData))
        setData(defaultData)
    }

    const { terminals, korrs } = data

    return (
        <div className="App">
            <div className="header">TENGE BANK</div>
            <div className="container">
                <TerminalList type={'Uzcard'} terminals={terminals} deleteTerminal={deleteTerminal} addTerminal={addTerminal} />
                <TerminalList type={'Humo'} terminals={terminals} deleteTerminal={deleteTerminal} addTerminal={addTerminal} />

                <div className="btn-box">
                    <div className="title-box">Отчеты проводок</div>
                    <button className='btn primary-btn'>Выдача нал</button>
                    <button className='btn primary-btn'>Возврат нал</button>
                    <button className='btn primary-btn'>Движение валюты</button>
                </div>

                <div className="title">Настройки</div>
                <Settings korrs={korrs} />
                <div className="btn-box">
                    <button className='btn secondary-btn' onClick={saveData}>Сохранить настройки</button>
                    <button className='btn secondary-btn' onClick={loadDefaultData}>Загрузить данные по дефолту</button>
                </div>
            </div>
        </div>
    );
}

export default App;
