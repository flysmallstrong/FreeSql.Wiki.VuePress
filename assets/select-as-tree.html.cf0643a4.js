const e=JSON.parse('{"key":"v-52acee36","path":"/guide/select-as-tree.html","title":"树型查询 ✨","lang":"zh-CN","frontmatter":{"description":"无限级分类（父子）是一种比较常用的表设计，每种设计方式突出优势的同时也带来缺陷，如： 方法 1：表设计中只有 parent_id 字段，困扰：查询麻烦（本文可解决）；; 方法 2：表设计中冗余子级 id 便于查询，困扰：添加/更新/删除的时候需要重新计算；; 方法 3：表设计中存储左右值编码，困扰：同上；; 方法 1 设计最简单，本文解决它的递归查询问...","head":[["meta",{"property":"og:url","content":"https://freesql.net/guide/select-as-tree.html"}],["meta",{"property":"og:site_name","content":"FreeSql 官方文档"}],["meta",{"property":"og:title","content":"树型查询 ✨"}],["meta",{"property":"og:description","content":"无限级分类（父子）是一种比较常用的表设计，每种设计方式突出优势的同时也带来缺陷，如： 方法 1：表设计中只有 parent_id 字段，困扰：查询麻烦（本文可解决）；; 方法 2：表设计中冗余子级 id 便于查询，困扰：添加/更新/删除的时候需要重新计算；; 方法 3：表设计中存储左右值编码，困扰：同上；; 方法 1 设计最简单，本文解决它的递归查询问..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-30T02:15:32.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2022-09-30T02:15:32.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://freesql.net/en/guide/select-as-tree.html"}]]},"excerpt":"","headers":[{"level":2,"title":"父子导航属性","slug":"父子导航属性","link":"#父子导航属性","children":[]},{"level":2,"title":"1、ToTreeList","slug":"_1、totreelist","link":"#_1、totreelist","children":[]},{"level":2,"title":"2、AsTreeCte 递归删除","slug":"_2、astreecte-递归删除","link":"#_2、astreecte-递归删除","children":[]},{"level":2,"title":"3、AsTreeCte 递归查询","slug":"_3、astreecte-递归查询","link":"#_3、astreecte-递归查询","children":[]}],"git":{"createdTime":1612454598000,"updatedTime":1664504132000,"contributors":[{"name":"igeekfan","email":"luoyunchong@foxmail.com","commits":2},{"name":"IGeekFan","email":"luoyunchong@foxmail.com","commits":1},{"name":"luoyunchong","email":"luoyunchong@foxmai.com","commits":1},{"name":"luoyunchong","email":"luoyunchong@foxmail.com","commits":1}]},"readingTime":{"minutes":3.82,"words":1146},"filePathRelative":"guide/select-as-tree.md","localizedDate":"2021年2月4日"}');export{e as data};
