const User = require('./models/User')

const home = (req, res)=>{
    res.send('Home Page')
}

const login = (req, res)=>{
    res.send('You are Login')
}

const signup = async (req, res) => {
    const {firstName, lastName} = req.body;
    try {
        const userInfo = await new User({
            firstName, 
            lastName
        })
        res.send(userInfo)
    } catch (error) {
        
    }
}

module.exports = {
    home,
    login,
    signup
}