import './settings.css'

const Settings = ({ korrs, changeKorrsInputs }) => {

    return (
        <div>
            <div className='settings-title'>Для выдачи</div>
            <div className="settings-header">
                <div className='title-item'>Сум кредит счет</div>
                <div className='title-item'>Сум дебет счет</div>
                <div className='title-item'>Вал кредит счет</div>
                <div className='title-item'>Вал дебет счет</div>
            </div>
            <div className="settings-box">
                <input type="text" className='input-set' value={korrs.sumKredit} name='sumKredit' onChange={changeKorrsInputs} />
                <input type="text" className='input-set' value={korrs.sumDebet} name='sumDebet' onChange={changeKorrsInputs} />
                <input type="text" className='input-set' value={korrs.usdKredit} name='usdKredit' onChange={changeKorrsInputs} />
                <input type="text" className='input-set' value={korrs.usdDebet} name='usdDebet' onChange={changeKorrsInputs} />
            </div>

            <div className='settings-title'>Для возврата</div>
            <div className="settings-header">
                <div className='title-item'>Cч 17101840</div>
                <div className='title-item'>Cч 17101000</div>
                <div className='title-item'>Cч 17301840</div>
                <div className='title-item'>Cч 10101</div>
            </div>

            <div className="settings-box">
                <input type="text" className='input-set' value={korrs.usdCash17101840} name='usdCash17101840' onChange={changeKorrsInputs} />
                <input type="text" className='input-set' value={korrs.usdCash17101000} name='usdCash17101000' onChange={changeKorrsInputs} />
                <input type="text" className='input-set' value={korrs.usdCash17301840} name='usdCash17301840' onChange={changeKorrsInputs} />
                <input type="text" className='input-set' value={korrs.usdCash10101840} name='usdCash10101840' onChange={changeKorrsInputs} />

            </div>
            <div className="settings-header ">
                <div className='title-item'>сч 45401000</div>
                <div className='title-item'>Курс USD - ЦБ</div>
                <div className='title-item'>Курс USD для продажи</div>
                <div className='title-item'>Курс USD для покупки</div>
            </div>
            <div className="settings-box">
                <input type="text" className='input-set' value={korrs.usdCash45401000} name='usdCash45401000' onChange={changeKorrsInputs} />
                <input type="number" className='input-set' value={korrs.courseUsdSentralBank} name='courseUsdSentralBank' onChange={changeKorrsInputs} />
                <input type="number" className='input-set' value={korrs.courseUsdSale} name='courseUsdSale' onChange={changeKorrsInputs} />
                <input type="number" className='input-set' value={korrs.courseUsdBuy} name='courseUsdBuy' onChange={changeKorrsInputs} />
            </div>
        </div>

    )
}

export default Settings