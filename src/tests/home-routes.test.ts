import request from 'supertest';
import app from '../index';

afterAll(() => {
    app.close();
    console.log('server closed!');
});