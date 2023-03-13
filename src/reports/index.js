import Entry from "../entry"
import NumberDivide from "./number-divide"

const reportToText = (report) => {
    let strReport = ''
    for (let i = 0; i < report.length; i++) {
        const { title, debet, kredit, summa, detail } = report[i]
        let str = `${i + 1}) ${title}\n ${debet}\n ${kredit}\n Сумма: ${summa}\n Детали платежа: ${detail}\n`

        strReport += str
    }

    return strReport

}

export const CashOut = (data) => {
    const { terminals, korrs } = data

    const report = []
    const filteredTerminalsSum = terminals.filter(item => item.sum.length > 0)
    const filteredTerminalsUsd = terminals.filter(item => item.usd.length > 0)

    for (let item of filteredTerminalsSum) {
        report.push(new Entry('Расходный кассовый ордер', korrs.sumDebet, korrs.sumKredit, item.sum, 'Пополнение банкомата наличные', 'сум', item.name, item.type, 'out-back'))
        report.push(new Entry('Приходный кассовый ордер', item.rsSum, korrs.sumDebet, item.sum, 'Пополнение банкомата наличные', 'сум', item.name, item.type, 'out-back'))
    }

    for (let item of filteredTerminalsUsd) {
        report.push(new Entry('Расходный кассовый ордер', korrs.usdDebet, korrs.usdKredit, item.usd, 'Пополнение банкомата наличные', 'долл', item.name, item.type, 'out-back'))
        report.push(new Entry('Приходный кассовый ордер', item.rsUsd, korrs.usdDebet, item.usd, 'Пополнение банкомата наличные', 'долл', item.name, item.type, 'out-back'))
    }

    return reportToText(report)
}

export const CashBack = (data) => {
    const { terminals, korrs } = data

    const report = []
    const filteredTerminalsSum = terminals.filter(item => item.sum.length > 0)
    const filteredTerminalsUsd = terminals.filter(item => (item.usd.length + item.saleUsd.length + item.buyUsd.length) > 0)

    for (let item of filteredTerminalsSum) {
        report.push(new Entry('Расходный кассовый ордер', korrs.sumDebet, item.rsSum, item.sum, 'Возврат остатка средств в банкомате', 'сум', item.name, item.type, 'out-back'))
        report.push(new Entry('Приходный кассовый ордер', korrs.sumKredit, korrs.sumDebet, item.sum, 'Возврат остатка средств в банкомате', 'сум', item.name, item.type, 'out-back'))
    }

    for (let item of filteredTerminalsUsd) {
        // usdCash17101: '17101840200001176018',
        // usdCash17301: '17301840400001176001',
        // usdCash10101: '10101840500010843001',
        // usdCash45401: '454010007000110843028',
        // courseUsdSentralBank: '',
        // courseUsdSale: '',
        // courseUsdBuy: ''

        // проводка если есть продажа - Валютный расходный кас. ордер проводка №3
        if (item.saleUsd.length > 0) {
            report.push(new Entry(
                'Валютный расходный кассовый ордер',
                korrs.usdCash17101840,
                item.rsUsd,
                item.saleUsd,
                'Проданная валюта через банкомат',
                'долл',
                item.name,
                item.type,
                'sale',
                korrs.courseUsdSale, korrs.courseUsdBuy))
        }

        // проводка если есть покупка - Валютный приходный кас. ордер проводка №4
        if (item.buyUsd.length > 0) {
            report.push(new Entry(
                'Валютный приходный кассовый ордер',
                item.rsUsd,
                korrs.usdCash17101840,
                item.buyUsd,
                'Купленная валюта через банкомат',
                'долл',
                item.name,
                item.type,
                'buy',
                korrs.courseUsdSale, korrs.courseUsdBuy))
        }

        // проводка если есть остаток - Валютный расходный и приходный кас. ордер проводка №5-6
        if (+item.remainUsd.replace(/ /g, '') > 0) {
            report.push(new Entry(
                'Валютный расходный кассовый ордер',
                korrs.usdCash17301840,
                item.rsUsd,
                item.remainUsd,
                'Возврат остатков банкомата',
                'долл',
                item.name,
                item.type,
                'back'))

            report.push(new Entry(
                'Валютный приходный кассовый ордер',
                korrs.usdCash10101840,
                korrs.usdCash17301840,
                item.remainUsd,
                'Возврат остатков банкомата',
                'долл',
                item.name,
                item.type,
                'back'))
        }


        let usdToSumSale = +item.saleUsd.replace(/ /g, '') * korrs.courseUsdSale

        let profitUsdSale = usdToSumSale - (+item.saleUsd.replace(/ /g, '')) * korrs.courseUsdSentralBank

        usdToSumSale = NumberDivide(`${usdToSumSale}`)
        profitUsdSale = NumberDivide(`${profitUsdSale}`)

        if (item.saleUsd.length > 0) {
            // проводка если есть продажа - Сум экв и доход
            report.push(new Entry(
                'Приходный кассовый ордер',
                item.rsSum,
                korrs.usdCash17101000,
                usdToSumSale,
                'Сум экв. от проданной ин. валюты через банкомат',
                'сум',
                item.name,
                item.type,
                'sale-buy-sum',
                korrs.courseUsdSale,
                korrs.courseUsdBuy,
                item.saleUsd))

            // проводка если есть продажа - Курсовая разница от продажи
            report.push(new Entry(
                'Мемориальный ордер',
                korrs.usdCash17101000,
                korrs.usdCash45401000,
                profitUsdSale,
                'Курсовая разница от проданной ин валюты через банкомат',
                'сум',
                item.name,
                item.type,
                'sale-buy-sum',
                korrs.courseUsdSale,
                korrs.courseUsdBuy,
                item.saleUsd))
        }

        let usdToSumBuy = +item.buyUsd.replace(/ /g, '') * korrs.courseUsdBuy
        let profitUsdBuy = (+item.buyUsd.replace(/ /g, '')) * korrs.courseUsdSentralBank - usdToSumBuy

        usdToSumBuy = NumberDivide(`${usdToSumBuy}`)
        profitUsdBuy = NumberDivide(`${profitUsdBuy}`)

        if (item.buyUsd.length > 0) {
            // проводка если есть продажа - Сум экв и доход
            report.push(new Entry(
                'Расходный кассовый ордер',
                korrs.usdCash17101000,
                item.rsSum,
                usdToSumBuy,
                'Сум экв. от купленной ин. валюты через банкомат',
                'сум',
                item.name,
                item.type,
                'sale-buy-sum',
                korrs.courseUsdBuy,
                korrs.courseUsdSale,
                item.buyUsd))

            // проводка если есть продажа - Курсовая разница от продажи
            report.push(new Entry(
                'Мемориальный ордер',
                korrs.usdCash17101000,
                korrs.usdCash45401000,
                profitUsdBuy,
                'Курсовая разница от купленной ин валюты через банкомат',
                'сум',
                item.name,
                item.type,
                'sale-buy-sum',
                korrs.courseUsdBuy,
                korrs.courseUsdSale,
                item.buyUsd))
        }

    }

    return reportToText(report)
}

