const home = (req, res) => {
    res.json({ message: "Hello, this is Protected Route", user: req.user })
}

module.exports = { home }