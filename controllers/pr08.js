const https = require('https')

const ITEMS_PER_PAGE = 10

const getProducts = (req, res, json) => {
    let searchedValue = req.body.searchValue || req.query.searchValue || '' // Handle for GET, POST or neither
    let page = req.query.page || 1

    const startIndex = (page - 1) * ITEMS_PER_PAGE // Item index to start on...
    const endIndex = page * ITEMS_PER_PAGE

    const filteredData = global.jsonResponse.filter(x =>
        x.name.toLowerCase().includes(searchedValue.toLowerCase())
    )

    res.render('pages/pr08', {
        data: filteredData.slice(startIndex, endIndex), // For JSON/Array and not Mongoose, .slice() works best.
        path: 'proveAssignments/03',
        title: 'Week 3 Prove Assignment',
        searchedValue: searchedValue,
        page: page,
        numPages: Math.ceil(filteredData.length / ITEMS_PER_PAGE)
    });
}

exports.getPr08 = (req, res, next) => {
    // read json
    var url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json'

    https.get(url, function(response) {
        var body = ''
        response.on('data', function(chunk) {
            body += chunk
        })

        response.on('end', function() {
            global.jsonResponse = JSON.parse(body)
            getProducts(req, res, global.jsonResponse)
        })
    }).on('error', function(err) {
        console.log(err)
    })
}

exports.postPr08 = (req, res, next) => {
    getProducts(req, res, global.jsonResponse)
}