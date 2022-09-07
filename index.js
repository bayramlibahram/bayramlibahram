const {express, app, config} = require("./modules");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,'client', 'build')));

    app.get('*', async  (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build', 'index.html'));
    });
}


const start = () => {
    const PORT = config.get('PORT');

    app.listen(PORT, () => console.log(`Server has been started on PORT ${PORT}`));
}

start();


