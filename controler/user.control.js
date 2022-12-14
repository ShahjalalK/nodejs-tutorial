const myData = require('../modales/user.modal')

const path = require('path')

exports.getUser = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/index.html"))
}

exports.saveUser = (req, res) => {
    const fullName = req.body.fullName
    const age = req.body.age
    const user = {
        fullName,
        age
    }
    myData.push(user)
    res.status(200).json({
        messege: 'Succese Data',
        myData
    })
}

exports.pageNotFound = (req, res) => {
    res.status(500).json({
        messege: 'Page Not Found'
    })
}