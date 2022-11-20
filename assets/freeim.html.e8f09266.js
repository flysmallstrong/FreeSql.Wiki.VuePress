import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,b as s,d as t,e as c,r as i}from"./app.94a2e105.js";const l={},r=n("h1",{id:"freeim",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#freeim","aria-hidden":"true"},"#"),s(" FreeIM")],-1),d=n("p",null,"FreeIM 使用 websocket 协议实现简易、高性能（单机支持5万+连接）、集群即时通讯组件，支持点对点通讯、群聊通讯、上线下线事件消息等众多实用性功能。",-1),u=n("p",null,"使用场景：好友聊天、群聊天、直播间、实时评论区、游戏。",-1),k={href:"https://github.com/2881099/FreeIM",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cnblogs.com/FreeSql/p/16632727.html",target:"_blank",rel:"noopener noreferrer"},m=c(`<blockquote><p>dotnet add package FreeIM</p></blockquote><h2 id="imserver-服务端" tabindex="-1"><a class="header-anchor" href="#imserver-服务端" aria-hidden="true">#</a> ImServer 服务端</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IApplicationBuilder</span> app<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">UseFreeImServer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ImServerOptions</span>
    <span class="token punctuation">{</span>
        Redis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeRedis<span class="token punctuation">.</span>RedisClient</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:6379,poolsize=5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Servers <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;127.0.0.1:6001&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//集群配置</span>
        Server <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:6001&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>一套永远不需要迭代更新的 <code>ImServer</code> 服务端，支持 .NET6.0、.NETCore2.1+、NETStandard2.0</p></blockquote><h2 id="webapi-业务端" tabindex="-1"><a class="header-anchor" href="#webapi-业务端" aria-hidden="true">#</a> WebApi 业务端</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IApplicationBuilder</span> app<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//...</span>

    ImHelper<span class="token punctuation">.</span><span class="token function">Initialization</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ImClientOptions</span>
    <span class="token punctuation">{</span>
        Redis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeRedis<span class="token punctuation">.</span>RedisClient</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1:6379,poolsize=5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Servers <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;127.0.0.1:6001&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    ImHelper<span class="token punctuation">.</span><span class="token function">EventBus</span><span class="token punctuation">(</span>
        t <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>clientId <span class="token operator">+</span> <span class="token string">&quot;上线了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
        t <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>clientId <span class="token operator">+</span> <span class="token string">&quot;下线了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>ImHelper方法</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>PrevConnectServer</td><td>(clientId, string)</td><td>在终端准备连接 websocket 前调用</td></tr><tr><td>SendMessage</td><td>(发送者, 接收者, 消息内容, 是否回执)</td><td>发送消息</td></tr><tr><td>GetClientListByOnline</td><td>-</td><td>返回所有在线clientId</td></tr><tr><td>HasOnline</td><td>clientId</td><td>判断客户端是否在线</td></tr><tr><td>EventBus</td><td>(上线委托, 离线委托)</td><td>socket上线与下线事件</td></tr></tbody></table><table><thead><tr><th>频道</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>JoinChan</td><td>(clientId, 频道名)</td><td>加入</td></tr><tr><td>LeaveChan</td><td>(clientId, 频道名)</td><td>离开</td></tr><tr><td>GetChanClientList</td><td>(频道名)</td><td>获取频道所有clientId</td></tr><tr><td>GetChanList</td><td>-</td><td>获取所有频道和在线人数</td></tr><tr><td>GetChanListByClientId</td><td>(clientId)</td><td>获取用户参与的所有频道</td></tr><tr><td>GetChanOnline</td><td>(频道名)</td><td>获取频道的在线人数</td></tr><tr><td>SendChanMessage</td><td>(clientId, 频道名, 消息内容)</td><td>发送消息，所有在线的用户将收到消息</td></tr></tbody></table><ul><li>clientId 应该与用户id相同，或者关联；</li><li>频道适用临时的群聊需求，如聊天室、讨论区；</li></ul><blockquote><p>ImHelper 支持 .NetFramework 4.5+、.NetStandard 2.0</p></blockquote><h2 id="html5-终端" tabindex="-1"><a class="header-anchor" href="#html5-终端" aria-hidden="true">#</a> Html5 终端</h2><p>终端连接 websocket 前，应该先请求 <code>WebApi</code> 获得授权过的地址(ImHelper.PrevConnectServer)，伪代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;/prev-connect-imserver&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> url <span class="token operator">=</span> data<span class="token punctuation">;</span> <span class="token comment">//此时的值：ws://127.0.0.1:6001/ws?token=xxxxx</span>
    <span class="token keyword">var</span> sock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    sock<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//...</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function h(b,f){const a=i("ExternalLinkIcon");return p(),o("div",null,[r,d,u,n("p",null,[s("开源地址："),n("a",k,[s("https://github.com/2881099/FreeIM"),t(a)])]),n("p",null,[s("扩展资料："),n("a",v,[s("《C#.NET im 聊天通讯架构设计 -- FreeIM 支持集群、职责分明、高性能》"),t(a)])]),m])}const I=e(l,[["render",h],["__file","freeim.html.vue"]]);export{I as default};
