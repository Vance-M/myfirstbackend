const { app } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);
const { doughnuts } = require('../donuts.js');

it('should respond with the doughnuts from my list', async done => {
    const myData = { results: doughnuts };

    const response = await request.get('/doughnuts');
  
    expect(response.status).toBe(200);
    expect(response.body).toEqual(myData);
    done();
});