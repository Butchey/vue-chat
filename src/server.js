// import SocketIO from 'socket.io';
import Express from 'express';
import Path from 'path';

const app = new Express();

// Define the port to run on
app.set('port', 3000);

app.use(Express.static(Path.join(__dirname, 'app', 'static')));

// Listen for requests
const server = app.listen(app.get('port'), () => {
  const port = server.address().port;
  console.log(`Magic happens on port: ${port}`);
});
