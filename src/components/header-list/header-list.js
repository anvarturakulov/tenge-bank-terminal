import './header-list.css'
import NumberDivide from '../../reports/number-divide'

const Label = () => {
    return (
        <div className='header-list'>
            <div className="">N</div>
            <div className="header-list-item width20">Название</div>
            <div className="header-list-item width30 ">Сум</div>
            <div className="header-list-item width100 bg-yellow">Расчетный счет</div>
            <div className="header-list-item width30">Дол. США</div>
            <div className="header-list-item width100 bg-yellow">Расчетный счет</div>
            <div className="header-list-item width20">Продажа $</div>
            <div className="header-list-item width20">Покупка $</div>
            <div className="header-list-item width20">Остаток $</div>
            <div className='btn-delete'>-</div>
        </div>
    )
}

const TotalBox = ({ total }) => {
    const { sum, usd, sale, buy, remaindUsd } = total
    return (
        <div className='header-list'>
            <div className="">-</div>
            <div className="header-list-item width20">-</div>
            <div className="header-list-item width30 total-text ">{NumberDivide(`${sum}`)}</div>
            <div className="header-list-item width100 bg-yellow">-</div>
            <div className="header-list-item width30 total-text">{NumberDivide(`${usd}`)}</div>
            <div className="header-list-item width100 bg-yellow">-</div>
            <div className="header-list-item width20 total-text">{NumberDivide(`${sale}`)}</div>
            <div className="header-list-item width20 total-text">{NumberDivide(`${buy}`)}</div>
            <div className="header-list-item width20 total-text">{NumberDivide(`${remaindUsd}`)}</div>
            <div className='btn-delete'>-</div>
        </div>
    )
}

const HeaderList = ({ view, total }) => {
    return (
        <>
            {!view ? <Label /> : <TotalBox total={total} />}
        </>
    )
}

export default HeaderList