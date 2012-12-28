/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/', to: '_list/blog/blogPosts'},
	{from: '/test', to: '_show/contact'},
	{from: '/blog', to: '_list/blog/blogPosts'},
	{from: '/post/*', to: '_show/post/*'},
	{from: '*', to: '_show/not_found'}
];
