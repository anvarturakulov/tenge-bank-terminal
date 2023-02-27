import './header-list.css'

const HeaderList = () => {
    return (
        <div className='header-list'>
            <div className="">N</div>
            <div className="header-list-item width100">Название</div>
            <div className="header-list-item width30 ">Сум</div>
            <div className="header-list-item width100 bg-yellow">Расчетный счет</div>
            <div className="header-list-item width30">Дол. США</div>
            <div className="header-list-item width100 bg-yellow">Расчетный счет</div>
            <div className="header-list-item width30">Продажа $</div>
            <div className="header-list-item width30">Покупка $</div>
            <div className="header-list-item width30">Остаток $</div>
        </div>
    )
}

export default HeaderList