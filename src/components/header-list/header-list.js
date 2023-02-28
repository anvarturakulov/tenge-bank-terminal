import './header-list.css'

const HeaderList = () => {
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

export default HeaderList