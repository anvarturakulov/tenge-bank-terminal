import { useState } from 'react';
import TerminalList from '../terminal-list';
import NumberDivide from '../../reports/number-divide';
import Settings from '../settings';
import { CashOut, CashBack } from '../../reports'

import './app.css';

const getData = (def = false) => {
    const defaultData = {
        terminals: [
            { type: 'Uzcard', name: 'Банк', rsSum: '10107000100010843001', rsUsd: '10107840100010843001', id: 101, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Uzcard', name: 'Иняз', rsSum: '10107000200010843013', rsUsd: '10107840400010843008', id: 102, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Uzcard', name: 'Богдод', rsSum: '10107000900010843011', rsUsd: '10107840900010843006', id: 103, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Uzcard', name: 'Вокзал', rsSum: '10107000300010843002', rsUsd: '10107840300010843002', id: 104, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Uzcard', name: 'Корзинка', rsSum: '10107000700010843004', rsUsd: '10107840700010843004', id: 105, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Uzcard', name: 'Атлас', rsSum: '10107000500010843003', rsUsd: '10107840500010843003', id: 106, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Uzcard', name: 'Норхоз', rsSum: '10107000100010843012', rsUsd: '10107840200010843007', id: 107, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Uzcard', name: 'БАМ', rsSum: '10107000000010843010', rsUsd: '10107840900010843005', id: 108, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Humo', name: 'Банк', rsSum: '10107000400010843200', rsUsd: '0', id: 109, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Humo', name: 'Иняз', rsSum: '10107000500010843213', rsUsd: '10107840700010843207', id: 110, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Humo', name: 'Богдод', rsSum: '10107000300010843211', rsUsd: '10107840300010843205', id: 111, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Humo', name: 'Вокзал', rsSum: '10107000600010843201', rsUsd: '0', id: 112, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Humo', name: 'Корзинка', rsSum: '10107000000010843203', rsUsd: '10107840000010843203', id: 113, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Humo', name: 'Атлас', rsSum: '10107000800010843202', rsUsd: '10107840800010843202', id: 114, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Humo', name: 'Норхоз', rsSum: '10107000400010843212', rsUsd: '10107840500010843206', id: 115, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
            { type: 'Humo', name: 'БАМ', rsSum: '10107000200010843210', rsUsd: '10107840100010843204', id: 116, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' },
        ],
        korrs: {
            sumDebet: '17301000900001176001',
            sumKredit: '10101000100010843001',
            usdKredit: '10101000100010843009',
            usdDebet: '17301000900001176009',

            usdCash17101840: '17101840200001176018',
            usdCash17101000: '17101000900001176018',
            usdCash17301840: '17301840400001176001',
            usdCash10101840: '10101840500010843001',
            usdCash45401000: '454010007000110843028',
            courseUsdSentralBank: 11300,
            courseUsdSale: 11350,
            courseUsdBuy: 11200
        }
    }

    let localData = JSON.parse(localStorage.getItem('data'))

    return (localData && !def) ? localData : defaultData
}

function App() {
    const [data, setData] = useState(getData())

    const deleteTerminal = (id) => {
        let newTerminals
        let terminals = data.terminals
        let index = terminals.findIndex(elem => elem.id == id)
        if (index > -1) {
            newTerminals = [...terminals.slice(0, index), ...terminals.slice(index + 1)]
            setData(data => ({
                ...data,
                terminals: newTerminals
            }))
        }
    }

    const addTerminal = (type) => {
        let sortedArrayOfIdOfTerminals = data.terminals.map(item => item.id).sort()
        let maxId = sortedArrayOfIdOfTerminals[sortedArrayOfIdOfTerminals.length - 1]
        let newElement = { type: type, name: 'Новый', rsSum: '-', rsUsd: '-', id: maxId + 1, sum: '', usd: '', saleUsd: '', buyUsd: '', remainUsd: '' }
        let terminals = data.terminals
        let newTerminals = [...terminals, newElement]
        setData(data => ({
            ...data,
            terminals: newTerminals
        }))
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

    const changeKorrsInputs = (e) => {
        let targetName = e.target.name
        let newKorrs = data.korrs
        newKorrs[targetName] = e.target.value

        setData(data => ({
            ...data,
            korrs: newKorrs
        }))
    }

    const changeTerminalsInputs = (e, id) => {
        let target = e.target
        let newTerminals = [...terminals]
        let index = newTerminals.findIndex(elem => elem.id == id)

        if (index > -1) {
            newTerminals[index][target.name] = target.value

            setData(data => ({
                ...data,
                terminals: newTerminals
            }))
        }

    }

    const calculateRemainUsd = (e, id) => {
        let parentNode = e.target.parentNode

        let usd = +parentNode.querySelector('input[name="usd"]').value.replace(/ /g, '')
        let saleUsd = +parentNode.querySelector('input[name="saleUsd"]').value.replace(/ /g, '')
        let buyUsd = +parentNode.querySelector('input[name="buyUsd"]').value.replace(/ /g, '')
        let remainUsd = usd - saleUsd + buyUsd

        if (remainUsd < 0) remainUsd = 0
        e.target.value = NumberDivide(e.target.value)

        let newTerminals = [...terminals]
        let index = newTerminals.findIndex(elem => elem.id == id)

        if (index > -1) {
            newTerminals[index]['remainUsd'] = NumberDivide(`${remainUsd}`)

            setData(data => ({
                ...data,
                terminals: newTerminals
            }))
        }

        // console.log(remainUsd)
    }

    const { terminals, korrs } = data

    const cashOutReport = () => {
        let report = CashOut(data)
        console.log(report)
        navigator.clipboard.writeText(report)
    }

    const cashBackReport = () => {
        let report = CashBack(data)
        console.log(report)
        navigator.clipboard.writeText(report)
    }

    return (
        <div className="App">
            <div className="header">TENGE BANK</div>
            <div className="container">
                <TerminalList type={'Uzcard'} terminals={terminals} deleteTerminal={deleteTerminal} addTerminal={addTerminal} changeTerminalsInputs={changeTerminalsInputs} calculateRemainUsd={calculateRemainUsd} />
                <TerminalList type={'Humo'} terminals={terminals} deleteTerminal={deleteTerminal} addTerminal={addTerminal} changeTerminalsInputs={changeTerminalsInputs} calculateRemainUsd={calculateRemainUsd} />

                <div className="btn-box">
                    <div className="title-box">Отчеты проводок</div>
                    <button className='btn primary-btn' onClick={cashOutReport}>Выдача нал</button>
                    <button className='btn primary-btn' onClick={cashBackReport}>Возврат нал</button>
                </div>

                <div className="title">Настройки</div>
                <Settings korrs={korrs} changeKorrsInputs={changeKorrsInputs} />
                <div className="btn-box">
                    <button className='btn secondary-btn' onClick={saveData}>Сохранить настройки</button>
                    <button className='btn secondary-btn' onClick={loadDefaultData}>Загрузить данные по дефолту</button>
                </div>
            </div>
        </div>
    );
}

export default App;
