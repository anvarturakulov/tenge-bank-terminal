import HeaderList from '../header-list'
import Terminal from '../terminal'

import './terminal-list.css'

const TerminalList = ({ type, terminals, deleteTerminal, addTerminal }) => {
    return (
        <>
            <div className="title">{type}</div>
            <HeaderList />
            <div className="terminal-list">
                {
                    terminals.filter(item => item.type == type).map((element, index) => {
                        return <Terminal terminal={element} key={element.id} order={index} deleteTerminal={deleteTerminal} />
                    })
                }
                <button className='btn secondary-btn' onClick={()=> addTerminal(type)}>Добавить терминал</button>
            </div>
        </>

    )
}

export default TerminalList