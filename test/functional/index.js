'use strict';

const app = require('../../');
const request = require('supertest');
const file1 = 'test_file1.jpg';
const file2 = 'test_file2';
const User = require('../../models').User;
const co = require('co');
const sequelize = require('../../misc/db').sequelize;

let token = '';

describe('Maps', function () {
    this.timeout(20000);
    before(function (done) {
        co(function *() {
            yield sequelize.sync({ force: true });
            request(app).post('/v1/auth/token')
                .send({
                    username: 'fishead@fishead.io',
                    password: 'fishead'
                })
                .expect(function (res) {
                    token = res.body.token;
                })
                .end(done);
        });
    });

    describe('#upload', function () {
        it('should return 200', function (done) {
            request(app).post('/v1/maps')
            .set('Authorization', 'Bearer ' + token)
            .attach('map', 'test/fixtures/' + file1)
            .expect(200)
            .end(done);
        });

        it('should return 200', function (done) {
            request(app).post('/v1/maps')
            .set('Authorization', 'Bearer ' + token)
            .attach('map', 'test/fixtures/' + file2)
            .expect(200)
            .end(done);
        });
    });

    describe('#download', function () {
        it('should return 200', function (done) {
            request(app).get('/v1/maps/' + file1)
            .set('Authorization', 'Bearer ' + token)
            .expect(200)
            .end(done);
        });

        it('should return 200', function (done) {
            request(app).get('/v1/maps/' + file2)
            .set('Authorization', 'Bearer ' + token)
            .expect(200)
            .end(done);
        });
    });
});

describe('RouteDatas', function () {
    describe('#upload', function () {
        it('should return 200', function (done) {
            request(app).post('/v1/routedatas')
            .set('Authorization', 'Bearer ' + token)
            .attach('routedata', 'test/fixtures/' + file1)
            .expect(200)
            .end(done);
        });

        it('should return 200', function (done) {
            request(app).post('/v1/routedatas')
            .set('Authorization', 'Bearer ' + token)
            .attach('routedata', 'test/fixtures/' + file2)
            .expect(200)
            .end(done);
        });
    });

    describe('#download', function () {
        it('should return 200', function (done) {
            request(app).get('/v1/routedatas/' + file1)
            .set('Authorization', 'Bearer ' + token)
            .expect(200)
            .end(done);
        });

        it('should return 200', function (done) {
            request(app).get('/v1/routedatas/' + file2)
            .set('Authorization', 'Bearer ' + token)
            .expect(200)
            .end(done);
        });
    });
});
