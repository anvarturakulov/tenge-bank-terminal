import './settings.css'

const Settings = ({ korrs }) => {
    
    return (
        <div>
            <div className="settings-header">
                <div className='title-item'>Сум кредит счет</div>
                <div className='title-item'>Сум дебет счет</div>
                <div className='title-item'>Вал кредит счет</div>
                <div className='title-item'>Вал дебет счет</div>
            </div>
            <div className="settings-box">
                <input type="text" className='input-set' value={korrs.sumKredit} name='sumKredit'/>
                <input type="text" className='input-set' value={korrs.sumDebet} name='sumDebet' />
                <input type="text" className='input-set' value={korrs.valKredit} name='valKredit' />
                <input type="text" className='input-set' value={korrs.valDebet} name='valDebet' />
            </div>
        </div>

    )
}

export default Settings