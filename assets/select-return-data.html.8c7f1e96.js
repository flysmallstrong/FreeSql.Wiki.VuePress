const e=JSON.parse('{"key":"v-aaf75552","path":"/guide/select-return-data.html","title":"返回数据 ✨","lang":"zh-CN","frontmatter":{"description":"FreeSql 采用 ExpressionTree 优化读取速度，如果懂技术的你一定知道 .NET Core 技术下除了原生代码，最快就是 Emit 和 ExpressionTree。项目在初期使用的反射 + 缓存，虽然 .NET Core 优化了反射性能，但经过与 Dapper 性能测试对比之后，发现仍然有一定差距，改成 ExpresstionTre...","head":[["meta",{"property":"og:url","content":"https://freesql.net/guide/select-return-data.html"}],["meta",{"property":"og:site_name","content":"FreeSql 官方文档"}],["meta",{"property":"og:title","content":"返回数据 ✨"}],["meta",{"property":"og:description","content":"FreeSql 采用 ExpressionTree 优化读取速度，如果懂技术的你一定知道 .NET Core 技术下除了原生代码，最快就是 Emit 和 ExpressionTree。项目在初期使用的反射 + 缓存，虽然 .NET Core 优化了反射性能，但经过与 Dapper 性能测试对比之后，发现仍然有一定差距，改成 ExpresstionTre..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-17T14:27:15.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-09-17T14:27:15.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://freesql.net/en/guide/select-return-data.html"}]]},"excerpt":"","headers":[{"level":2,"title":"1、返回单条记录","slug":"_1、返回单条记录","link":"#_1、返回单条记录","children":[]},{"level":2,"title":"2、返回 List","slug":"_2、返回-list","link":"#_2、返回-list","children":[]},{"level":2,"title":"3、返回 TreeList","slug":"_3、返回-treelist","link":"#_3、返回-treelist","children":[]},{"level":2,"title":"4、返回 List + 导航属性的数据","slug":"_4、返回-list-导航属性的数据","link":"#_4、返回-list-导航属性的数据","children":[]},{"level":2,"title":"5、指定字段返回","slug":"_5、指定字段返回","link":"#_5、指定字段返回","children":[]},{"level":2,"title":"6、忽略字段返回","slug":"_6、忽略字段返回","link":"#_6、忽略字段返回","children":[]},{"level":2,"title":"7、Dto 映射返回","slug":"_7、dto-映射返回","link":"#_7、dto-映射返回","children":[]},{"level":2,"title":"8、ToChunk 分段返回","slug":"_8、tochunk-分段返回","link":"#_8、tochunk-分段返回","children":[]},{"level":2,"title":"9、ToSql","slug":"_9、tosql","link":"#_9、tosql","children":[]},{"level":2,"title":"10、执行 SQL","slug":"_10、执行-sql","link":"#_10、执行-sql","children":[]},{"level":2,"title":"11、WithSql","slug":"_11、withsql","link":"#_11、withsql","children":[]},{"level":2,"title":"12、API","slug":"_12、api","link":"#_12、api","children":[]}],"git":{"createdTime":1612454598000,"updatedTime":1663424835000,"contributors":[{"name":"2881099","email":"2881099@users.noreply.github.com","commits":6},{"name":"igeekfan","email":"luoyunchong@foxmail.com","commits":3},{"name":"luoyunchong","email":"luoyunchong@foxmail.com","commits":2},{"name":"luoyunchong","email":"luoyunchong@foxmai.com","commits":1}]},"readingTime":{"minutes":5.44,"words":1631},"filePathRelative":"guide/select-return-data.md","localizedDate":"2021年2月4日"}');export{e as data};
