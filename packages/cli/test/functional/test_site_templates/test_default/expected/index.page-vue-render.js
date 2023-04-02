
    var pageVueRenderFn = function anonymous(
) {
<<<<<<< HEAD
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_v("Your Logo")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/contents/topic1.html"}},[_v("Topic 1")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/contents/topic2.html"}},[_v("Topic 2")])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("Topic 3")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/contents/topic3a.html"}},[_v("Topic 3a")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/contents/topic3b.html"}},[_v("Topic 3b")])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Template")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/index.html"}},[_v("Home 🏠")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/contents/topic1.html"}},[_v("Topic 1")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/contents/topic2.html"}},[_v("Topic 2")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Topic 3 \n\n"),_c('div',{staticClass:"site-nav-dropdown-btn-container"},[_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/contents/topic3a.html"}},[_v("Topic 3a")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/contents/topic3b.html"}},[_v("Topic 3b")])])])])])])],1)],1)]),_v(" "),_c('div',{attrs:{"id":"content-wrapper"}},[_c('breadcrumb'),_v(" "),_c('br'),_v(" "),_m(0),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('box',{attrs:{"type":"tip"}},[_c('p',[_v("If you were intending to convert an existing GitHub wiki or a docs folder into MarkBind, use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--convert")]),_v(" flag instead. See "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/markBindInTheProjectWorkflow.html#converting-existing-project-documentation-wiki","target":"_blank"}},[_v("User Guide: MarkBind in the Project Workflow")]),_v(" for more information.")]),_v(" "),_c('p',[_v("If you want to start with a "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("i.e. without any content")]},proxy:true}])},[_c('em',[_v("minimal")])]),_v(" template instead, use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--template")]),_v(" flag with the \"minimal\" option to initialize a minimal site instead of the default. See "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/templates.html","target":"_blank"}},[_v("User Guide: Templates")]),_v(" for more information.")],1)]),_v(" "),_c('hr'),_v(" "),_m(3),_v(" "),_c('p',[_v("This "),_c('em',[_v("default")]),_v(" site comes pre-configured with the core "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/components/navigation.html#navigation-components","target":"_blank"}},[_v("Navigation components")]),_v(": a "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("Site Navigation")]},proxy:true}])},[_c('strong',[_v("siteNav")])]),_v(", a "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("Page Navigation")]},proxy:true}])},[_c('strong',[_v("pageNav")])]),_v(", a "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("Navigation Bar")]},proxy:true}])},[_c('strong',[_v("NavBar")])]),_v(", and a "),_c('strong',[_v("Search Bar")]),_v(". To help you get started with the "),_c('strong',[_v("siteNav")]),_v(", we have included "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("Topic 1, Topic 2, Topic 3, Topic 3a, Topic 3b")]},proxy:true}])},[_v("five dummy placeholder pages")]),_v(". The "),_c('strong',[_v("NavBar")]),_v(" also comes with a placeholder slot for your custom Logo.")],1),_v(" "),_c('hr'),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('box',{attrs:{"type":"info"}},[_c('p',[_v("If you are interested in contributing to MarkBind, you can refer to our "),_c('a',{attrs:{"href":"https://markbind.org/devdocs/devGuide/devGuide.html","target":"_blank"}},[_v("Developer Guide")]),_v(" as well!")])]),_v(" "),_c('panel',{attrs:{"expanded":"","no-close":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Good starting points in our User Guide")])])]},proxy:true}])},[_v(" "),_c('h5',{attrs:{"id":"user-guide-authoring-contents"}},[_c('strong',[_v("User Guide: Authoring Contents")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-guide-authoring-contents","onclick":"event.stopPropagation()"}})]),_v(" "),_c('blockquote',[_c('p',[_v("Learn about the variety of syntax schemes, formats, and custom MarkBind components that you can use in your MarkBind site.")])]),_v(" "),_c('p',[_v("More info in: "),_c('em',[_c('a',{attrs:{"href":"https://markbind.org/userGuide/authoringContents.html","target":"_blank"}},[_v("User Guide → Authoring Contents")])])]),_v(" "),_c('hr'),_v(" "),_c('h5',{attrs:{"id":"user-guide-working-with-sites"}},[_c('strong',[_v("User Guide: Working with Sites")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-guide-working-with-sites","onclick":"event.stopPropagation()"}})]),_v(" "),_c('blockquote',[_c('p',[_v("Learn how to modify site properties, apply themes, and enable/disable plugins for your MarkBind site.")])]),_v(" "),_c('p',[_v("<<<<<<< HEAD\nMore info in: "),_c('em',[_c('a',{attrs:{"href":"https://markbind.org/userGuide/workingWithSites.html","target":"_blank"}},[_v("User Guide → Working with Sites")])])]),_v(" "),_c('hr'),_v(" "),_c('h5',{attrs:{"id":"user-guide-full-syntax-reference"}},[_c('strong',[_v("User Guide: Full Syntax Reference")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-guide-full-syntax-reference","onclick":"event.stopPropagation()"}})]),_v(" "),_c('blockquote',[_c('p',[_v("Refer to our Full Syntax Reference page to find a specific feature or component that you want to use in your MarkBind site.")])]),_v(" "),_c('h1',{attrs:{"id":"more-info-in-user-guide-full-syntax-reference"}},[_v("More info in: "),_c('em',[_c('a',{attrs:{"href":"https://markbind.org/userGuide/fullSyntaxReference.html","target":"_blank"}},[_v("User Guide → Full Syntax Reference")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#more-info-in-user-guide-full-syntax-reference","onclick":"event.stopPropagation()"}})]),_v(" "),_c('panel',{attrs:{"type":"info"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Expandable panel")])]},proxy:true}])},[_v("\n  Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text. Some text some text some text some text some text some text some text some text some text some text some text some text some text some text. Some text some text some text some text some text some text. Some text some text some text some text some text some text some text.\n")]),_v(" "),_c('br'),_v(" "),_c('panel',{attrs:{"type":"info","expanded":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Expanded panel on load")])]},proxy:true}])},[_v("\n<<<<<<< HEAD\n  ...\n")]),_v(" "),_c('br'),_v(" "),_c('panel',{attrs:{"type":"success","minimized":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Expanded panel header")])]},proxy:true},{key:"_alt",fn:function(){return [_c('p',[_v("Minimized panel header")])]},proxy:true}])},[_v("\n  ...\n")]),_v(" "),_c('br'),_v("\n=======\n  ...\n")],1),_v(" "),_c('br'),_v(" "),_c('panel',{attrs:{"type":"success","minimized":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Expanded panel header")])]},proxy:true},{key:"_alt",fn:function(){return [_c('p',[_v("Minimized panel header")])]},proxy:true}])},[_v("\n  ...\n")]),_v(" "),_c('br'),_v("\n>>>>>>> aa1fdbbc852b4b0e7f05ef1f7d228d026a5d7adb\n"),_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Expanded panel header")])]},proxy:true},{key:"_alt",fn:function(){return [_c('p',[_v("Minimized panel header")])]},proxy:true}])},[_v("\n  ...\n")]),_v(" "),_c('br'),_v("\n>>>>>>> aa1fdbbc852b4b0e7f05ef1f7d228d026a5d7adb\n\n"),_c('hr')],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('a',{pre:true,attrs:{"class":"navbar-brand page-nav-title","href":"#"}},[_v("Topics")]),_v(" "),_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#what-just-happened"}},[_v("What just happened?‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#navigating-this-site"}},[_v("Navigating this site‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#guide-to-markbind"}},[_v("Guide to MarkBind‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#more-info-in-user-guide-full-syntax-reference"}},[_v("More info in: User Guide → Full Syntax Reference‎")])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(7)])}
=======
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_v("Your Logo")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/contents/topic1.html"}},[_v("Topic 1")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/contents/topic2.html"}},[_v("Topic 2")])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("Topic 3")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/contents/topic3a.html"}},[_v("Topic 3a")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/contents/topic3b.html"}},[_v("Topic 3b")])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Template")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/index.html"}},[_v("Home 🏠")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/contents/topic1.html"}},[_v("Topic 1")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/contents/topic2.html"}},[_v("Topic 2")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Topic 3 \n\n"),_c('div',{staticClass:"site-nav-dropdown-btn-container"},[_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/contents/topic3a.html"}},[_v("Topic 3a")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/contents/topic3b.html"}},[_v("Topic 3b")])])])])])])],1)],1)]),_v(" "),_c('div',{attrs:{"id":"content-wrapper"}},[_c('breadcrumb'),_v(" "),_c('br'),_v(" "),_m(0),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('box',{attrs:{"type":"tip"}},[_c('p',[_v("If you were intending to convert an existing GitHub wiki or a docs folder into MarkBind, use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--convert")]),_v(" flag instead. See "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/markBindInTheProjectWorkflow.html#converting-existing-project-documentation-wiki","target":"_blank"}},[_v("User Guide: MarkBind in the Project Workflow")]),_v(" for more information.")]),_v(" "),_c('p',[_v("If you want to start with a "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("i.e. without any content")]},proxy:true}])},[_c('em',[_v("minimal")])]),_v(" template instead, use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--template")]),_v(" flag with the \"minimal\" option to initialize a minimal site instead of the default. See "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/templates.html","target":"_blank"}},[_v("User Guide: Templates")]),_v(" for more information.")],1)]),_v(" "),_c('hr'),_v(" "),_m(3),_v(" "),_c('p',[_v("This "),_c('em',[_v("default")]),_v(" site comes pre-configured with the core "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/components/navigation.html#navigation-components","target":"_blank"}},[_v("Navigation components")]),_v(": a "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("Site Navigation")]},proxy:true}])},[_c('strong',[_v("siteNav")])]),_v(", a "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("Page Navigation")]},proxy:true}])},[_c('strong',[_v("pageNav")])]),_v(", a "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("Navigation Bar")]},proxy:true}])},[_c('strong',[_v("NavBar")])]),_v(", and a "),_c('strong',[_v("Search Bar")]),_v(". To help you get started with the "),_c('strong',[_v("siteNav")]),_v(", we have included "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("Topic 1, Topic 2, Topic 3, Topic 3a, Topic 3b")]},proxy:true}])},[_v("five dummy placeholder pages")]),_v(". The "),_c('strong',[_v("NavBar")]),_v(" also comes with a placeholder slot for your custom Logo.")],1),_v(" "),_c('hr'),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('box',{attrs:{"type":"info"}},[_c('p',[_v("If you are interested in contributing to MarkBind, you can refer to our "),_c('a',{attrs:{"href":"https://markbind.org/devdocs/devGuide/devGuide.html","target":"_blank"}},[_v("Developer Guide")]),_v(" as well!")])]),_v(" "),_c('panel',{attrs:{"expanded":"","no-close":""},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Good starting points in our User Guide")])])]},proxy:true}])},[_v(" "),_c('h5',{attrs:{"id":"user-guide-authoring-contents"}},[_c('strong',[_v("User Guide: Authoring Contents")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-guide-authoring-contents","onclick":"event.stopPropagation()"}})]),_v(" "),_c('blockquote',[_c('p',[_v("Learn about the variety of syntax schemes, formats, and custom MarkBind components that you can use in your MarkBind site.")])]),_v(" "),_c('p',[_v("More info in: "),_c('em',[_c('a',{attrs:{"href":"https://markbind.org/userGuide/authoringContents.html","target":"_blank"}},[_v("User Guide → Authoring Contents")])])]),_v(" "),_c('hr'),_v(" "),_c('h5',{attrs:{"id":"user-guide-working-with-sites"}},[_c('strong',[_v("User Guide: Working with Sites")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-guide-working-with-sites","onclick":"event.stopPropagation()"}})]),_v(" "),_c('blockquote',[_c('p',[_v("Learn how to modify site properties, apply themes, and enable/disable plugins for your MarkBind site.")])]),_v(" "),_c('p',[_v("More info in: "),_c('em',[_c('a',{attrs:{"href":"https://markbind.org/userGuide/workingWithSites.html","target":"_blank"}},[_v("User Guide → Working with Sites")])])]),_v(" "),_c('hr'),_v(" "),_c('h5',{attrs:{"id":"user-guide-full-syntax-reference"}},[_c('strong',[_v("User Guide: Full Syntax Reference")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-guide-full-syntax-reference","onclick":"event.stopPropagation()"}})]),_v(" "),_c('blockquote',[_c('p',[_v("Refer to our Full Syntax Reference page to find a specific feature or component that you want to use in your MarkBind site.")])]),_v(" "),_c('p',[_v("More info in: "),_c('em',[_c('a',{attrs:{"href":"https://markbind.org/userGuide/fullSyntaxReference.html","target":"_blank"}},[_v("User Guide → Full Syntax Reference")])])])]),_v(" "),_c('hr')],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('a',{pre:true,attrs:{"class":"navbar-brand page-nav-title","href":"#"}},[_v("Topics")]),_v(" "),_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#what-just-happened"}},[_v("What just happened?‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#navigating-this-site"}},[_v("Navigating this site‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#guide-to-markbind"}},[_v("Guide to MarkBind‎")])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(7)])}
>>>>>>> 67b37cb854ab71394c62a7201214972e35f8dfe4
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"bg-primary text-white px-2 py-5 mb-4"},[_c('div',{staticClass:"container"},[_c('h1',{staticClass:"display-5 no-index",attrs:{"id":"great-you-ve-just-initialized-a-markbind-site"}},[_v("Great!"),_c('br'),_v("You've just initialized a MarkBind site."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#great-you-ve-just-initialized-a-markbind-site","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',{staticClass:"lead"},[_v("Let's get started...")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"what-just-happened"}},[_v("What just happened?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#what-just-happened","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("You have just initialized a "),_c('em',[_v("default")]),_v(" MarkBind site! It is equipped with a set of core features, including site and page navigation. Additionally, we have included some convenient links to our User Guide, to help you get started quickly and easily.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"navigating-this-site"}},[_v("Navigating this site"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#navigating-this-site","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"guide-to-markbind"}},[_v("Guide to MarkBind"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#guide-to-markbind","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("To see the capability of MarkBind in action, feel free to take a look at some of the websites built using MarkBind on our "),_c('a',{attrs:{"href":"https://markbind.org/showcase.html","target":"_blank"}},[_v("Showcase")]),_v(" page.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("For more information on how to work with MarkBind sites and to add content, refer to our comprehensive "),_c('a',{attrs:{"href":"https://markbind.org/userGuide/gettingStarted.html","target":"_blank"}},[_v("User Guide")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.1.0")]),_v("]")])])])}
}];
  