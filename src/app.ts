import http, { IncomingMessage, ServerResponse } from 'http';

const rqListener = (req: IncomingMessage,res: ServerResponse) => {
    console.log(req.url);
    console.log(res.statusCode);
}

const server = http.createServer(rqListener);

server.listen(3000);