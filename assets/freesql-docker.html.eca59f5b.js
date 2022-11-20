import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c,a as n,b as e,d as a,e as o,r as i}from"./app.94a2e105.js";const l={},d=o('<h1 id="docker-freesql" tabindex="-1"><a class="header-anchor" href="#docker-freesql" aria-hidden="true">#</a> Docker+ FreeSql</h1><h2 id="net5-docker-encryption-ssl-tls-handshake-failed" tabindex="-1"><a class="header-anchor" href="#net5-docker-encryption-ssl-tls-handshake-failed" aria-hidden="true">#</a> .net5+Docker+ Encryption(ssl/tls) handshake failed</h2><p>.net5 网站使用Sqlserver数据库部署在docker容器内运行报主库链接失败</p><h3 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h3>',4),p={href:"http://mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim",target:"_blank",rel:"noopener noreferrer"},u=o(`<h3 id="使用原生方式进行测试" tabindex="-1"><a class="header-anchor" href="#使用原生方式进行测试" aria-hidden="true">#</a> 使用原生方式进行测试</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">SqlConnection</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span><span class="token string">&quot;Data Source=xxxxx;User Id=sa;Password=xxxxxx;Initial Catalog=xxxxxxxx;Pooling=true;Min Pool Size=1;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    connection<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    connection<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    connection<span class="token punctuation">.</span><span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="报错" tabindex="-1"><a class="header-anchor" href="#报错" aria-hidden="true">#</a> 报错</h3><p>A connection was successfully established with the server, but then an error occurred during the pre-login handshake. (provider: SSL Provider, error: 31 - Encryption(ssl/tls) handshake failed)</p><h3 id="最终解决方案" tabindex="-1"><a class="header-anchor" href="#最终解决方案" aria-hidden="true">#</a> 最终解决方案</h3><p>在dockerfile里面加上这么两句</p><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code>RUN sed -i &#39;s/MinProtocol = TLSv1.2/MinProtocol = TLSv1/g&#39; /etc/ssl/openssl.cnf
RUN sed -i &#39;s/MinProtocol = TLSv1.2/MinProtocol = TLSv1/g&#39; /usr/lib/ssl/openssl.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>将TLSv1.2设为TLSv1，只能是设为TLSv1而不是设为TLSv1.0</strong></p><h2 id="原文链接" tabindex="-1"><a class="header-anchor" href="#原文链接" aria-hidden="true">#</a> 原文链接</h2>`,9),h={href:"https://github.com/dotnetcore/FreeSql/issues/650",target:"_blank",rel:"noopener noreferrer"};function k(v,f){const s=i("ExternalLinkIcon");return r(),c("div",null,[d,n("p",null,[e("数据库：Sqlserver2014 网站程序：.Net5 Docker版本：Docker version 19.03.13, .net5环境镜像源："),n("a",p,[e("mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim"),a(s)]),e(" Centos版本：CentOS Linux release 7.9.2009 (Core)")]),u,n("ul",null,[n("li",null,[n("a",h,[e(".net5 网站使用Sqlserver数据库部署在docker容器内运行报主库链接失败 · Issue #650 · dotnetcore/FreeSql (github.com)"),a(s)])])])])}const b=t(l,[["render",k],["__file","freesql-docker.html.vue"]]);export{b as default};
