import express from 'express';

const app = express();

app.listen(300, () => 
	console.log('Servidor iniciado na porta 3000')
);

app.get('/', (request, response) => {
    response.send('testando');
});