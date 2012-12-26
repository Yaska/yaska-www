/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/', to: '_show/blog'},
	{from: '/test', to: '_show/contact'},
	{from: '/blog', to: '_list/niceBlog/blogPosts'},
	{from: '*', to: '_show/not_found'}
];
