import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{c as k,b as a,w as t,a as n,d as p,e as s,r as o,o as m}from"./app.d024ebab.js";const v={},h=p('<p><code>FreeSql.Repository</code> \u4F5C\u4E3A\u6269\u5C55\uFF0C\u5B9E\u73B0\u4E86\u901A\u7528\u4ED3\u50A8\u5C42\u529F\u80FD\u3002\u4E0E\u5176\u4ED6\u89C4\u8303\u6807\u51C6\u4E00\u6837\uFF0C\u4ED3\u50A8\u5C42\u4E5F\u6709\u76F8\u5E94\u7684\u89C4\u8303\u5B9A\u4E49\u3002FreeSql.Repository \u53C2\u8003 abp vnext \u63A5\u53E3\uFF0C\u5B9A\u4E49\u548C\u5B9E\u73B0\u57FA\u7840\u7684\u4ED3\u50A8\u5C42\uFF08CURD\uFF09\uFF0C\u5E94\u8BE5\u7B97\u6BD4\u8F83\u901A\u7528\u7684\u65B9\u6CD5\u5427\u3002</p><h2 id="\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a> \u7279\u6027</h2><ul><li>Select/Attach \u5FEB\u7167\u5BF9\u8C61\uFF0CUpdate \u53EA\u66F4\u65B0\u53D8\u5316\u7684\u5B57\u6BB5\uFF1B</li><li>Insert \u63D2\u5165\u6570\u636E\uFF0C\u9002\u914D\u5404\u6570\u636E\u5E93\u4F18\u5316\u6267\u884C ExecuteAffrows/ExecuteIdentity/ExecuteInserted\uFF1B</li><li>InsertOrUpdate \u63D2\u5165\u6216\u66F4\u65B0\uFF1B</li><li>SaveMany \u65B9\u6CD5\u5FEB\u901F\u4FDD\u5B58\u5BFC\u822A\u5BF9\u8C61\uFF08\u4E00\u5BF9\u591A\u3001\u591A\u5BF9\u591A\uFF09\uFF1B</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2>',4),g=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[s(" dotnet "),n("span",{class:"token function"},"add"),s(` package FreeSql.Repository
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,`Install-Package FreeSql.Repository
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),y=p(`<h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//\u81EA\u52A8\u8FC1\u79FB\u5B9E\u4F53\u7684\u7ED3\u6784\u5230\u6570\u636E\u5E93</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BF7\u52A1\u5FC5\u5B9A\u4E49\u6210 Singleton \u5355\u4F8B\u6A21\u5F0F</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Song</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><p>\u65B9\u6CD5 1\u3001IFreeSql \u7684\u6269\u5C55\u65B9\u6CD5\uFF1B</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> curd <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF1ARepository \u5BF9\u8C61\u591A\u7EBF\u7A0B\u4E0D\u5B89\u5168,\u56E0\u6B64\u4E0D\u5E94\u5728\u591A\u4E2A\u7EBF\u7A0B\u4E0A\u540C\u65F6\u5BF9\u5176\u6267\u884C\u5DE5\u4F5C\u3002</p></blockquote><ul><li>\u4E0D\u652F\u6301\u4ECE\u4E0D\u540C\u7684\u7EBF\u7A0B\u540C\u65F6\u4F7F\u7528\u540C\u4E00\u4ED3\u50A8\u5B9E\u4F8B</li></ul><p>\u65B9\u6CD5 2\u3001\u7EE7\u627F\u5B9E\u73B0\uFF1B</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SongRepository</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseRepository<span class="token punctuation">&lt;</span>Song<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">SongRepository</span><span class="token punctuation">(</span><span class="token class-name">IFreeSql</span> fsql<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>fsql<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">//\u5728\u8FD9\u91CC\u589E\u52A0 CURD \u4EE5\u5916\u7684\u65B9\u6CD5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5 3\u3001\u4F9D\u8D56\u6CE8\u5165\uFF1B</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>fsql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    services<span class="token punctuation">.</span><span class="token function">AddFreeRepository</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Assembly<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5728\u63A7\u5236\u5668\u4F7F\u7528</span>
<span class="token keyword">public</span> <span class="token function">SongsController</span><span class="token punctuation">(</span><span class="token class-name">IBaseRepository<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span> songRepository<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F9D\u8D56\u6CE8\u5165\u7684\u65B9\u5F0F\u53EF\u5B9E\u73B0\u5168\u5C40\u3010\u8FC7\u6EE4\u4E0E\u9A8C\u8BC1\u3011\u7684\u8BBE\u5B9A\uFF0C\u65B9\u4FBF\u79DF\u6237\u529F\u80FD\u7684\u8BBE\u8BA1\uFF1B</p></blockquote>`,12),_=s("\u66F4\u591A\u8D44\u6599\uFF1A"),f=s("\u300A\u8FC7\u6EE4\u5668\u3001\u5168\u5C40\u8FC7\u6EE4\u5668\u300B"),T=p(`<h2 id="\u72B6\u6001\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u7BA1\u7406" aria-hidden="true">#</a> \u72B6\u6001\u7BA1\u7406</h2><p>\u53EA\u66F4\u65B0\u53D8\u5316\u7684\u5C5E\u6027\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> repo<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u6B64\u65F6\u5FEB\u7167 item</span>
item<span class="token punctuation">.</span>Title <span class="token operator">=</span> <span class="token string">&quot;newtitle&quot;</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5BF9\u6BD4\u5FEB\u7167\u65F6\u7684\u53D8\u5316</span>
<span class="token comment">//UPDATE \`tb_topic\` SET \`Title\` = ?p_0</span>
<span class="token comment">//WHERE (\`Id\` = 1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u662F\u4E0D\u662F\u89C9\u5F97\u5148\u67E5\u8BE2\u518D\u66F4\u65B0\uFF0C\u5570\u55E6\uFF1F</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">Attach</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6B64\u65F6\u5FEB\u7167 item</span>
item<span class="token punctuation">.</span>Title <span class="token operator">=</span> <span class="token string">&quot;newtitle&quot;</span><span class="token punctuation">;</span>
repo<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5BF9\u6BD4\u5FEB\u7167\u65F6\u7684\u53D8\u5316</span>
<span class="token comment">//UPDATE \`tb_topic\` SET \`Title\` = ?p_0</span>
<span class="token comment">//WHERE (\`Id\` = 1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>repo.CompareState(item) \u53EF\u83B7\u53D6 item \u7684\u72B6\u6001\u53D8\u5316\u4FE1\u606F</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// \u6BD4\u8F83\u5B9E\u4F53\uFF0C\u8BA1\u7B97\u51FA\u503C\u53D1\u751F\u53D8\u5316\u7684\u5C5E\u6027\uFF0C\u4EE5\u53CA\u5C5E\u6027\u53D8\u5316\u7684\u524D\u540E\u503C</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>newdata<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6700\u65B0\u7684\u5B9E\u4F53\u5BF9\u8C61\uFF0C\u5B83\u5C06\u4E0E\u9644\u52A0\u5B9E\u4F53\u7684\u72B6\u6001\u5BF9\u6BD4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>returns</span><span class="token punctuation">&gt;</span></span>key: \u5C5E\u6027\u540D, value: [\u65E7\u503C, \u65B0\u503C]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>returns</span><span class="token punctuation">&gt;</span></span></span>
<span class="token return-type class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">&gt;</span></span> <span class="token function">CompareState</span><span class="token punctuation">(</span><span class="token class-name">TEntity</span> newdata<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FC7\u6EE4\u4E0E\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4\u4E0E\u9A8C\u8BC1" aria-hidden="true">#</a> \u8FC7\u6EE4\u4E0E\u9A8C\u8BC1</h2><p>\u5047\u8BBE\u6211\u4EEC\u6709 User(\u7528\u6237)\u3001Topic(\u4E3B\u9898)\u4E24\u4E2A\u5B9E\u4F53\uFF0C\u5728\u9886\u57DF\u7C7B\u4E2D\u5B9A\u4E49\u4E86\u4E24\u4E2A\u4ED3\u50A8\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> userRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> topicRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u62C5\u5FC3 topicRepository \u7684\u6570\u636E\u5B89\u5168\u95EE\u9898\uFF0C\u5373\u6709\u53EF\u80FD\u67E5\u8BE2\u6216\u64CD\u4F5C\u5230\u5176\u4ED6\u7528\u6237\u7684\u4E3B\u9898\u3002\u56E0\u6B64\u6211\u4EEC\u5728 v0.0.7 \u7248\u672C\u8FDB\u884C\u4E86\u6539\u8FDB\uFF0C\u589E\u52A0\u4E86 filter lambda \u8868\u8FBE\u5F0F\u53C2\u6570\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> userRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> topicRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>UserId <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728\u67E5\u8BE2/\u4FEE\u6539/\u5220\u9664\u65F6\u9644\u52A0\u6B64\u6761\u4EF6\uFF0C\u4ECE\u800C\u8FBE\u5230\u4E0D\u4F1A\u4FEE\u6539\u5176\u4ED6\u7528\u6237\u7684\u6570\u636E\uFF1B</li><li>\u5728\u6DFB\u52A0\u65F6\uFF0C\u4F7F\u7528\u8868\u8FBE\u5F0F\u9A8C\u8BC1\u6570\u636E\u7684\u5408\u6CD5\u6027\uFF0C\u82E5\u4E0D\u5408\u6CD5\u5219\u629B\u51FA\u5F02\u5E38\uFF1B</li></ul><h2 id="\u5206\u8868\u4E0E\u5206\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5206\u8868\u4E0E\u5206\u5E93" aria-hidden="true">#</a> \u5206\u8868\u4E0E\u5206\u5E93</h2><p>FreeSql \u63D0\u4F9B AsTable \u5206\u8868\u7684\u57FA\u7840\u65B9\u6CD5\uFF0CGuidRepository \u4F5C\u4E3A\u5206\u5B58\u5F0F\u4ED3\u50A8\u5C06\u5B9E\u73B0\u4E86\u5206\u8868\u4E0E\u5206\u5E93\uFF08\u4E0D\u652F\u6301\u8DE8\u670D\u52A1\u5668\u5206\u5E93\uFF09\u7684\u5C01\u88C5\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> logRepository <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetGuidRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Log<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> oldname <span class="token operator">=&gt;</span> <span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">oldname</span><span class="token punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token string">&quot;YYYYMM&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u6211\u4EEC\u5F97\u5230\u4E00\u4E2A\u65E5\u5FD7\u4ED3\u50A8\u6309\u5E74\u6708\u5206\u8868\uFF0C\u4F7F\u7528\u5B83 CURD \u6700\u7EC8\u4F1A\u64CD\u4F5C Log_201903 \u8868\u3002</p><p>\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ul><li>v0.11.12 \u4EE5\u540E\u7684\u7248\u672C\u53EF\u4EE5\u4F7F\u7528 CodeFirst \u8FC1\u79FB\u5206\u8868\uFF1B</li><li>\u4E0D\u53EF\u5728\u5206\u8868\u5206\u5E93\u7684\u5B9E\u4F53\u7C7B\u578B\u4E2D\u4F7F\u7528\u300A\u5EF6\u65F6\u52A0\u8F7D\u300B\uFF1B</li></ul><h2 id="\u517C\u5BB9\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u95EE\u9898" aria-hidden="true">#</a> \u517C\u5BB9\u95EE\u9898</h2><p>SqlServer \u63D0\u4F9B\u7684 output inserted \u7279\u6027\uFF0C\u5728\u8868\u4F7F\u7528\u4E86\u81EA\u589E\u6216\u6570\u636E\u5E93\u5B9A\u4E49\u4E86\u9ED8\u8BA4\u503C\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u5B83\u53EF\u4EE5\u5FEB\u901F\u5C06 insert \u7684\u6570\u636E\u8FD4\u56DE\u3002PostgreSQL \u4E5F\u6709\u76F8\u5E94\u7684\u529F\u80FD\uFF0C\u5982\u6B64\u65B9\u4FBF\u4F46\u4E0D\u662F\u6BCF\u4E2A\u6570\u636E\u5E93\u90FD\u652F\u6301\u3002</p><p>\u5F53\u91C7\u7528\u4E86\u4E0D\u652F\u6301\u8BE5\u7279\u6027\u7684\u6570\u636E\u5E93\uFF08Sqlite/MySql/Oracle/\u8FBE\u68A6/\u5357\u5927\u901A\u7528/MsAccess\uFF09\uFF0C\u5E76\u4E14\u5B9E\u4F53\u4F7F\u7528\u4E86\u81EA\u589E\u5C5E\u6027\uFF0C\u4ED3\u50A8\u6279\u91CF\u63D2\u5165\u5C06\u53D8\u4E3A\u9010\u6761\u6267\u884C\uFF0C\u53EF\u4EE5\u8003\u8651\u4EE5\u4E0B\u6539\u8FDB\uFF1A</p><ul><li>\u4F7F\u7528 uuid \u4F5C\u4E3A\u4E3B\u952E\uFF08\u5373 Guid\uFF09\uFF1B</li><li>\u907F\u514D\u4F7F\u7528\u6570\u636E\u5E93\u7684\u9ED8\u8BA4\u503C\u529F\u80FD\uFF1B</li></ul><h2 id="\u8054\u7EA7\u4FDD\u5B58" tabindex="-1"><a class="header-anchor" href="#\u8054\u7EA7\u4FDD\u5B58" aria-hidden="true">#</a> \u8054\u7EA7\u4FDD\u5B58</h2>`,24),w=s("\u8BF7\u79FB\u6B65\u6587\u6863 "),E=s("\u300A\u8054\u7EA7\u4FDD\u5B58\u300B"),q=p('<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8FD4\u56DE\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>EntityType</td><td>Type</td><td>\u4ED3\u50A8\u6B63\u5728\u64CD\u4F5C\u7684\u5B9E\u4F53\u7C7B\u578B\uFF0C\u6CE8\u610F\u5B83\u4E0D\u4E00\u5B9A\u662F TEntity</td></tr><tr><td>UnitOfWork</td><td>IUnitOfWork</td><td>\u6B63\u5728\u4F7F\u7528\u7684\u5DE5\u4F5C\u5355\u5143</td></tr><tr><td>Orm</td><td>IFreeSql</td><td>\u6B63\u5728\u4F7F\u7528\u7684 Orm</td></tr><tr><td>DbContextOptions</td><td>DbContextOptions</td><td>\u6B63\u5728\u4F7F\u7528\u7684 DbContext \u8BBE\u7F6E\uFF0C\u4FEE\u6539\u8BBE\u7F6E\u4E0D\u5F71\u54CD\u5176\u4ED6</td></tr><tr><td>DataFilter</td><td>IDataFilter&lt;TEntity&gt;</td><td>\u4ED3\u50A8\u8FC7\u6EE4\u5668\uFF0C\u672C\u5BF9\u8C61\u5185\u751F\u6548</td></tr><tr><td>UpdateDiy</td><td>IUpdate&lt;TEntity&gt;</td><td>\u51C6\u5907\u66F4\u65B0\u6570\u636E\uFF0C\u4E0E\u4ED3\u50A8\u540C\u4E8B\u52A1</td></tr><tr><td>Select</td><td>ISelect&lt;TEntity&gt;</td><td>\u51C6\u5907\u67E5\u8BE2\u6570\u636E</td></tr></tbody></table>',2),S=n("thead",null,[n("tr",null,[n("th",null,"\u65B9\u6CD5"),n("th",null,"\u8FD4\u56DE\u503C"),n("th",null,"\u53C2\u6570"),n("th",null,"\u8BF4\u660E")])],-1),x=n("tr",null,[n("td",null,"AsType"),n("td",null,"void"),n("td",null,"Type"),n("td",null,"\u6539\u53D8\u4ED3\u50A8\u6B63\u5728\u64CD\u4F5C\u7684\u5B9E\u4F53\u7C7B\u578B")],-1),I=n("tr",null,[n("td",null,"Get"),n("td",null,"TEntity"),n("td",null,"TKey"),n("td",null,"\u6839\u636E\u4E3B\u952E\uFF0C\u67E5\u8BE2\u6570\u636E")],-1),R=n("tr",null,[n("td",null,"Find"),n("td",null,"TEntity"),n("td",null,"TKey"),n("td",null,"\u6839\u636E\u4E3B\u952E\uFF0C\u67E5\u8BE2\u6570\u636E")],-1),U=n("tr",null,[n("td",null,"Delete"),n("td",null,"int"),n("td",null,"TKey"),n("td",null,"\u6839\u636E\u4E3B\u952E\u5220\u9664\u6570\u636E")],-1),F=n("tr",null,[n("td",null,"Delete"),n("td",null,"int"),n("td",null,"Lambda"),n("td",null,"\u6839\u636E lambda \u6761\u4EF6\u5220\u9664\u6570\u636E")],-1),C=n("tr",null,[n("td",null,"Delete"),n("td",null,"int"),n("td",null,"TEntity"),n("td",null,"\u5220\u9664\u6570\u636E")],-1),D=n("tr",null,[n("td",null,"Delete"),n("td",null,"int"),n("td",null,"IEnumerable<TEntity>"),n("td",null,"\u6279\u91CF\u5220\u9664\u6570\u636E")],-1),A={href:"https://freesql.net/guide/cascade-delete.html",target:"_blank",rel:"noopener noreferrer"},G=s("DeleteCascadeByDatabase"),L=n("td",null,"List<object>",-1),B=n("td",null,"Lambda",-1),O=n("td",null,"\u6839\u636E\u5BFC\u822A\u5C5E\u6027\u9012\u5F52\u6570\u636E\u5E93\u5220\u9664\u6570\u636E",-1),M=n("tr",null,[n("td",null,"Insert"),n("td",null,"-"),n("td",null,"TEntity"),n("td",null,"\u63D2\u5165\u6570\u636E\uFF0C\u82E5\u5B9E\u4F53\u6709\u81EA\u589E\u5217\uFF0C\u63D2\u5165\u540E\u7684\u81EA\u589E\u503C\u4F1A\u586B\u5145\u5230\u5B9E\u4F53\u4E2D")],-1),N=n("tr",null,[n("td",null,"Insert"),n("td",null,"-"),n("td",null,"IEnumerable<TEntity>"),n("td",null,"\u6279\u91CF\u63D2\u5165\u6570\u636E")],-1),P=n("tr",null,[n("td",null,"Update"),n("td",null,"-"),n("td",null,"TEntity"),n("td",null,"\u66F4\u65B0\u6570\u636E")],-1),W=n("tr",null,[n("td",null,"Update"),n("td",null,"-"),n("td",null,"IEnumerable<TEntity>"),n("td",null,"\u6279\u91CF\u66F4\u65B0\u6570\u636E")],-1),V=n("tr",null,[n("td",null,"InsertOrUpdate"),n("td",null,"-"),n("td",null,"TEntity"),n("td",null,"\u63D2\u5165\u6216\u66F4\u65B0\u6570\u636E")],-1),Y=n("tr",null,[n("td",null,"FlushState"),n("td",null,"-"),n("td",null,"\u65E0"),n("td",null,"\u6E05\u9664\u72B6\u6001\u7BA1\u7406\u6570\u636E")],-1),K=n("tr",null,[n("td",null,"Attach"),n("td",null,"-"),n("td",null,"TEntity"),n("td",null,"\u9644\u52A0\u5B9E\u4F53\u5230\u72B6\u6001\u7BA1\u7406\uFF0C\u53EF\u7528\u4E8E\u4E0D\u67E5\u8BE2\u5C31\u66F4\u65B0\u6216\u5220\u9664")],-1),j=n("tr",null,[n("td",null,"Attach"),n("td",null,"-"),n("td",null,"IEnumerable<TEntity>"),n("td",null,"\u6279\u91CF\u9644\u52A0\u5B9E\u4F53\u5230\u72B6\u6001\u7BA1\u7406")],-1),H=n("tr",null,[n("td",null,"AttachOnlyPrimary"),n("td",null,"-"),n("td",null,"TEntity"),n("td",null,"\u53EA\u9644\u52A0\u5B9E\u4F53\u7684\u4E3B\u952E\u6570\u636E\u5230\u72B6\u6001\u7BA1\u7406")],-1),Q=s("SaveMany"),$=n("td",null,"-",-1),z=n("td",null,"TEntity, string",-1),J=n("td",null,"\u4FDD\u5B58\u5B9E\u4F53\u7684\u6307\u5B9A ManyToMany/OneToMany \u5BFC\u822A\u5C5E\u6027\uFF08\u5B8C\u6574\u5BF9\u6BD4\uFF09",-1),X=s("BeginEdit"),Z=n("td",null,"-",-1),nn=n("td",null,"List<TEntity>",-1),sn=n("td",null,"\u51C6\u5907\u7F16\u8F91\u4E00\u4E2A List \u5B9E\u4F53",-1),an=n("tr",null,[n("td",null,"EndEdit"),n("td",null,"int"),n("td",null,"\u65E0"),n("td",null,"\u5B8C\u6210\u7F16\u8F91\u6570\u636E\uFF0C\u8FDB\u884C\u4FDD\u5B58\u52A8\u4F5C")],-1),tn=n("blockquote",null,[n("p",null,"\u72B6\u6001\u7BA1\u7406\uFF0C\u53EF\u5B9E\u73B0 Update \u53EA\u66F4\u65B0\u53D8\u5316\u7684\u5B57\u6BB5\uFF08\u4E0D\u66F4\u65B0\u6240\u6709\u5B57\u6BB5\uFF09\uFF0C\u7075\u6D3B\u4F7F\u7528 Attach \u548C Update \u7528\u8D77\u6765\u975E\u5E38\u8212\u670D\u3002")],-1);function en(pn,on){const l=o("CodeTabs"),e=o("RouterLink"),c=o("ExternalLinkIcon");return m(),k("div",null,[h,a(l,{data:[{title:".NET CLI"},{title:".NET Framework"}],active:0},{tab0:t(({title:i,value:u,isActive:d})=>[g]),tab1:t(({title:i,value:u,isActive:d})=>[b]),_:1},8,["data"]),y,n("p",null,[_,a(e,{to:"/guide/filters.html"},{default:t(()=>[f]),_:1})]),T,n("p",null,[w,a(e,{to:"/guide/cascade-saving.html"},{default:t(()=>[E]),_:1})]),q,n("table",null,[S,n("tbody",null,[x,I,R,U,F,C,D,n("tr",null,[n("td",null,[n("a",A,[G,a(c)])]),L,B,O]),M,N,P,W,V,Y,K,j,H,n("tr",null,[n("td",null,[a(e,{to:"/guide/cascade-saving.html"},{default:t(()=>[Q]),_:1})]),$,z,J]),n("tr",null,[n("td",null,[a(e,{to:"/guide/insert-or-update.html#_4%E3%80%81beginedit-%E6%89%B9%E9%87%8F%E7%BC%96%E8%BE%91"},{default:t(()=>[X]),_:1})]),Z,nn,sn]),an])]),tn])}var un=r(v,[["render",en],["__file","repository.html.vue"]]);export{un as default};
