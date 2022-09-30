const get_utility_info = require('./utility_info');
const get_usage_estimate = require('./get_usage_estimate');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    console.log(req);
    const name = (req.query.address || (req.body && req.body.address));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    
    console.log('12 reached');
    let result = await get_usage_estimate(name);
    console.log(14, result);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: result
    };
    console.log('19 reached');
}