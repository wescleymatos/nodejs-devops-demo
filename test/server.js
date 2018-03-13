const server = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const should = chai.should();

chai.use(chaiHttp);
// Parent block
describe('Server', () => {
    describe('/GET', () => {
        it('should return a default message', (done) => {
            chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('string');
                res.body.should.be.eql('Nodejs DevOps Demo');
                done();
            });
        });
    });
});
