// server side code

// /api/date 

module.exports = (req, res) => {
    // express js - google 

    // req - request - your browser makes a request to the server
    // res - response object - your server is going to reply with

    const date = new Date().toString(); // what's the current date?
    res.status(200).send(date); // res.status(200).send(date)
};
