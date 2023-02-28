import './settings.css'

const Settings = ({ korr }) => {
    
    return (
        <div>
            <div className="settings-header">
                <div className='title-item'>Сум кредит счет</div>
                <div className='title-item'>Сум дебет счет</div>
                <div className='title-item'>Вал кредит счет</div>
                <div className='title-item'>Вал дебет счет</div>
            </div>
            <div className="settings-box">
                <input type="text" className='input-set' value={korr.sumKredit} name='sumKredit'/>
                <input type="text" className='input-set' value={korr.sumDebet} name='sumDebet' />
                <input type="text" className='input-set' value={korr.valKredit} name='valKredit' />
                <input type="text" className='input-set' value={korr.valDebet} name='valDebet' />
            </div>
        </div>

    )
}

export default Settings