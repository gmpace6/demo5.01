const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const inventoryDB = [
    'greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk'
]

app.get('/api/inventory', (req, res) => {

    const {item} = req.query

if (item !== undefined) {
    //do search code
    const returnArr = []
    for (let i = 0; i < inventoryDB.length; i++) {
        if (inventoryDB[i].includes(item)) {
            returnArr.push(inventoryDB[i])
        }
    }
    res.status(200).send(returnArr)
    } else {
        //do get all inventory code
        res.status(200).send(inventoryDB)
    }
})




app.get('/api/inventory/:index', (req, res) => {
    const {index} = req.params
    res.status(200).send(inventoryDB[index])
})

app.listen(5050, () => {
    console.log('up on 5050')
})
