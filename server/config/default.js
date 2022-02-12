'use strict';

module.exports = {
	port: 3000,  // 端口号
	mongodbUrl: 'mongodb://localhost/zs',  // 数据库地址
	domainName: 'https://gtlingdro.cn', // 域名, 配置全局
	/* 
		邮箱地址, 采用的是qq邮箱, 如果需要配置自己的邮箱,
		需要登录qq邮箱进入设置, 开启POP3/SMTP服务. 具体可百度
	 */
	email: 'q.tringdron@foxmail.com', //邮箱地址 
	authCode: 'alojdwxlisuabdci',  // 授权码, qq邮箱配置获取
	//emails: ['1772591173@qq.com'], // 配置多个邮箱地址
	//authCodes: ['eyebtxkwfciyjgfd']  // 对应配置多个授权码
}
