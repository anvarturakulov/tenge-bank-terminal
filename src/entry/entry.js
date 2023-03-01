function Entry(title, debet, kredit, summa, detail, val, bank, type, detailtype, courseUsdSale, courseUsdBuy, usd ) {
    this.title = title
    this.debet = `Дебет : ${debet}`
    this.kredit = `Кредит : ${kredit}`
    this.summa = val=='сум' ? `${summa} сум` : `${summa} долл. США`
    if (detailtype == 'out-back') {
        this.detail = `${detail} ${type == 'Uzcard' ? 'Узкарт' : 'Хумо'} ${val == 'сум' ? '' : 'долл. США'} - ${bank}`
    }
    if (detailtype == 'sale') {
        this.detail = `${detail} ${type == 'Uzcard' ? 'Узкарт' : 'Хумо'} - ${bank} (${summa}$ по курсу 1$=${courseUsdSale})`
    }

    if (detailtype == 'sale-buy-sum') {
        this.detail = `${detail} ${type == 'Uzcard' ? 'Узкарт' : 'Хумо'} - ${bank} (${usd}$ по курсу 1$=${courseUsdSale})`
    }

    if (detailtype == 'buy') {
        this.detail = `${detail} ${type == 'Uzcard' ? 'Узкарт' : 'Хумо'} - ${bank} (${summa}$ по курсу 1$=${courseUsdBuy})`
    }
    if (detailtype == 'back') {
        this.detail = `${detail} ${type == 'Uzcard' ? 'Узкарт' : 'Хумо'} - ${bank}`
    }
    
}

export default Entry