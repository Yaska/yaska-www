/**
 * Values exported from this module will automatically be used to generate
 * the design doc pushed to CouchDB.
 */

module.exports = {
	helpers: require('./helpers'),
	lists: require('./lists'),
	rewrites: require('./rewrites'),
    shows: require('./shows'),
	types: require('./types'),
	updates: require('./updates'),
	validate_doc_update: require('./validate'),
    views: require('./views')
};

// bind event handlers
// require('./events');
