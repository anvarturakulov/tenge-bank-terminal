import './terminal.css'

const Terminal = ({ terminal, order }) => {
    return (
        <div className="terminal-item">
            <div className="order width10">{order + 1}</div>
            <input type="text" className='input-box width100' value={terminal.name} />
            <input type="text" className='input-box width30' />
            <input type="text" className='input-box width100 bg-yellow' />
            <input type="text" className='input-box width30' />
            <input type="text" className='input-box width100 bg-yellow' />
            <input type="text" className='input-box width30' />
            <input type="text" className='input-box width30' />
            <input type="text" className='input-box width30' />
        </div>
    )
}

export default Terminal