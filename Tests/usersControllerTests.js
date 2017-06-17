/**
 * Created by junqu on 16/09/2015.
 */
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    assert = require("assert"),
    superagent = require('superagent');

var Promise = require("bluebird");
var agent = superagent.agent();

describe('UserController' , function() {

    before(function(done) {
        done();
    });

    it('should not insert, because dont have email', function(done) {
        agent
            .post('http://localhost:9000/api/cadastro')
            .send({Login: "test@tg4.com.br", Password: '12345'})
            .end(function(err, res) {
                expect(res.status).to.equal(400);
                done();
            });
    });

    it('should insert new use', function(done) {
        agent
            .post('http://localhost:9000/api/cadastro')
            .send({Login: "luisjnk", Password: '12345', Email: 'luisjnk2@gmail.com',IdPersonalType: '1'})
            .end(function(err, res) {
                expect(res.status).to.equal(200);
                done();
            });
    });

    it('should login user', function(done) {
        agent
            .get('http://localhost:9000/api/logar/test1@tg4.com.br/12345')
            .send()
            .end(function(err, res) {
                expect(res.status).to.equal(200);
                done();
            });
    });
});