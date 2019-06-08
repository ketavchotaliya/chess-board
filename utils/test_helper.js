'use strict';

class testHelper {
    constructor() {
        this.chai = require('chai');
        this.chaiHttp = require('chai-http');
        this.app = require('../server');
        this.constants = require('./Constants');

        this.chai.use(this.chaiHttp);
        this.expect = this.chai.expect;
    }

    chaiGetRequest(url, params = '', headerKey = '', headerValue = '') {
        if (headerKey === '') {
            return this.chai.request(this.app)
                .get(url)
                .query(params)
                .then(res => {
                    return res;
                })
        } else if (headerKey !== '') {
            return this.chai.request(this.app)
                .get(url)
                .query(params)
                .set(headerKey, headerValue)
                .then(res => {
                    return res;
                })
        }
    }

    chaiPostRequest(url, params = '', formType = '', headerKey = '', headerValue = '') {
        if (formType === '' && headerKey === '') {
            return this.chai.request(this.app)
                .post(url)
                .send(params)
                .then(res => {
                    return res;
                })
        } else if (formType === '' && headerKey !== '') {
            return this.chai.request(this.app)
                .post(url)
                .send(params)
                .set(headerKey, headerValue)
                .then(res => {
                    return res;
                })
        } else if (formType !== '' && headerKey === '') {
            return this.chai.request(this.app)
                .post(url)
                .send(params)
                .type(formType)
                .then(res => {
                    return res;
                })
        } else if (formType !== '' && headerKey !== '') {
            return this.chai.request(this.app)
                .post(url)
                .send(params)
                .set(headerKey, headerValue)
                .type(formType)
                .then(res => {
                    return res;
                })
        }
    }

    checkEmptyBody(url, httpMethod, params, formType = '', headerKey = '', headerValue = '') {
        it('send empty body in request should have status code 422', async () => {
            try {
                let res;
                switch (httpMethod.toLowerCase()) {
                    case 'post':
                        res = await this.chaiPostRequest(url, params, formType, headerKey, headerValue);
                        break;
                }

                this.checkValidOutput(res);
                this.expect(res).to.have.status(this.constants.httpStatusCode().UNPROCESSED)

            } catch (err) {
                this.checkValidOutput(err);
                this.expect(err).to.have.status(this.constants.httpStatusCode().UNPROCESSED)
            }
        })
    }

    checkEmptyKey(url, httpMethod, params, formType = '', headerKey = '', headerValue = '', emptyKey = '') {
        // send empty name in request
        it('send empty ' + emptyKey + ' in request should have status code 422', async () => {
            try {
                if (emptyKey && params.hasOwnProperty(emptyKey)) {
                    params[ emptyKey ] = ''
                }

                let res;
                switch (httpMethod.toLowerCase()) {
                    case 'post':
                        res = await this.chaiPostRequest(url, params, formType, headerKey, headerValue);
                        break;
                }
                this.checkValidOutput(res);
                this.expect(res).to.have.status(this.constants.httpStatusCode().UNPROCESSED);
            } catch (err) {
                this.checkValidOutput(err);
                this.expect(err).to.have.status(this.constants.httpStatusCode().UNPROCESSED);
            }
        })
    }

    checkValidOutput(res) {
        return this.expect(res).to.be.not.null && this.expect(res).to.be.json &&
            this.expect(res.body).to.be.a('object') &&
            this.expect(res.body).to.have.property('message')
    }

    generateObject(object, emptyKey = '', inValidKeyArray = []) {
        if (emptyKey && object.hasOwnProperty(emptyKey)) {
            object[ emptyKey ] = ''
        }

        if (inValidKeyArray.length > 0) {
            for (let i = 0; i < inValidKeyArray.length; i++) {
                object[ inValidKeyArray[ i ].key ] = inValidKeyArray[ i ].value
            }
        }

        return object
    }
}

module.exports = testHelper;
