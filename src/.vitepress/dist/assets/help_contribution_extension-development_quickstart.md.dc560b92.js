import{_ as e,v as t,b as o,R as n}from"./chunks/framework.d1204a03.js";const m=JSON.parse('{"title":"Source development quickstart","description":"","frontmatter":{"title":"Source development quickstart","lang":"en-US"},"headers":[],"relativePath":"help/contribution/extension-development/quickstart.md","filePath":"help/contribution/extension-development/quickstart.md"}'),a={name:"help/contribution/extension-development/quickstart.md"},s=n('<h1 id="source-development-quickstart" tabindex="-1">Source development quickstart <a class="header-anchor" href="#source-development-quickstart" aria-label="Permalink to &quot;Source development quickstart&quot;">​</a></h1><h2 id="preparing-the-development-environment" tabindex="-1">Preparing the development environment <a class="header-anchor" href="#preparing-the-development-environment" aria-label="Permalink to &quot;Preparing the development environment&quot;">​</a></h2><ol><li><p>Create your own fork of one of our repositories, like <a href="https://github.com/Paperback-iOS/extensions-main-promises" target="_blank" rel="noreferrer">Extensions Promises</a>.</p></li><li><p>Create a new branch before working on your new fork. The method of branching depends on the Git CLI/GUI that you use, reference your software manual, or contact us if you need help with this step.</p></li><li><p>Clone the fork you&#39;ve just created on your computer.</p></li><li><p>Install dependencies by running</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span></code></pre></div></li></ol><p>You are ready to start developing a source. When you think the source should be available for users, submit a pull request to one of our repository.</p><p>::: aside If you need help figuring to which repository you should submit your new pull request, don&#39;t hesitate to contact us. ::: ::::</p><hr><h2 id="try-and-bundle-a-repository" tabindex="-1">Try and bundle a repository <a class="header-anchor" href="#try-and-bundle-a-repository" aria-label="Permalink to &quot;Try and bundle a repository&quot;">​</a></h2><p><strong>Running tests</strong></p><p>On Visual Studio Code, open the source test file, go to <strong>Run and Debug</strong> then press <strong>Mocha Current File</strong></p><p><strong>Testing the repository in Paperback application</strong></p><p>Start a webserver by running the following command in your repository folder. You will be able to add it to Paperback application.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">paperback</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">serve</span></span></code></pre></div><p><strong>Bundle the repository</strong></p><p>Run in your repository folder:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">paperback</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bundle</span></span></code></pre></div>',15),r=[s];function i(p,l,c,u,d,h){return t(),o("div",null,r)}const y=e(a,[["render",i]]);export{m as __pageData,y as default};