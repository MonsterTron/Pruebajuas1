web({
    lang: 'en',
    api: 'https://dappcall.com/',
    apiVersion: '4',
    smart_contract_address: 'TCPFHFk9VHjTVVdzK4qFTTUmAyv9VwbJmr',
    api_contract_address: 'TXLJjo63J6iVFJJyxSoPVZf3FxGhfHSTTz',
    rate: 25,
    build_cost: [
        3000, 11750, 44500, 155000, 470000, 950000
    ],
    build_per_hour: [
        6, 24, 93, 330, 1020, 2100
    ],
    buildings: [
        'Bakery',
        'Teashop',
        'Confectionery',
        'Bee yard',
        'Brewhouse',
        'Perfumery'
    ],
    build_buy_name: [
        'Buy bakery',
        'Buy tea factory',
        'Buy confectionery',
        'Buy bee yard',
        'Buy brewhouse',
        'Buy perfumery'
    ],
    build_buy_desc: [
        'Baking fresh bread, pies and cookies. Low-input and such necessary production for your village',
        'Tea - is the most popular drink in the world. Do you like tea? Everyone likes tea! Inhabitants of your village are not an exception. No evening is spent in the village without a tea party',
        'Production of sweets, chocolate, marmalade and other goodies. Sweets are in great demand, because in your village lives a lot of sweet tooth',
        'Honey is a remarkably healthy natural product. Selling honey, you strengthen health of the inhabitants. Take care of their longevity',
        'Craft beer production - is a profitable business. The inhabitants of your village can choose either dark or light beer',
        'Upscale production with the highest income. Elite perfumes, cosmetics and perfumery products - are luxury items for prosperous inhabitants of your village'
    ],
    buy_desc: {
        deposit: 'These funds can be spent on purchase of new buildings for expansion of the production and increase in profits',
        withdraw: "You can withdraw these funds at any time, they also can be invested in the development of your village, if you don't have enough funds in the treasury"
    },
    buy_name: {
        deposit: 'Buy coins',
        withdraw: 'Withdrawal'
    },
    balance_type: {
        build: 'Overall balance:',
        deposit: 'Wallet balance:',
        withdraw: 'Available for withdrawal:'
    },
    count_type: {
        build: 'Buildings:',
        deposit: 'TRON:',
        withdraw: 'Coins:'
    },
    button_text: {
        build: 'Buy for',
        deposit: 'Top up on',
        withdraw: 'Withdraw'
    },
    not_enough: {
        build: 'Lack of coins balance',
        deposit: 'Lack of TRX balance on the wallet',
        withdraw: 'Lack of available coins balance'
    },
    build_card: {
        built: 'Built:',
        profit: {
            hour: 'Profit per hour:',
            day: 'Profit per day:',
            month: 'Profit per month:',
            monthShort: '/mo'
        },
        price: 'Price:',
        button: 'Buy',
        pc: '<img src="../images/house-icon.png" style="width: 24px; height: 24px; vertical-align: middle; margin: -4px -2px 0 -4px">'
    },
    confirm: {
        text:  'Confirm the created transaction in your Tron wallet',
        successText: "Transaction sent",
        failText: "Unable to create transaction. Try to reload the page",
        cancelText: "An error occurred while sending the transaction. Make sure you are connected to a stable node and you have enough Energy or TRX to pay for the transaction fee.",
        rejectText: "Transaction rejected by you",
        button: 'OK'
    }
});