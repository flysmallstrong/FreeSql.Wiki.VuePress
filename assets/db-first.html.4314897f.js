import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{c as o,a as e,b as a,d as t,e as n,r as l,o as r}from"./app.d024ebab.js";const d={},c=t(`<h1 id="db-first" tabindex="-1"><a class="header-anchor" href="#db-first" aria-hidden="true">#</a> DB First</h1><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span>
     <span class="token string">&quot;Data Source=127.0.0.1;Port=3306;User ID=root;Password=root;Initial Catalog=cccddd;Charset=utf8;SslMode=none;Max pool size=10&quot;</span>
     <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BF7\u52A1\u5FC5\u5B9A\u4E49\u6210 Singleton \u5355\u4F8B\u6A21\u5F0F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u6240\u6709\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6240\u6709\u6570\u636E\u5E93" aria-hidden="true">#</a> \u83B7\u53D6\u6240\u6709\u6570\u636E\u5E93</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> fsql<span class="token punctuation">.</span>DbFirst<span class="token punctuation">.</span><span class="token function">GetDatabases</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u8FD4\u56DE\u5B57\u7B26\u4E32\u6570\u7EC4, [&quot;cccddd&quot;, &quot;test&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u6307\u5B9A\u6570\u636E\u5E93\u7684\u8868\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6307\u5B9A\u6570\u636E\u5E93\u7684\u8868\u4FE1\u606F" aria-hidden="true">#</a> \u83B7\u53D6\u6307\u5B9A\u6570\u636E\u5E93\u7684\u8868\u4FE1\u606F</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t2 <span class="token operator">=</span> fsql<span class="token punctuation">.</span>DbFirst<span class="token punctuation">.</span><span class="token function">GetTablesByDatabase</span><span class="token punctuation">(</span>fsql<span class="token punctuation">.</span>DbFirst<span class="token punctuation">.</span><span class="token function">GetDatabases</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u8FD4\u56DE\u5305\u62EC\u8868\u3001\u5217\u8BE6\u60C5\u3001\u4E3B\u952E\u3001\u552F\u4E00\u952E\u3001\u7D22\u5F15\u3001\u5916\u952E\u3001\u5907\u6CE8\u7B49\u7B49</span>

<span class="token class-name"><span class="token keyword">var</span></span> t3 <span class="token operator">=</span> fsql<span class="token punctuation">.</span>DbFirst<span class="token punctuation">.</span><span class="token function">GetTableByName</span><span class="token punctuation">(</span><span class="token string">&quot;table1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u8FD4\u56DE\u8868\u7684\u5217\u8BE6\u60C5\u3001\u4E3B\u952E\u3001\u552F\u4E00\u952E\u3001\u7D22\u5F15\u3001\u5907\u6CE8\u7B49\u7B49</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="net-core-cli-\u63A8\u8350\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#net-core-cli-\u63A8\u8350\u4F7F\u7528" aria-hidden="true">#</a> .NET Core CLI(\u63A8\u8350\u4F7F\u7528)</h2><p>\u4EE3\u7801\u751F\u6210\u5668<code>FreeSql.Generator</code>,\u662F FreeSql \u7684\u4EE3\u7801\u751F\u6210\u5668\uFF0C\u53EF\u751F\u6210\u5B9E\u4F53\u7C7B\uFF0C\u652F\u6301\u5C06\u6570\u636E\u5E93\u5B9E\u4F53\u52A8\u6001\u751F\u6210\u5B9E\u4F53\uFF0C\u9ED8\u8BA4\u6709\u4E8C\u4E2A\u6A21\u677F\uFF0C\u57FA\u4E8E Razor\uFF0C\u53EF\u6307\u5B9A\u81EA\u5B9A\u4E49\u6A21\u677F</p><ul><li><code>dotnet-tool</code>\u5B89\u88C5 <code>FreeSql.Generator</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet tool <span class="token function">install</span> -g FreeSql.Generator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u66F4\u65B0<code>FreeSql.Generator</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet tool update -g FreeSql.Generator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B0\u5EFA\u76EE\u5F55\uFF0C\u5728\u5730\u5740\u680F\u8F93\u5165 cmd \u5FEB\u901F\u6253\u5F00\u547D\u4EE4\u7A97\u53E3\uFF0C\u8F93\u5165\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FreeSql.Generator --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u547D\u4EE4\u884C\u5DE5\u5177\u751F\u6210\u5B9E\u4F53\u7C7B\u6781\u5927\u597D\u5904\uFF0C\u540E\u7EED\u518D\u6B21\u751F\u6210\u8986\u76D6\u64CD\u4F5C\u7B49\u4E8E\u4E00\u952E\u5B8C\u6210\uFF0C\u5E76\u4E14\u652F\u6301 Mac/Linux \u5E73\u53F0\u3002</p>`,15),u={href:"https://www.cnblogs.com/igeekfan/p/freesql-generator.html",target:"_blank",rel:"noopener noreferrer"},p=n("\u8BE6\u7EC6\u89E3\u8BFB\uFF1A\u751F\u6210\u5668\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F"),v=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>C:\\WINDOWS\\system32&gt;FreeSql.Generator --help
        ____                   ____         __
       / __/  ____ ___  ___   / __/ ___ _  / /
      / _/   / __// -_)/ -_) _\\ \\  / _ \`/ / /
     /_/    /_/   \\__/ \\__/ /___/  \\_, / /_/
                                    /_/


  # Github # https://github.com/dotnetcore/FreeSql v2.0.105

    FreeSql \u5FEB\u901F\u751F\u6210\u6570\u636E\u5E93\u7684\u5B9E\u4F53\u7C7B

    \u66F4\u65B0\u5DE5\u5177\uFF1Adotnet tool update -g FreeSql.Generator


  # \u5FEB\u901F\u5F00\u59CB #

  &gt; FreeSql.Generator -Razor 1 -NameOptions 0,0,0,0 -NameSpace MyProject -DB &quot;MySql,Data Source=127.0.0.1;...&quot;

     -Razor 1                  * \u9009\u62E9\u6A21\u677F\uFF1A\u5B9E\u4F53\u7C7B+\u7279\u6027
     -Razor 2                  * \u9009\u62E9\u6A21\u677F\uFF1A\u5B9E\u4F53\u7C7B+\u7279\u6027+\u5BFC\u822A\u5C5E\u6027
     -Razor &quot;d:\\diy.cshtml&quot;    * \u81EA\u5B9A\u4E49\u6A21\u677F\u6587\u4EF6

     -NameOptions              * 4\u4E2A\u5E03\u5C14\u503C\u5BF9\u5E94\uFF1A
                                 \u9996\u5B57\u6BCD\u5927\u5199
                                 \u9996\u5B57\u6BCD\u5927\u5199,\u5176\u4ED6\u5C0F\u5199
                                 \u5168\u90E8\u5C0F\u5199
                                 \u4E0B\u5212\u7EBF\u8F6C\u9A7C\u5CF0

     -NameSpace                * \u547D\u540D\u7A7A\u95F4

     -DB &quot;MySql,data source=127.0.0.1;port=3306;user id=root;password=root;initial catalog=\u6570\u636E\u5E93;charset=utf8;sslmode=none;max pool size=2&quot;
     -DB &quot;SqlServer,data source=.;integrated security=True;initial catalog=\u6570\u636E\u5E93;pooling=true;max pool size=2&quot;
     -DB &quot;PostgreSQL,host=192.168.164.10;port=5432;username=postgres;password=123456;database=\u6570\u636E\u5E93;pooling=true;maximum pool size=2&quot;
     -DB &quot;Oracle,user id=user1;password=123456;data source=//127.0.0.1:1521/XE;pooling=true;max pool size=2&quot;
     -DB &quot;Sqlite,data source=document.db&quot;
     -DB &quot;Firebird,database=localhost:D:\\fbdata\\EXAMPLES.fdb;user=sysdba;password=123456;max pool size=2&quot;
     -DB &quot;Dameng,server=127.0.0.1;port=5236;user id=2user;password=123456789;database=2user;poolsize=2&quot;
     -DB &quot;KingbaseES,server=127.0.0.1;port=54321;uid=USER2;pwd=123456789;database=\u6570\u636E\u5E93&quot;
     -DB &quot;ShenTong,host=192.168.164.10;port=2003;database=\u6570\u636E\u5E93;username=SYSDBA;password=szoscar55;maxpoolsize=2&quot;
                               * Dameng(\u8FBE\u68A6\u6570\u636E\u5E93)\u3001KingbaseES(\u4EBA\u5927\u91D1\u4ED3\u6570\u636E\u5E93)\u3001ShenTong(\u795E\u821F\u901A\u7528\u6570\u636E\u5E93)

     -Filter                   Table+View+StoreProcedure
                               \u9ED8\u8BA4\u751F\u6210\uFF1A\u8868+\u89C6\u56FE+\u5B58\u50A8\u8FC7\u7A0B
                               \u5982\u679C\u4E0D\u60F3\u751F\u6210\u89C6\u56FE\u548C\u5B58\u50A8\u8FC7\u7A0B -Filter View+StoreProcedure

     -Match                    \u8868\u540D\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u53EA\u751F\u6210\u5339\u914D\u7684\u8868\uFF0C\u5982\uFF1Adbo\\.TB_.+

     -FileName                 \u6587\u4EF6\u540D\uFF0C\u9ED8\u8BA4\uFF1A{name}.cs
     -Output                   \u4FDD\u5B58\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D shell \u6240\u5728\u76EE\u5F55
                               \u63A8\u8350\u5728\u5B9E\u4F53\u7C7B\u76EE\u5F55\u521B\u5EFA gen.bat\uFF0C\u53CC\u51FB\u5B83\u91CD\u65B0\u6240\u6709\u5B9E\u4F53\u7C7B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u7528\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u9009\u9879" aria-hidden="true">#</a> \u5E38\u7528\u9009\u9879</h3><table><thead><tr><th style="text-align:left;">\u9009\u9879</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">-Razor</td><td style="text-align:left;">\u9009\u62E9\u6A21\u677F\uFF1A<code>\u5B9E\u4F53\u7C7B+\u7279\u6027</code> <code>-Razor 1</code> /<code>\u5B9E\u4F53\u7C7B+\u7279\u6027+\u5BFC\u822A\u5C5E\u6027</code> <code>-Razor 1</code>/<code>\u81EA\u5B9A\u4E49\u6A21\u677F\u6587\u4EF6</code> <code>-Razor &quot;d:\\diy.cshtml&quot;</code></td></tr><tr><td style="text-align:left;">-NameOptions</td><td style="text-align:left;">\u751F\u6210\u7684\u5B9E\u4F53\u547D\u540D\u89C4\u8303\uFF0C\u5E94\u53EA\u8BBE\u7F6E\u67D0\u4E00\u4E2A\u4E3A\u53C2\u6570\u4E3A 1\uFF0C\u5176\u4E2D 4 \u4E2A\u5E03\u5C14\u503C\u5BF9\u5E94\uFF1A<code>\u9996\u5B57\u6BCD\u5927\u5199</code>/<code>\u9996\u5B57\u6BCD\u5927\u5199,\u5176\u4ED6\u5C0F\u5199</code>/<code>\u5168\u90E8\u5C0F\u5199</code>/<code>\u4E0B\u5212\u7EBF\u8F6C\u9A7C</code>\uFF08-NameOptions 0,0,0,1\uFF09</td></tr><tr><td style="text-align:left;">-NameSpace</td><td style="text-align:left;">\u547D\u540D\u7A7A\u95F4</td></tr><tr><td style="text-align:left;">-DB</td><td style="text-align:left;">\u770B\u4E0B\u6587\u4E2D\u7684-DB \u53C2\u6570</td></tr><tr><td style="text-align:left;">-Filter</td><td style="text-align:left;">Table+View+StoreProcedure\uFF08 \u9ED8\u8BA4\u751F\u6210\uFF1A\u8868+\u89C6\u56FE+\u5B58\u50A8\u8FC7\u7A0B\uFF09\uFF0C \u5982\u679C\u4E0D\u60F3\u751F\u6210\u89C6\u56FE\u548C\u5B58\u50A8\u8FC7\u7A0B -Filter View+StoreProcedure</td></tr><tr><td style="text-align:left;">-Match</td><td style="text-align:left;">\u8868\u540D\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u53EA\u751F\u6210\u5339\u914D\u7684\u8868\uFF0C\u5982\uFF1Adbo.TB_.+</td></tr><tr><td style="text-align:left;">-FileName</td><td style="text-align:left;">\u6587\u4EF6\u540D\uFF0C\u9ED8\u8BA4\uFF1A{name}.cs</td></tr><tr><td style="text-align:left;">-Output</td><td style="text-align:left;">\u63A8\u8350\u5728\u5B9E\u4F53\u7C7B\u76EE\u5F55\u521B\u5EFA gen.bat\uFF0C\u53CC\u51FB\u5B83\u91CD\u65B0\u6240\u6709\u5B9E\u4F53\u7C7B</td></tr></tbody></table><h3 id="db-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#db-\u53C2\u6570" aria-hidden="true">#</a> -DB \u53C2\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-DB &quot;MySql,data source=127.0.0.1;port=3306;user id=root;password=root;initial catalog=\u6570\u636E\u5E93;charset=utf8;sslmode=none;max pool size=2&quot;
-DB &quot;SqlServer,data source=.;integrated security=True;initial catalog=\u6570\u636E\u5E93;pooling=true;max pool size=2&quot;
-DB &quot;PostgreSQL,host=192.168.164.10;port=5432;username=postgres;password=123456;database=\u6570\u636E\u5E93;pooling=true;maximum pool size=2&quot;
-DB &quot;Oracle,user id=user1;password=123456;data source=//127.0.0.1:1521/XE;pooling=true;max pool size=2&quot;
-DB &quot;Sqlite,data source=document.db&quot;
-DB &quot;Firebird,database=localhost:D:\\fbdata\\EXAMPLES.fdb;user=sysdba;password=123456;max pool size=2&quot;
-DB &quot;Dameng,server=127.0.0.1;port=5236;user id=2user;password=123456789;database=2user;poolsize=2&quot;
-DB &quot;KingbaseES,server=127.0.0.1;port=54321;uid=USER2;pwd=123456789;database=\u6570\u636E\u5E93&quot;
-DB &quot;ShenTong,host=192.168.164.10;port=2003;database=\u6570\u636E\u5E93;username=SYSDBA;password=szoscar55;maxpoolsize=2&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><blockquote><p>FreeSql.Generator -Razor 1 -NameOptions 0,0,0,1 -NameSpace LinCms.Core.Entities -DB &quot;MySql,Data Source=127.0.0.1;Port=3306;User ID=root;Password=123456;Initial Catalog=lincms;Charset=utf8;SslMode=none;Max pool size=2&quot;</p></blockquote><ul><li>\u6570\u636E\u5E93\u8868\u540D\u662F\u4E0B\u5212\u7EBF\uFF0C\u5B57\u6BB5\u4E5F\u662F\u4E0B\u5212\u7EBF\u65B9\u5F0F\u3002</li><li>-Razor \u6307\u5B9A \u7B2C\u4E00\u4E2A\u6A21\u677F</li><li>-NameOptions 0,0,0,1 \u6700\u540E\u4E00\u4E2A 1\uFF0C\u4EE3\u8868 \u4E0B\u5212\u7EBF\u8F6C\u9A7C\u5CF0\uFF0C\u6EE1\u8DB3 C#\u547D\u540D\u89C4\u5219</li><li>-NameSpace \u6307\u5B9A\u4E86\u547D\u540D\u7A7A\u95F4 LinCms.Core.Entities</li><li>-DB \u5C31\u662F\u6570\u636E\u5E93\u7684\u76F8\u5173\u914D\u7F6E</li><li>mysql \u672C\u5730\u5730\u5740 127.0.0.1 3306 \u7AEF\u53E3 \u7528\u6237\u540D root \u5BC6\u7801 123456 \u6570\u636E\u5E93 lin-cms</li><li>-Match book \u8FD9\u6837\u5C31\u80FD\u53EA\u751F\u6210 book\uFF0C\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5982 -Math lin<em>user \u5C31\u4F1A\u751F\u6210\u4EE5 lin_user \u5F00\u5934\u7684\u8868\u3002\u5982 dbo.TB</em>.+\uFF0C\u4F1A\u751F\u6210\u4EE5 TB \u5F00\u5934\u7684\u8868\u3002\u5373\u53EA\u751F\u6210\u5339\u914D\u7684\u8868</li></ul><h2 id="\u5B89\u88C5-winform-\u751F\u6210\u5668-\u5DF2\u505C\u6B62\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-winform-\u751F\u6210\u5668-\u5DF2\u505C\u6B62\u66F4\u65B0" aria-hidden="true">#</a> \u5B89\u88C5 Winform \u751F\u6210\u5668\uFF08\u5DF2\u505C\u6B62\u66F4\u65B0\uFF09</h2>`,9),m=n("\u6E90\u7801\u5730\u5740\uFF1A"),b={href:"https://github.com/dotnetcore/FreeSql.Tools",target:"_blank",rel:"noopener noreferrer"},h=n("FreeSql.Tools"),g=n("\u4F5C\u8005\uFF1A"),_={href:"https://github.com/mypeng1985",target:"_blank",rel:"noopener noreferrer"},q=n("mypeng1985"),k=n(" \u5F00\u53D1\u4E86\u4E24\u4E2A\u7248\u672C"),f=e("p",null,[e("img",{src:"https://user-images.githubusercontent.com/16286519/76141354-4790e980-609e-11ea-869b-bb2c6980d98f.png",alt:"image",loading:"lazy"})],-1),S=e("p",null,[e("img",{src:"https://user-images.githubusercontent.com/16286519/58793525-e0cf3300-8628-11e9-8959-d2efed685843.png",alt:"image",loading:"lazy"})],-1);function x(y,D){const s=l("ExternalLinkIcon");return r(),o("div",null,[c,e("p",null,[e("a",u,[p,a(s)])]),v,e("p",null,[m,e("a",b,[h,a(s)])]),e("blockquote",null,[e("p",null,[g,e("a",_,[q,a(s)]),k])]),f,S])}var w=i(d,[["render",x],["__file","db-first.html.vue"]]);export{w as default};
