'use strict'

/* test cases for ChessBoard APIs */

// require dependencies
const chai = require('chai');
const expect = chai.expect;
const testHelper = require('../../../utils/test_helper');
const testEnv = require('../../../utils/test_config');
const constants = require('../../../utils/Constants');

// Test cases for Chess Board API
describe('Test cases for Chess Board API', () => {
    let testHelperObj;
    before(() => {
        testHelperObj = new testHelper();
    });

    // Send Invalid Request Method
    it('Send Invalid Request Method, It should return 404 Not Found Error', async () => {
        let res = await testHelperObj.chaiGetRequest(testEnv.chessBoardApiUri);
        expect(res).to.have.status(constants.httpStatusCode().NOT_FOUND);
    });

    // Send Empty Request Body
    it('Send Empty Request Body, It should return 422 Unprocessed Entity Error', async () => {
        let res = await testHelperObj.chaiPostRequest(testEnv.chessBoardApiUri);
        expect(res).to.have.status(constants.httpStatusCode().UNPROCESSED);
        expect(res.body.message).to.eql(messages.checkIfRequired('Piece'));
    });

    // Send invalid Piece in Requesst Body
    it('Send invalid Piece in Requesst Body, It should return 422 Unprocessed Entity Error', async () => {
        const requestBody = {
            "piece": "Testing",
            "position_raw" : "D",
            "position_col" : "2	"
        }
        let res = await testHelperObj.chaiPostRequest(testEnv.chessBoardApiUri, requestBody);
        expect(res).to.have.status(constants.httpStatusCode().UNPROCESSED);
        expect(res.body.message).to.eql(messages.checkIfValidEnum('Piece', Constants.validPiece()));
    });

    // Send invalid Row Position in Requesst Body
    it('Send invalid Row Position in Requesst Body, It should return 422 Unprocessed Entity Error', async () => {
        const requestBody = {
            "piece": "Horse",
            "position_raw" : "K",
            "position_col" : "2	"
        };
        let res = await testHelperObj.chaiPostRequest(testEnv.chessBoardApiUri, requestBody);
        expect(res).to.have.status(constants.httpStatusCode().UNPROCESSED);
        expect(res.body.message).to.eql(messages.checkIfValidEnum('Raw Position', Constants.validRow()));
    });

    // Send invalid Column Position in Requesst Body
    it('Send invalid Column Position in Requesst Body, It should return 422 Unprocessed Entity Error', async () => {
        const requestBody = {
            "piece": "Horse",
            "position_raw" : "B",
            "position_col" : "9	"
        };
        let res = await testHelperObj.chaiPostRequest(testEnv.chessBoardApiUri, requestBody);
        expect(res).to.have.status(constants.httpStatusCode().UNPROCESSED);
        expect(res.body.message).to.eql(messages.checkIfValidEnum('Column Position', Constants.validColumn()));
    });

    // Send D5 Position of King, it should return ["D6", "E6", "E5", "E4", "D4", "C4", "C5", "C6"]
    it('Send D5 Position of King, it should return ["D6", "E6", "E5", "E4", "D4", "C4", "C5", "C6"]', async () => {
        const requestBody = {
            "piece": "King",
            "position_raw" : "D",
            "position_col" : "5"
        };
        let res = await testHelperObj.chaiPostRequest(testEnv.chessBoardApiUri, requestBody);

        expect(res).to.have.status(constants.httpStatusCode().SUCCESS);
        expect(res.body.message).to.deep.equal(messages.POSIBLE_MOVE_FOR_FROM("king","D5"));
        expect(res.body.payload.data).to.have.all.members(["E5","E4","D6","D4","C6","C5","C4", "E6"]);
    });

    // Send B2 Position of King, it should return ["A2", "A3", "B3", "C3", "C2", "C1", "B1", "A1"]
    it('Send B2 Position of King, it should return ["A2", "A3", "B3", "C3", "C2", "C1", "B1", "A1"]', async () => {
        const requestBody = {
            "piece": "King",
            "position_raw" : "B",
            "position_col" : "2"
        };
        let res = await testHelperObj.chaiPostRequest(testEnv.chessBoardApiUri, requestBody);

        expect(res).to.have.status(constants.httpStatusCode().SUCCESS);
        expect(res.body.message).to.deep.equal(messages.POSIBLE_MOVE_FOR_FROM("king","B2"));
        expect(res.body.payload.data).to.have.all.members(["A2", "A3", "B3", "C3", "C2", "C1", "B1", "A1"]);
    });

    // Send B5 Position of Rook, it should return [ "A5","C1","C2","C3","C4","C6","C7","C8","C5","D5","E5","F5","G5","H5"]
    it('Send B5 Position of Rook, it should return [ "A5","C1","C2","C3","C4","C6","C7","C8","C5","D5","E5","F5","G5","H5"]',
        async () => {
        const requestBody = {
            "piece": "Rook",
            "position_raw" : "B",
            "position_col" : "5"
        };
        let res = await testHelperObj.chaiPostRequest(testEnv.chessBoardApiUri, requestBody);

        expect(res).to.have.status(constants.httpStatusCode().SUCCESS);
        expect(res.body.message).to.deep.equal(messages.POSIBLE_MOVE_FOR_FROM("rook","B5"));
        expect(res.body.payload.data).to.have.all.members([ "A5","C1","C2","C3","C4","C6","C7","C8","C5","D5","E5","F5","G5","H5"]);
    });

    // Send F5 Position of Horse, it should return ["H4","H6","D6","D4","G7","G3","E7","E3"]
    it('Send F5 Position of Horse, it should return ["H4","H6","D6","D4","G7","G3","E7","E3"]',
        async () => {
        const requestBody = {
            "piece": "Horse",
            "position_raw" : "F",
            "position_col" : "5"
        };
        let res = await testHelperObj.chaiPostRequest(testEnv.chessBoardApiUri, requestBody);

        expect(res).to.have.status(constants.httpStatusCode().SUCCESS);
        expect(res.body.message).to.deep.equal(messages.POSIBLE_MOVE_FOR_FROM("horse","F5"));
        expect(res.body.payload.data).to.have.all.members(["H4","H6","D6","D4","G7","G3","E7","E3"]);
    });
})
