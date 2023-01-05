'use strict'

const request = require("request")

const secrets = require("./secrets.json")
const token = require("./token.json")

const options = { method: 'POST',
    url: `https://${secrets.domain}/api/v2/users`,
    headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token.token}`
    },
    body:
        {
            email: 'john4_test_email@xyz.com',
            name: 'John4 [test]',
            connection: 'Username-Password-Authentication',
            password: 'john1234!!pass'
        },
    json: true
}

request(options, function (error, response, body) {
    if (error) return console.error(error)

    console.log(body)
})
