"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[320],{3564:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-5fa3f531",path:"/guide/select-lazy-loading.html",title:"延时加载",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"多对多延时加载",slug:"多对多延时加载",children:[]},{level:2,title:"总结",slug:"总结",children:[]}],filePathRelative:"guide/select-lazy-loading.md",git:{updatedTime:1637547245e3,contributors:[{name:"IGeekFan",email:"luoyunchong@foxmail.com",commits:1}]}}},8762:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="延时加载" tabindex="-1"><a class="header-anchor" href="#延时加载" aria-hidden="true">#</a> 延时加载</h1><p>FreeSql 支持导航属性延时加载，即当我们需要用到的时候才进行加载（读取），支持1对1、多对1、1对多、多对多关系的导航属性。</p><p>当我们希望浏览某条订单信息的时候，才显示其对应的订单详细记录时，我们希望使用延迟加载来实现，这样不仅加快的了 读取的效率，同时也避免加载不需要的数据。延迟加载通常用于foreach循环读取数据时。</p><p>那么我们在定义Model的时候，需要在属性前面添加virtual关键字。如下</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Order</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> OrderID <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> OrderTitle <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> CustomerName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> TransactionDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>OrderDetail<span class="token punctuation">&gt;</span></span> OrderDetails <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderDetail</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> DetailId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> OrderId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Order</span> Order <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>延时加载功能默认被关闭的，使用此功能请时，请在申明处开启；</p></blockquote><blockquote><p>延时加载功能，依赖 FreeSql.Extensions.LazyLoading 包，请前往 nuget 下载；</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> <span class="token string">&quot;Data Source=127.0.0.1;Port=3306;User ID=root;Password=root;Initial Catalog=cccddd;Charset=utf8;SslMode=none;Max pool size=10&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseLazyLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//开启延时加载功能</span>\n    <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>\n        cmd <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>cmd<span class="token punctuation">.</span>CommandText<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//监听SQL命令对象，在执行前</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//请务必定义成 Singleton 单例模式</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> order <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Order<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>OrderID <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//查询订单表</span>\n<span class="token class-name"><span class="token keyword">var</span></span> orderDetail1 <span class="token operator">=</span> order<span class="token punctuation">.</span>OrderDetails<span class="token punctuation">;</span> <span class="token comment">//第一次访问，查询数据库</span>\n<span class="token class-name"><span class="token keyword">var</span></span> orderDetail2 <span class="token operator">=</span> order<span class="token punctuation">.</span>OrderDetails<span class="token punctuation">;</span> <span class="token comment">//第二次访问，不查</span>\n<span class="token class-name"><span class="token keyword">var</span></span> order1 <span class="token operator">=</span> orderDetail1<span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//访问导航属性，此时不查数据库，因为 OrderDetails 查询出来的时候已填充了该属性</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>控制台输出内容：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>OrderID<span class="token punctuation">`</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>OrderTitle<span class="token punctuation">`</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>CustomerName<span class="token punctuation">`</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>TransactionDate<span class="token punctuation">`</span> \n<span class="token keyword">FROM</span> <span class="token punctuation">`</span><span class="token keyword">Order</span><span class="token punctuation">`</span> a \n<span class="token keyword">WHERE</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token punctuation">`</span>OrderID<span class="token punctuation">`</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> \n<span class="token keyword">limit</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span>\n\n<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>DetailId<span class="token punctuation">`</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>OrderId<span class="token punctuation">`</span> \n<span class="token keyword">FROM</span> <span class="token punctuation">`</span>OrderDetail<span class="token punctuation">`</span> a \n<span class="token keyword">WHERE</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token punctuation">`</span>OrderId<span class="token punctuation">`</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>FreeSql延时加载支持1对1、多对1、1对多、多对多关系的导航属性，前三者大小同异，以下我们单独介绍多对多关系。</p><h2 id="多对多延时加载" tabindex="-1"><a class="header-anchor" href="#多对多延时加载" aria-hidden="true">#</a> 多对多延时加载</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">Song</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime<span class="token punctuation">?</span></span> Create_time <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span><span class="token punctuation">?</span></span> Is_deleted <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Url <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span> Tags <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">Song_tag</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Song_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Song</span> Song <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Tag_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Tag</span> Tag <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">Tag</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span> Parent_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Tag</span> Parent <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">decimal</span><span class="token punctuation">?</span></span> Ddd <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span> Songs <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>如上有三个表，音乐、标签，以及他们的关系表。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> songs <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//取10条音乐</span>\n<span class="token class-name"><span class="token keyword">var</span></span> songs1 <span class="token operator">=</span> songs<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Tags<span class="token punctuation">;</span> <span class="token comment">//第一次访问，查询数据库</span>\n<span class="token class-name"><span class="token keyword">var</span></span> songs2 <span class="token operator">=</span> Songs<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Tags<span class="token punctuation">;</span> <span class="token comment">//第二次访问，不查</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>控制台输出内容：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>Id<span class="token punctuation">`</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>Create_time<span class="token punctuation">`</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>Is_deleted<span class="token punctuation">`</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>Title<span class="token punctuation">`</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>Url<span class="token punctuation">`</span> \n<span class="token keyword">FROM</span> <span class="token punctuation">`</span>Song<span class="token punctuation">`</span> a \n<span class="token keyword">limit</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span>\n\n<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>Id<span class="token punctuation">`</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>Parent_id<span class="token punctuation">`</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>Ddd<span class="token punctuation">`</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>Name<span class="token punctuation">`</span> \n<span class="token keyword">FROM</span> <span class="token punctuation">`</span>Tag<span class="token punctuation">`</span> a \n<span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token keyword">exists</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token number">1</span> \n<span class="token keyword">FROM</span> <span class="token punctuation">`</span>Song_tag<span class="token punctuation">`</span> b \n<span class="token keyword">WHERE</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token punctuation">`</span>Song_id<span class="token punctuation">`</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">AND</span> b<span class="token punctuation">.</span><span class="token punctuation">`</span>Tag_id<span class="token punctuation">`</span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token punctuation">`</span>Id<span class="token punctuation">`</span><span class="token punctuation">)</span> \n<span class="token keyword">limit</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>优点：只在需要的时候加载数据，不需要预先计划，避免了各种复杂的外连接、索引、视图操作带来的低效率问题。</p><p>缺陷：多次与DB交互，性能降低。</p><p>如果要在循环中使用数据，请使用贪婪加载，否则使用懒加载。</p>',21),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);