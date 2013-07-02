/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
	{from: '/favicon.png', to: 'static/favicon.png'},
    {from: '/', to: '_show/index'},
	{from: '/services', to: '_show/services'},
	{from: '/contact', to: '_show/contact'},
	{from: '/login', to: '_show/login'},
	{from: '/admin', to: '_show/login'},
	{from: '/about', to: '_show/about'},
	{from: '/projects', to: '_show/projects'},
	{from: '/blog/tag/*', to:'/_list/blog/postsPerTag/', query: { "key": "*" }},
	{from: '/blog', to: '_list/blog/blogPosts'},
	{from: '/feed', to: '_list/atom/blogPosts'},
	{from: '/blog/*', to: '_show/blog/*'},
	{from: '/post', to: '_show/new_post'},
	{from: '/post/*', to: '_show/post/*'},
	{from: '/_update/update_post', to: '_update/update_post'},
	{from: '/thankyou', to: '_show/thankyou'},
	{from: '/api/tags', to: '_list/tags'},
	{from: '*', to: '_show/index'}
];
