"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[5209],{8942:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-0921d17b",path:"/guide/entity-attribute.html",title:"实体特性✨",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"主键(Primary Key)",slug:"主键-primary-key",children:[]},{level:2,title:"自增(Identity)",slug:"自增-identity",children:[]},{level:2,title:"唯一键(Unique Key)、索引（Index）",slug:"唯一键-unique-key-、索引-index",children:[]},{level:2,title:"数据库类型(DbType)",slug:"数据库类型-dbtype",children:[]},{level:2,title:"服务器时间(ServerTime)",slug:"服务器时间-servertime",children:[]},{level:2,title:"可空(Nullable)",slug:"可空-nullable",children:[]},{level:2,title:"忽略(Ignore)",slug:"忽略-ignore",children:[]},{level:2,title:"乐观锁(RowVersion)",slug:"乐观锁-rowversion",children:[]},{level:2,title:"自定义类型映射(MapType)",slug:"自定义类型映射-maptype",children:[]},{level:2,title:"字段位置(Position)",slug:"字段位置-position",children:[]},{level:2,title:"可插入(CanInsert)、可更新(CanUpdate)",slug:"可插入-caninsert-、可更新-canupdate",children:[]},{level:2,title:"自定义插入值(InsertValueSql)",slug:"自定义插入值-insertvaluesql",children:[]},{level:2,title:"名称",slug:"名称",children:[]},{level:2,title:"禁用迁移",slug:"禁用迁移",children:[]},{level:2,title:"备注",slug:"备注",children:[]},{level:2,title:"优先级",slug:"优先级",children:[]}],filePathRelative:"guide/entity-attribute.md",git:{updatedTime:1637547245e3,contributors:[{name:"IGeekFan",email:"luoyunchong@foxmail.com",commits:1}]}}},9055:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="实体特性✨" tabindex="-1"><a class="header-anchor" href="#实体特性✨" aria-hidden="true">#</a> 实体特性✨</h1><p>v1.4.0+ 已自动识别 EFCore 实体特性 Key/Required/NotMapped/MaxLength/StringLength/DatabaseGenerated/Table/Column</p><h2 id="主键-primary-key" tabindex="-1"><a class="header-anchor" href="#主键-primary-key" aria-hidden="true">#</a> 主键(Primary Key)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>约定：</p><ul><li><p>当没有指明主键时，命名为 id 的字段将成为主键；（不区分大小写）</p></li><li><p>当主键是 Guid 类型时，插入时会自动创建（有序、不重复）的值，所以不需要自己赋值；（支持分布式）</p></li></ul><h2 id="自增-identity" tabindex="-1"><a class="header-anchor" href="#自增-identity" aria-hidden="true">#</a> 自增(Identity)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>约定：</p><ul><li>当没有指明主键时，标记自增的成员将成为主键；</li></ul><h2 id="唯一键-unique-key-、索引-index" tabindex="-1"><a class="header-anchor" href="#唯一键-unique-key-、索引-index" aria-hidden="true">#</a> 唯一键(Unique Key)、索引（Index）</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Index</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;uk_phone&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Index</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;uk_group_index&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group,index&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Index</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;uk_group_index22&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group, index22 desc&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">class</span> <span class="token class-name">AddUniquesInfo</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> phone <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token keyword">group</span> <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> index <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> index22 <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>第三个参数 true 的时候是唯一键，false 的时候是普通索引。</p></blockquote><blockquote><p>分表场景的索引可以这样：[Index(&quot;{tablename}_idx_01&quot;, &quot;phone&quot;)]</p></blockquote><h2 id="数据库类型-dbtype" tabindex="-1"><a class="header-anchor" href="#数据库类型-dbtype" aria-hidden="true">#</a> 数据库类型(DbType)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>DbType <span class="token operator">=</span> <span class="token string">&quot;varchar(128) NOT NULL&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>可以在类型上指定 NOT NULL，也可以通过 [Column(IsNullable = false)] 设置；</p><blockquote><p>decimal 指定长度 [Column(DbType = &quot;decimal(10,2)&quot;)] 或者 [Column(Precision = 10, Scale = 2)]</p></blockquote><blockquote><p>string 指定长度 [Column(DbType = &quot;varchar(128)&quot;)] 或者 [MaxLength(128)] 或者 [Column(StringLength = 128)]，当长度 -1 时产生的映射如下：</p></blockquote><table><thead><tr><th>MySql</th><th>PostgreSQL</th><th>SqlServer</th><th>Oracle</th><th>Sqlite</th><th>Firebird</th><th>MsAccess</th><th>达梦</th><th>金仓</th><th>神通</th></tr></thead><tbody><tr><td>text</td><td>text</td><td>varchar(max)</td><td>nclob</td><td>text</td><td>blob sub_type 1</td><td>longtext</td><td>text</td><td>text</td><td>text</td></tr></tbody></table><blockquote><p>注意：Oracle nclob 需要 v1.3.2+ 版本才支持，否则将映射 nvarchar2(4000)</p></blockquote><blockquote><p>注意：MySql [MaxLength(-2)] 或者 [Column(StringLength = -2)] 映射类型 longtext，其他数据库的映射规则与 -1 相同</p></blockquote><h2 id="服务器时间-servertime" tabindex="-1"><a class="header-anchor" href="#服务器时间-servertime" aria-hidden="true">#</a> 服务器时间(ServerTime)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>ServerTime <span class="token operator">=</span> DateTimeKind<span class="token punctuation">.</span>Utc<span class="token punctuation">,</span> CanUpdate <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    \n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>ServerTime <span class="token operator">=</span> DateTimeKind<span class="token punctuation">.</span>Utc<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> UpdateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>使用数据库时间执行插入数据，注意：</p><p>1、一但设置了这个特性，插入的时候设置属性值是无效的；</p><p>2、插入实体执行成功后，实体的值还是 c# 时间；</p><blockquote><p>v1.1.0 - ServerTime 特性，对 Update 方法时也能生效</p></blockquote><h2 id="可空-nullable" tabindex="-1"><a class="header-anchor" href="#可空-nullable" aria-hidden="true">#</a> 可空(Nullable)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsNullable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在不指定 DbType、IsNullable 时，FreeSql 提供默认设定，如：</p><ul><li>int -&gt; not null（不可为空）</li><li>int? -&gt; null（可空）</li></ul><p>一般在使用 string 类型时，才需要手工指明是否可空（string 默认可空）；</p><h2 id="忽略-ignore" tabindex="-1"><a class="header-anchor" href="#忽略-ignore" aria-hidden="true">#</a> 忽略(Ignore)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIgnore <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>当实体有属性不需要映射的时候使用，内部自动忽略了对象的映射；</p><p>当实体内的属性不是可接受的类型时，可以不用指定该特定，如下不必要的指定：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIgnore <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Topic</span> Parent <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="乐观锁-rowversion" tabindex="-1"><a class="header-anchor" href="#乐观锁-rowversion" aria-hidden="true">#</a> 乐观锁(RowVersion)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsVersion <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Version <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>更新整个实体数据时，在并发情况下极容易造成旧数据将新的记录更新。</p><p>乐观锁的原理，是利用实体某字段，如：long version，更新前先查询数据，此时 version 为 1，更新时产生的 SQL 会附加 where version = 1，当修改失败时（即 Affrows == 0）抛出异常（DbUpdateVersionException）。</p><p>每个实体只支持一个乐观锁属性。</p><blockquote><p>适用 SetSource 更新，无论使用什么方法更新 version 的值都会增加 1</p></blockquote><h2 id="自定义类型映射-maptype" tabindex="-1"><a class="header-anchor" href="#自定义类型映射-maptype" aria-hidden="true">#</a> 自定义类型映射(MapType)</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">EnumTestMap</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">ToStringMapEnum</span> enum_to_string <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">ToStringMapEnum<span class="token punctuation">?</span></span> enumnullable_to_string <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">int</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">ToStringMapEnum</span> enum_to_int <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">ToStringMapEnum<span class="token punctuation">?</span></span> enumnullable_to_int <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">BigInteger</span> biginteger_to_string <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">BigInteger<span class="token punctuation">?</span></span> bigintegernullable_to_string <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">ToStringMapEnum</span> <span class="token punctuation">{</span> 中国人<span class="token punctuation">,</span> abc<span class="token punctuation">,</span> 香港 <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>BigInteger 也可以映射使用，但请注意：仅仅是 CURD 方便， Equals == 判断可以使用，无法实现 + - * / 等操作；</p><p>v0.9.15 版本还可以将值对象映射成 typeof(string)，安装扩展包：</p><blockquote><p>dotnet add package FreeSql.Extensions.JsonMap</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token function">UseJsonMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//开启功能</span>\n\n<span class="token keyword">class</span> <span class="token class-name">TestConfig</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;sysconfig&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">S_SysConfig</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">JsonMap</span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">TestConfig</span> Config <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="字段位置-position" tabindex="-1"><a class="header-anchor" href="#字段位置-position" aria-hidden="true">#</a> 字段位置(Position)</h2><p>适用场景：当实体类继承时，CodeFirst创建表的字段顺序可能不是想要的，通过该特性可以设置顺序。</p><p>创建表时指定字段位置，如：[Column(Position = 1]，可为负数即反方向位置；</p><h2 id="可插入-caninsert-、可更新-canupdate" tabindex="-1"><a class="header-anchor" href="#可插入-caninsert-、可更新-canupdate" aria-hidden="true">#</a> 可插入(CanInsert)、可更新(CanUpdate)</h2><p>该字段是否可以插入或更新，默认值true，指定为false插入或更新时该字段会被忽略。</p><p>当指明了 InsertColumn/UpdateColumns 等方法时，该特性作用可能失效。例如 CanInsert = false 时，又指明了 InsertColumns 该属性，则仍然会插入。</p><h2 id="自定义插入值-insertvaluesql" tabindex="-1"><a class="header-anchor" href="#自定义插入值-insertvaluesql" aria-hidden="true">#</a> 自定义插入值(InsertValueSql)</h2><p>执行 Insert 方法时使用此值，它的语法是 SQL。</p><p>注意：如果是 getdate() 这种请可考虑使用 ServerTime，因为它对数据库间作了适配。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Type</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>InsertValueSql <span class="token operator">=</span> <span class="token string">&quot;&#39;xxx&#39;&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nfsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//INSERT INTO `type`(`Name`) VALUES(&#39;xxx&#39;)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="名称" tabindex="-1"><a class="header-anchor" href="#名称" aria-hidden="true">#</a> 名称</h2><p>FreeSql 默认使用实体的类名，或属性名与数据库映射，也可以指定映射的名称；</p><p>指定实体的表名，指定 Name 后，实体类名变化不影响数据库对应的表。FreeSql尽量支持了对多数据库或schema支持，不防试试指定表名为：其他数据库.表名，不同数据库的指定方式有差异，这一点以后深入解答。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;db2.tb_topic111&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>注意：尽量不要使用带点的表名，只有 MySql/Sqlite 对此类表名支持 CodeFirst。但是它不影响 CRUD 功能，使用 [Table(Name = &quot;`sys.config`&quot;)] 解决</p></blockquote><p>指定实体的表名，修改为实体类名。指定数据库旧的表名，修改实体命名时，同时设置此参数为修改之前的值，CodeFirst才可以正确修改数据库表；否则将视为【创建新表】。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>OldName <span class="token operator">=</span> <span class="token string">&quot;Topic&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">class</span> <span class="token class-name">Topic2</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>实体的属性也有相同的功能，[Column(Name = &quot;xxx&quot;)]</p></blockquote><h2 id="禁用迁移" tabindex="-1"><a class="header-anchor" href="#禁用迁移" aria-hidden="true">#</a> 禁用迁移</h2><p>IFreeSql.CodeFirst.IsAutoSyncStructure 可设置全局【自动迁移结构】功能，也可通过 FreeSqlBuilder.UseAutoSyncStructure(true) 创建 IFreeSql 的时候设置功能。</p><p>当【实体类】对应的是数据库【视图】或者其他时，可通过 [Table(DisableSyncStructure = true)] 禁用指定的实体迁移操作。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>DisableSyncStructure <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">class</span> <span class="token class-name">ModelDisableSyncStructure</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsPrimary <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> pkid <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h2><p>FreeSql CodeFirst 支持将 c# 代码内的注释，迁移至数据库的备注。先决条件：</p><p>1、实体类所在程序集，需要开启 xml 文档功能；</p><p>2、xml 文件必须与程序集同目录，且文件名：xxx.dll -&gt; xxx.xml；</p><blockquote><p>v1.5.0+ 版本增加了对 Description 特性的解析，优先级低于 c# 代码注释；</p></blockquote><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h2><p>数据库特性 &gt; 实体特性 &gt; FluentApi（配置特性） &gt; Aop（配置特性）</p>',79),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);