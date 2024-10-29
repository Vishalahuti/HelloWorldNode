import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './index.js'; // Import the express app

chai.use(chaiHttp);
const { expect } = chai;

describe('API Endpoints', () => {
    it('should return About page content', async () => {
        const res = await chai.request(app).get('/about');
        expect(res).to.have.status(200);
        expect(res.text).to.include('About Us');
    });

    it('should return the users page content', async () => {
        const res = await chai.request(app).get('/users');
        expect(res).to.have.status(200);
        expect(res.text).to.include('Welcome to the Home Page');
    });
});
