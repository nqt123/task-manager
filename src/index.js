const express = require('express');
require('./db/mongoose');
const multer = require('multer')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

const upload = multer({
    dest : 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/.(jpg|jpeg|png)$/)) {
            return cb(new Error("Please upload jpg, jpeg, png file"))
        }
        cb(undefined, true)
    }
})
app.post('/upload', upload.single('file'), async (req, res) => {
    res.send({
        id : Math.random() // Test 
    })
}, (error, req, res, next) => {
    res.send({ Error: error.message })
})

app.listen(port, () => {
    console.log("Server is up on port ", port)
});