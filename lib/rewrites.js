/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/', to: '_show/index'},
	{from: '/services', to: '_show/services'},
	{from: '/contact', to: '_show/contact'},
	{from: '/login', to: '_show/login'},
	{from: '/admin', to: '_show/login'},
	{from: '/about', to: '_show/about'},
	{from: '/colors', to: '_show/colors'},
	{from: '/blog', to: '_list/blog/blogPosts'},
	{from: '/blog/*', to: '_show/blog/*'},
	{from: '/post', to: '_show/new_post'},
	{from: '/post/*', to: '_show/post/*'},
	{from: '/_update/update_post', to: '_update/update_post'},
	{from: '/api/tags', to: '_list/tags'}
	// {from: '*', to: '_show/not_found'}
];
