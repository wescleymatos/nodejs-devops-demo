let server = require('../server');
let chai = require('chai');
let chaiHttp = require('chai-http');
let assert = chai.assert;
let should = chai.should();

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