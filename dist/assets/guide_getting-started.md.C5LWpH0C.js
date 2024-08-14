import{_ as s}from"./chunks/plugin-vue_export-helper.DlAUqK2U.js";import{U as i,V as a,W as t}from"./chunks/vue.DltMPyKS.js";const c=JSON.parse('{"title":"快速上手","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md"}'),e={name:"guide/getting-started.md"},n=t(`<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">前提条件</p><p><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a> &gt;= 18.0.0</p></div><h2 id="文档开发" tabindex="-1">文档开发 <a class="header-anchor" href="#文档开发" aria-label="Permalink to &quot;文档开发&quot;">​</a></h2><h3 id="_1-启动项目🎉" tabindex="-1">1. 启动项目🎉 <a class="header-anchor" href="#_1-启动项目🎉" aria-label="Permalink to &quot;1. 启动项目🎉&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes material-theme-palenight material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#676E95;--shiki-dark:#676E95;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># nvm use v18</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#FFCB6B;--shiki-dark:#FFCB6B;">pnpm</span><span style="--shiki-light:#C3E88D;--shiki-dark:#C3E88D;"> dev</span></span></code></pre></div><h3 id="_2-编写文档" tabindex="-1">2. 编写文档 <a class="header-anchor" href="#_2-编写文档" aria-label="Permalink to &quot;2. 编写文档&quot;">​</a></h3><p>在<code>./src</code>下新建文件，采用Markdown语法，可以在 Markdown 中使用 Vue，参考：<a href="https://vitepress.dev/" target="_blank" rel="noreferrer">VitePress</a></p><h3 id="_3-常用举例" tabindex="-1">3. 常用举例 <a class="header-anchor" href="#_3-常用举例" aria-label="Permalink to &quot;3. 常用举例&quot;">​</a></h3><p>GitHub 风格的表格，<code>markdown</code>:</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes material-theme-palenight material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;"> Tables        </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">      Are      </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">  Cool </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span></span>
<span class="line"><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;"> -------------</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;"> :-----------:</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;"> ----:</span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;"> |</span></span>
<span class="line"><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;"> col 3 is      </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;"> right-aligned </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;"> $1600 </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span></span>
<span class="line"><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;"> col 2 is      </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">   centered    </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">   $12 </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span></span>
<span class="line"><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;"> zebra stripes </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">   are neat    </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#BABED8;--shiki-dark:#BABED8;">    $1 </span><span style="--shiki-light:#89DDFF;--shiki-dark:#89DDFF;">|</span></span></code></pre></div><p>实际效果：</p><table tabindex="0"><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h3 id="_4-更多参考-vitepress的markdown扩展" tabindex="-1">4. 更多参考: VitePress的<a href="https://vitepress.dev/guide/markdown#code-groups" target="_blank" rel="noreferrer">markdown扩展</a> <a class="header-anchor" href="#_4-更多参考-vitepress的markdown扩展" aria-label="Permalink to &quot;4. 更多参考: VitePress的[markdown扩展](https://vitepress.dev/guide/markdown#code-groups)&quot;">​</a></h3>`,13),h=[n];function l(r,p,d,k,D,o){return a(),i("div",null,h)}const y=s(e,[["render",l]]);export{c as __pageData,y as default};
