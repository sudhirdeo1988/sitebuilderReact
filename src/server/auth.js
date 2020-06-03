const express = require("express");
const app = express();

// ---- Env variable
const { port } = require('./config/config');

// --- import routers
const userRouter = require('./routers/authRouter');

// --- All routes endpoint
app.use('/auth', userRouter);

// --- Handle if route is not defined
app.use('*', (req, res) =>{
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end('<h1>Route Not Found</h1>');
});

module.exports = app;


app.listen(port, () => {
    console.log(`server started on port ${port}`);
})
