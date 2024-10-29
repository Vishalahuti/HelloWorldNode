import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './index.js'; // Adjust the path to your server file

chai.use(chaiHttp);
const { expect } = chai;

// Keep a reference to the server
let server;

// Use an arbitrary port for testing
const PORT = 3001;

before((done) => {
    server = app.listen(PORT, () => {
        console.log(`Test server is running on http://localhost:${PORT}`);
        done();
    });
});

after((done) => {
    server.close(() => {
        console.log('Test server closed');
        done();
    });
});

describe('API Endpoints', () => {
    it('should return About page content', async () => {
        const res = await chai.request(`http://localhost:${PORT}`).get('/about');
        expect(res).to.have.status(200);
        expect(res.text).to.include('About Us');
    });

    it('should return the users list', async () => {
        const res = await chai.request(`http://localhost:${PORT}`).get('/users');
        expect(res).to.have.status(200);
        expect(res.text).to.include('<h1>Welcome to the Home Page</h1>');
    });
});
