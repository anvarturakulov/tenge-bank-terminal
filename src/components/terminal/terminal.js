import './terminal.css'
import NumberDivide from '../../reports/number-divide'


const Terminal = ({ terminal, order, deleteTerminal, changeTerminalsInputs, calculateRemainUsd }) => {

    const inputChange = (e, id) => {
        let numberInputs = ['sum', 'usd', 'saleUsd', 'buyUsd']

        if (numberInputs.includes(e.target.name)) {
            e.target.value = NumberDivide(e.target.value)
            calculateRemainUsd(e, id)
        }
        changeTerminalsInputs(e, id)
    }

    return (
        <div className="terminal-item">
            <div className="order width10">{order + 1}</div>
            <input
                type="text"
                className='input-box width20'
                value={terminal.name}
                onChange={(e) => inputChange(e, terminal.id)}
                name='name' />
            <input
                type="text"
                className='input-box width30'
                value={terminal.sum}
                onChange={(e) => inputChange(e, terminal.id)}
                name='sum' />
            <input
                type="text"
                className='input-box width100 bg-yellow'
                value={terminal.rsSum}
                onChange={(e) => inputChange(e, terminal.id)}
                name='rsSum' />
            <input
                type="text"
                className='input-box width30'
                value={terminal.usd}
                onChange={(e) => inputChange(e, terminal.id)}
                name='usd' />
            <input
                type="text"
                className='input-box width100 bg-yellow'
                value={terminal.rsUsd}
                onChange={(e) => inputChange(e, terminal.id)}
                name='rsUsd' />
            <input
                type="text"
                className='input-box width20'
                value={terminal.saleUsd}
                onChange={(e) => inputChange(e, terminal.id)}
                name='saleUsd' />
            <input
                type="text"
                className='input-box width20'
                value={terminal.buyUsd}
                onChange={(e) => inputChange(e, terminal.id)}
                name='buyUsd' />
            <input
                type="text"
                className='input-box width20'
                value={terminal.remainUsd}
                disabled
                // onChange={(e) => inputChange(e, terminal.id)}
                name='remainUsd' />

            <div className='btn-delete' onClick={() => deleteTerminal(terminal.id)}>-</div>
        </div>
    )
}

export default Terminal