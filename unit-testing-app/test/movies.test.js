// Here goes test suite
const chai = require('chai'); // test framework
const chaiHttp = require('chai-http');
const { expect } = require('chai');

chai.use(chaiHttp);

// what feature we are putting under test 
describe('Movies REST API', () => { // coming from mocha

  // test case #1 
  it('should return status 200', (done) =>{  // coming from mocha 
    chai.request('http://localhost:3000/movies')  
      .get('/')
      .then( (resp) =>{
        expect(resp).to.have.status(200);
        done();
      })
      .catch( (err) => {
        console.log(err);
        throw(err);
      })
  });

  //test case #2 
  it('should return movies json', (done) => {
    chai.request('http://localhost:3000')
    .get('/movies')
    .then( (res) => {
      expect(res).to.have.json;
      done();
    })
    .catch(  (err)=> {
      throw(err);
    });
  });


});

