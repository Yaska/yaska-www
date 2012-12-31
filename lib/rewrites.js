/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/', to: '_show/index'},
	{from: '/info', to: '_show/info'},
	{from: '/contact', to: '_show/info'},
	{from: '/blog', to: '_list/blog/blogPosts'},
	{from: '/post/*', to: '_show/post/*'},
	{from: '*', to: '_show/not_found'}
];
