const e=JSON.parse('{"key":"v-1d73af95","path":"/guide/performance.html","title":"性能","lang":"zh-CN","frontmatter":{"description":"FreeSql 实现了强大功能的同时，性能没有受到影响，项目中使用反射或耗时的操作都经过了缓存处理。读取数据部分采用了 ExpressionTree，使得 FreeSql 解析实体数据的速度与 Dapper 非常接近。 测试结果(52 个字段) 18W 1W 5K 2K 1K 500 100 50 ---------------------------...","head":[["meta",{"property":"og:url","content":"https://freesql.net/guide/performance.html"}],["meta",{"property":"og:site_name","content":"FreeSql 官方文档"}],["meta",{"property":"og:title","content":"性能"}],["meta",{"property":"og:description","content":"FreeSql 实现了强大功能的同时，性能没有受到影响，项目中使用反射或耗时的操作都经过了缓存处理。读取数据部分采用了 ExpressionTree，使得 FreeSql 解析实体数据的速度与 Dapper 非常接近。 测试结果(52 个字段) 18W 1W 5K 2K 1K 500 100 50 ---------------------------..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-05-16T12:50:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-05-16T12:50:28.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://freesql.net/en/guide/performance.html"}]]},"excerpt":"","headers":[{"level":3,"title":"测试结果(52 个字段)","slug":"测试结果-52-个字段","link":"#测试结果-52-个字段","children":[]},{"level":3,"title":"测试结果(10 个字段)","slug":"测试结果-10-个字段","link":"#测试结果-10-个字段","children":[]},{"level":3,"title":"测试结果","slug":"测试结果","link":"#测试结果","children":[]},{"level":3,"title":"执行 SQL 返回实体列表 Dapper.Query<Class> VS FreeSql.Query<Class>","slug":"执行-sql-返回实体列表-dapper-query-class-vs-freesql-query-class","link":"#执行-sql-返回实体列表-dapper-query-class-vs-freesql-query-class","children":[]},{"level":3,"title":"执行 SQL 返回元组列表 Dapper.Query<Tuple> VS FreeSql.Query<Tuple>","slug":"执行-sql-返回元组列表-dapper-query-tuple-vs-freesql-query-tuple","link":"#执行-sql-返回元组列表-dapper-query-tuple-vs-freesql-query-tuple","children":[]},{"level":3,"title":"执行 SQL 返回 dynamic 列表 Dapper.Query<dynamic> VS FreeSql.Query<dynamic>","slug":"执行-sql-返回-dynamic-列表-dapper-query-dynamic-vs-freesql-query-dynamic","link":"#执行-sql-返回-dynamic-列表-dapper-query-dynamic-vs-freesql-query-dynamic","children":[]},{"level":3,"title":"Dapper.Query VS FreeSql.ToList","slug":"dapper-query-vs-freesql-tolist","link":"#dapper-query-vs-freesql-tolist","children":[]}],"git":{"createdTime":1612454598000,"updatedTime":1652705428000,"contributors":[{"name":"igeekfan","email":"luoyunchong@foxmail.com","commits":1},{"name":"luoyunchong","email":"luoyunchong@foxmail.com","commits":1}]},"readingTime":{"minutes":3.55,"words":1065},"filePathRelative":"guide/performance.md","localizedDate":"2021年2月4日"}');export{e as data};
