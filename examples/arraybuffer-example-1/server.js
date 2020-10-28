const koa = require('koa');
const app = new koa();

app.use(ctx => {
    console.log('received request')
    const res = ctx.res;

    ctx.body = 'msg from server. 111';

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('xx');
});

const PORT = 3000;
app.listen(PORT);

console.log(`listening ${PORT}`);
