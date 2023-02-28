import './terminal.css'

const numberDivide = (text) => {
    let val = text.replace(/[^0-9.]/g, '');
    if (val.indexOf(".") != '-1') {
        val = val.substring(0, val.indexOf(".") + 3);
    }
    val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return val
}

const Terminal = ({ terminal, order }) => {

    const inputChange = (e) => {
        let numberInputs = ['sum', 'val', 'saleVal', 'buyVal', 'remainVal']
        if (numberInputs.includes(e.target.name)) {
            e.target.value = numberDivide(e.target.value)
        }
    }

    return (
        <div className="terminal-item">
            <div className="order width10">{order + 1}</div>
            <input type="text" className='input-box width100' value={terminal.name} onChange={inputChange} name='name' />
            <input type="text" className='input-box width30' onChange={inputChange} name='sum' />
            <input type="text" className='input-box width100 bg-yellow' onChange={inputChange} name='rsSum' />
            <input type="text" className='input-box width30' onChange={inputChange} name='val' />
            <input type="text" className='input-box width100 bg-yellow' onChange={inputChange} name='rsVal' />
            <input type="text" className='input-box width30' onChange={inputChange} name='saleVal' />
            <input type="text" className='input-box width30' onChange={inputChange} name='buyVal' />
            <input type="text" className='input-box width30' onChange={inputChange} name='remainVal' />
        </div>
    )
}

export default Terminal