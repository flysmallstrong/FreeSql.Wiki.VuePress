const e=JSON.parse('{"key":"v-3bb27ea9","path":"/guide/sharding.html","title":"分表分库","lang":"zh-CN","frontmatter":{"description":"理论知识 分表 - 从表面意思上看呢，就是把一张表分成 N 多个小表，每一个小表都是完整的一张表。分表后数据都是存放在分表里，总表只是一个外壳，存取数据发生在一个一个的分表里面。分表后单表的并发能力提高了，磁盘 I/O 性能也提高了。并发能力为什么提高了呢，因为查寻一次所花的时间变短了，如果出现高并发的话，总表可以根据不同 的查询，将并发压力分到不同的...","head":[["meta",{"property":"og:url","content":"https://freesql.net/guide/sharding.html"}],["meta",{"property":"og:site_name","content":"FreeSql 官方文档"}],["meta",{"property":"og:title","content":"分表分库"}],["meta",{"property":"og:description","content":"理论知识 分表 - 从表面意思上看呢，就是把一张表分成 N 多个小表，每一个小表都是完整的一张表。分表后数据都是存放在分表里，总表只是一个外壳，存取数据发生在一个一个的分表里面。分表后单表的并发能力提高了，磁盘 I/O 性能也提高了。并发能力为什么提高了呢，因为查寻一次所花的时间变短了，如果出现高并发的话，总表可以根据不同 的查询，将并发压力分到不同的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-25T02:13:17.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-08-25T02:13:17.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://freesql.net/en/guide/sharding.html"}]]},"excerpt":"","headers":[{"level":2,"title":"理论知识","slug":"理论知识","link":"#理论知识","children":[]},{"level":2,"title":"手工分表 AsTable","slug":"手工分表-astable","link":"#手工分表-astable","children":[]},{"level":2,"title":"自动分表 AsTable (beta)","slug":"自动分表-astable-beta","link":"#自动分表-astable-beta","children":[]},{"level":2,"title":"【分库】常规技巧","slug":"【分库】常规技巧","link":"#【分库】常规技巧","children":[]},{"level":2,"title":"【分库】使用 FreeSql.Cloud","slug":"【分库】使用-freesql-cloud","link":"#【分库】使用-freesql-cloud","children":[]}],"git":{"createdTime":1612454598000,"updatedTime":1661393597000,"contributors":[{"name":"2881099","email":"2881099@users.noreply.github.com","commits":11},{"name":"igeekfan","email":"luoyunchong@foxmail.com","commits":4},{"name":"luoyunchong","email":"luoyunchong@foxmai.com","commits":2},{"name":"luoyunchong","email":"luoyunchong@foxmail.com","commits":2},{"name":"Carbon","email":"1149328035@qq.com","commits":1}]},"readingTime":{"minutes":4.68,"words":1403},"filePathRelative":"guide/sharding.md","localizedDate":"2021年2月4日"}');export{e as data};
