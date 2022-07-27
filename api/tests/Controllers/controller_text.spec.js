const { Text } = require('../../src/db');
const { palindromo } = require('../../src/Controllers/controller_text');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/app');
const should = chai.should();
const {expect} = require('chai')

const text = 'Luz azul';
const reverseText = text.split('').reverse().join('');

chai.use(chaiHttp);
describe('Texts', () => {
    beforeEach(() => Text.sync({ force: true }))
});
describe('GET /generate', () => {
    it('deberia devolver un array y estado 200', (done) => {
        chai.request(server)
            .get(`/generate?text=${text}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.property('name');
                done();
            });
    });
    it('deberia devolver la palabra invertida', (done) => {
        chai.request(server)
            .get(`/generate?text=${text}`)
            .end((err, res) => {
                res.body[0].should.property('name');
                res.body[0].should.property('name').eql(reverseText);
                done();
            });
    });
    it('deberia devolver un boleano si es palindromo', (done) => {
        chai.request(server)
            .get(`/generate?text=${text}`)
            .end((err, res) => {
                res.body[0].should.property('palindromo').be.a('boolean')
                done();
            });
    });
});
describe('deberia identificar si es palindromo', () => {
    it('debería devolver true si la palabra es palindromo', ()=> {
        expect(palindromo(text)).to.equal(true);
    });
    it('debería devolver false si la palabra no es palindromo', ()=> {
        expect(palindromo('Hola')).to.equal(false);
    })
});




