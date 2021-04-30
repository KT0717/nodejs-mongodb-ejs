## Node.js MongoDB ejs
Node.js MongoDB ejs の開発環境構築と簡単なWebアプリケーション作成
#### 開発環境
Vagrant  
Centos7  
NodeJs  
ejs  
MongoDB  

----

#### GitHubでSSH接続するためのSSH Keyを作成しよう
```bash
ssh-keygen -t rsa
cat ~/.ssh/id_rsa.pub
https://github.com/settings/keys
ssh -T git@github.com
```
##### 参考リンク
https://developer.yukimonkey.com/article/202004113/

----

#### CentOS 7.5 に Node.js 12 系の最新版を yum インストールする
```bash
sudo -i
yum -y install https://rpm.nodesource.com/pub_12.x/el/7/x86_64/nodesource-release-el7-1.noarch.rpm
yum -y install nodejs
node --version
npm --version
```

----

#### 必要なものをインストール
（rootにて）
```bash
npm init
npm install ejs
npm install mongodb
```

----

#### MongoDBのインストール
```bash
sudo vi /etc/yum.repos.d/mongodb-org-4.4.repo
```
```bash
[mongodb-org-4.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
```
```bash
sudo yum install -y mongodb-org
sudo service mongod start
sudo chkconfig mongod on
mongo --version
```
Node.jsからMongoDBに接続してみる
```bash
npm install mongodb
```
メモ
```bash
show dbs;
use nodedb;
show collections;
db.users.find();
```

----

#### Node.jsからmongoDB操作でのdb.collection is not a functionでハマった
connectの引数のコールバックが今までdbだったものがclientに。
##### 参考リンク
https://qiita.com/kosuke0820/items/debddb6006833fedf4c8

----

起動  
node server.js  
http://192.168.33.10:1800

----

#### node_module が見つからない事象が起きる（参考までに）
```bash
export PATH=$HOME/local/node/bin:$PATH
export NODE_PATH=$HOME/local/node:$HOME/node_modules
source .bash_profile
```
##### 参考リンク
http://hateka.hateblo.jp/entry/20110924/1316852293
