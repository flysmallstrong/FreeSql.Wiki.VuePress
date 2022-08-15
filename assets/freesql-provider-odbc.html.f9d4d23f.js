import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r,c as o,a as e,b as p,F as c,d as n,e as s,o as l}from"./app.93e2de31.js";const i={},d=n('<h1 id="freesql-provider-odbc" tabindex="-1"><a class="header-anchor" href="#freesql-provider-odbc" aria-hidden="true">#</a> FreeSql.Provider.Odbc</h1><p>FreeSql.Provider.Odbc \u5B9E\u73B0 ODBC \u8BBF\u95EE\u6570\u636E\u5E93\uFF0CODBC \u5C5E\u4E8E\u6BD4\u8F83\u539F\u59CB\u7684\u6280\u672F\uFF0C\u66F4\u65B0\u6162\uFF0C\u5404\u5927\u6570\u636E\u5E93\u5382\u652F\u6301\u5F97\u6807\u51C6\u4E0D\u4E00\uFF0C\u4E0D\u5230\u4E07\u4E0D\u5F97\u5DF2\u6700\u597D\u522B\u7528 odbc\uFF0C\u5751\u6BD4\u8F83\u591A\u3002</p><p>FreeSql.Provider.Odbc \u505A\u4E86\u4E03\u79CD\u6570\u636E\u5E93\u7684\u4E13\u7528\u5B9E\u73B0\uFF1ASqlServer\u3001PostgreSQL\u3001Oracle\u3001MySql\u3001\u8FBE\u68A6\u3001\u4EBA\u5927\u91D1\u4ED3\uFF0C\u548C\u4E00\u79CD\u901A\u7528\u5B9E\u73B0\u3002</p><p>\u4E13\u7528\u5B9E\u73B0\u6BD4\u8F83\u6709\u9488\u5BF9\u6027\uFF0C\u548C\u539F\u6765\u7684 FreeSql.Provider.SqlServer ado.net \u76F8\u6BD4\uFF0C\u53EA\u652F\u6301\u8F83\u5C11\u7684\u57FA\u7840\u7C7B\u578B\uFF0C\u5176\u4ED6\u529F\u80FD\u51E0\u4E4E\u90FD\u6709\uFF0C\u5305\u62EC CodeFirst \u81EA\u52A8\u8FC1\u79FB\u3002</p><h2 id="\u901A\u7528\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u5B9E\u73B0" aria-hidden="true">#</a> \u901A\u7528\u5B9E\u73B0</h2><p>\u901A\u7528\u5B9E\u73B0\u4E3A\u4E86\u8BA9\u7528\u6237\u81EA\u5DF1\u9002\u914D\u66F4\u591A\u7684\u6570\u636E\u5E93\uFF0C\u6BD4\u5982\u8FDE\u63A5 mssql 2000\u3001db2 \u7B49\u6570\u636E\u5E93\uFF0C\u727A\u7272\u4E86\u4E00\u4E9B\u529F\u80FD\uFF1A</p><ul><li>\u4E0D\u652F\u6301 CodeFirst \u81EA\u52A8\u8FC1\u79FB</li><li>\u4E0D\u652F\u6301 DbFirst \u63A5\u53E3\u65B9\u6CD5\u7684\u5B9E\u73B0</li><li>\u4E0D\u652F\u6301 \u539F\u6765\u7684\u5206\u9875\u65B9\u6CD5\uFF0C\u9700\u8981\u81EA\u884C\u5224\u65AD id \u8FDB\u884C\u5206\u9875</li><li>\u53EA\u652F\u6301\u8F83\u5C11\u7684\u57FA\u7840\u7C7B\u578B\uFF1Abool,sbyte,short,int,long,byte,ushort,uint,ulong,double,float,decimal,DateTime,byte[],string,Guid</li></ul><p>\u4F7F\u7528\u8005\u53EA\u9700\u8981\u91CD\u5199\u7C7B FreeSql.Odbc.Default.OdbcAdapter \u5C31\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8BBF\u95EE\u4E0D\u540C\u7684\u6570\u636E\u5E93\u3002</p>',8),u=s("\u6211\u4EEC\u9ED8\u8BA4\u505A\u4E86\u4E00\u5957 sqlserver \u7684\u8BED\u6CD5\u548C\u6620\u5C04\u9002\u914D\uFF0C\u4EE3\u7801\u5728 "),b={href:"https://github.com/dotnetcore/FreeSql/blob/master/Providers/FreeSql.Provider.Odbc/Default/OdbcAdapter.cs",target:"_blank",rel:"noopener noreferrer"},k=s("Default/OdbcAdapter.cs"),m=s("\uFF0C\u8BF7\u67E5\u770B\u4EE3\u7801\u4E86\u89E3\u3002"),h=n(`<div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Mssql2000Adapter</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">FreeSql<span class="token punctuation">.</span>Odbc<span class="token punctuation">.</span>Default<span class="token punctuation">.</span>OdbcAdapter</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> InsertAfterGetIdentitySql <span class="token operator">=&gt;</span> <span class="token string">&quot;SELECT SCOPE_IDENTITY()&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//\u53EF\u4EE5\u91CD\u5199\u66F4\u591A\u7684\u8BBE\u7F6E</span>
<span class="token punctuation">}</span>

fsql<span class="token punctuation">.</span><span class="token function">SetOdbcAdapter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Mssql2000Adapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u9002\u914D\u597D\u65B0\u7684 OdbcAdapter \u540E\uFF0C\u8BF7\u5728 FreeSqlBuilder.Build \u4E4B\u540E\u8C03\u7528 IFreeSql.SetOdbcAdapter \u65B9\u6CD5\u751F\u6548\u3002</p>`,2);function _(q,f){const a=r("ExternalLinkIcon");return l(),o(c,null,[d,e("p",null,[u,e("a",b,[k,p(a)]),m]),h],64)}var O=t(i,[["render",_],["__file","freesql-provider-odbc.html.vue"]]);export{O as default};
