/*
·XMAPP启动mysql和apache服务器
·打开cmd再进入mysql的bin目录:cd C:\xampp\mysql\bin
·进入mysql:mysql -uroot -p 回车
·提示输出密码，直接回车
·导入自定义sql文件:source C:\Users\Administrator\Desktop\m.uhouzz.com\server\yxhj.sql（注意斜杠方向）
*/
set names utf8;
drop database if exists yxhj;
create database yxhj charset=utf8;
use yxhj;
CREATE TABLE nav_hwfc(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  country VARCHAR(32),
  pic VARCHAR(128)
);
INSERT INTO nav_hwfc VALUES
(1, '美国', 'https://pcpic.uhouzz.com/webappseo/images/03175a3ef20c10c68f9297ec059898db.png'),
(2, '英国', 'https://pcpic.uhouzz.com/webappseo/images/ceda809b1fa8f052d8d7110fbcc9dbf6.png'),
(3, '澳大利亚', 'https://pcpic.uhouzz.com/webappseo/images/43c790acc08ecbdf16b925a9e0d76ff7.png'),
(4, '加拿大', 'https://pcpic.uhouzz.com/webappseo/images/a47abb61d3fcaf650f5ceb2c2d62c5b2.png'),
(5, '新西兰', 'https://pcpic.uhouzz.com/webappseo/images/f80306a16a4a0d95f5dad9a0e9305cdb.png'),
(6, '日本', 'https://pcpic.uhouzz.com/webappseo/images/5c812afac92520a1e0da2c534703026b.png');

CREATE TABLE countries(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  countryName VARCHAR(32),
  countryID VARCHAR(8)
);
INSERT INTO countries VALUES
(1, '美国', 'USA'),
(2, '英国', 'GBR'),
(3, '澳大利亚', 'AUS'),
(4, '加拿大', 'CAN'),
(5, '新西兰', 'NZL'),
(6, '日本', 'JPN');

CREATE TABLE cities(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  countryID VARCHAR(8),
  cityName VARCHAR(32),
  cityID VARCHAR(32)
);
INSERT INTO cities VALUES
(1, 'USA', '芝加哥', 'zhijiage'),
(2, 'USA', '华盛顿', 'huashengdun'),
(3, 'USA', '纽约', 'niuyue'),
(4, 'USA', '休斯顿', 'xiusidun'),
(5, 'GBR', '伦敦', 'lundun'),
(6, 'GBR', '纽卡斯尔', 'niukasier'),
(7, 'GBR', '曼侧斯特', 'mancesite'),
(8, 'GBR', '利兹', 'lizi'),
(9, 'GBR', '牛津', 'niujin'),
(10, 'GBR', '利物浦', 'liwupu'),
(11, 'JPN', '东京', 'dongjin'),
(12, 'JPN', '名古屋', 'mingguwu'),
(13, 'JPN', '大版', 'daban'),
(14, 'JPN', '富士山', 'fushishan')
;

CREATE TABLE hwym(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  title VARCHAR(32),
  type VARCHAR(32),
  poried VARCHAR(32)
);
INSERT INTO hwym VALUES
(1, 'https://pic.uhouzz.com/houseImages2/b4/b13b5176fd26a0263af7bda19dea2e23e6c8a1.jpg?x-oss-process=image/resize,h_500', '新加坡投资类移民', '投资移民','1年+'),
(2, 'https://pic.uhouzz.com/houseImages2/d2/3c6940b716af28bad430581b2e48648ea972f9.jpg?x-oss-process=image/resize,h_500', '新西兰普通投资移民', '投资移民','12-18个月'),
(3, 'https://pic.uhouzz.com/houseImages2/6b/04a51930700697cd73edf5bee0d3835da50d0b.jpg?x-oss-process=image/resize,h_500', '新西兰普通创业移民', '创业移民','6-9个月'),
(4, 'https://pic.uhouzz.com/houseImages2/5f/f2272541e19f01ca5ab58bedccd55edc28432e.jpg?x-oss-process=image/resize,h_500', 'EBE-A 美国杰出人才移民', '人才移民','8-18个月'),
(5, 'https://pic.uhouzz.com/houseImages2/0c/fb5509eeb00e4ce3b63c94bfd6bf29d8f8d2ae.jpg?x-oss-process=image/resize,h_500', '加拿大曼尼托巴省商业投资移民', '投资移民','12-18个月')
;