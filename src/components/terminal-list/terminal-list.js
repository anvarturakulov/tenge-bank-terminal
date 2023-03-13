import HeaderList from '../header-list'
import Terminal from '../terminal'

import './terminal-list.css'

const TerminalList = ({ type, terminals, deleteTerminal, addTerminal, changeTerminalsInputs, calculateRemainUsd }) => {
    const totalObj = { sum: 0, usd: 0, sale: 0, buy: 0, remainUsd: 0 }

    const calculateTotal = (total, terminals) => {
        let sum = 0, usd = 0, saleUsd = 0, buyUsd = 0, remainUsd = 0
        terminals.forEach(item => {
            if (item.type == type) {
                if (!isNaN(+item.sum.replace(/ /g, ''))) {
                    sum = sum + (+item.sum.replace(/ /g, ''))
                }
                if (!isNaN(+item.usd.replace(/ /g, ''))) {
                    usd = usd + (+item.usd.replace(/ /g, ''))
                }
                if (!isNaN(+item.saleUsd.replace(/ /g, ''))) {
                    saleUsd = saleUsd + (+item.saleUsd.replace(/ /g, ''))
                }
                if (!isNaN(+item.buyUsd.replace(/ /g, ''))) {
                    buyUsd = buyUsd + (+item.buyUsd.replace(/ /g, ''))
                }
                if (!isNaN(+item.remainUsd.replace(/ /g, ''))) {
                    remainUsd = remainUsd + (+item.remainUsd.replace(/ /g, ''))
                }
            }
        })
        total.sum = sum
        total.usd = usd
        total.sale = saleUsd
        total.buy = buyUsd
        total.remain = remainUsd

        return total
    }

    const total = calculateTotal(totalObj, terminals)
    return (
        <>
            <div className="title">{type}</div>
            <HeaderList view={false} total={{ total }} />
            <div className="terminal-list">
                {
                    terminals.filter(item => item.type == type).map((element, index) => {
                        return <Terminal terminal={element} key={element.id} order={index} deleteTerminal={deleteTerminal} changeTerminalsInputs={changeTerminalsInputs} calculateRemainUsd={calculateRemainUsd} />
                    })
                }
                <HeaderList view={true} total={total} />
                <button className='btn secondary-btn' onClick={() => addTerminal(type)}>Добавить терминал</button>
            </div>
        </>

    )
}

export default TerminalList