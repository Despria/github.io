"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3123],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>b});var s=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,s,l=function(e,n){if(null==e)return{};var t,s,l={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=s.createContext({}),i=function(e){var n=s.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},o=function(e){var n=i(e.components);return s.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),p=i(t),b=l,m=p["".concat(d,".").concat(b)]||p[b]||c[b]||a;return t?s.createElement(m,r(r({ref:n},o),{},{components:t})):s.createElement(m,r({ref:n},o))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,r=new Array(a);r[0]=p;var u={};for(var d in n)hasOwnProperty.call(n,d)&&(u[d]=n[d]);u.originalType=e,u.mdxType="string"==typeof e?e:l,r[1]=u;for(var i=2;i<a;i++)r[i]=t[i];return s.createElement.apply(null,r)}return s.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2237:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var s=t(7462),l=(t(7294),t(3905));const a={sidebar_position:7,tags:["C#","Unity","AssetBundle"]},r="AssetBundle\ub85c\ubd80\ud130 \uc624\ube0c\uc81d\ud2b8 \ubd88\ub7ec\uc624\uae30",u={unversionedId:"Programming/Unity/AssetBundle_2",id:"Programming/Unity/AssetBundle_2",isDocsHomePage:!1,title:"AssetBundle\ub85c\ubd80\ud130 \uc624\ube0c\uc81d\ud2b8 \ubd88\ub7ec\uc624\uae30",description:"\ube4c\ub4dc\ub41c AssetBundle\ub85c\ubd80\ud130 \uac8c\uc784 \uc624\ube0c\uc81d\ud2b8\ub97c \ub85c\ub529\ud558\ub824 \ud560 \ub54c \ucc38\uace0\ud560 \uc218 \uc788\ub294 \ucf54\ub4dc\uc774\ub2e4.",source:"@site/docs/Programming/Unity/AssetBundle_2.md",sourceDirName:"Programming/Unity",slug:"/Programming/Unity/AssetBundle_2",permalink:"/docs/Programming/Unity/AssetBundle_2",editUrl:"https://github.com/Despria/Despria.github.io/docs/Programming/Unity/AssetBundle_2.md",tags:[{label:"C#",permalink:"/docs/tags/c"},{label:"Unity",permalink:"/docs/tags/unity"},{label:"AssetBundle",permalink:"/docs/tags/asset-bundle"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,tags:["C#","Unity","AssetBundle"]},sidebar:"tutorialSidebar",previous:{title:"AssetBundle \ube4c\ub4dc\ud558\uae30",permalink:"/docs/Programming/Unity/AssetBundle_1"},next:{title:"AssetBundle \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uc0ac\ud56d",permalink:"/docs/Programming/Unity/AssetBundle_3"}},d=[{value:"1. AssetBunlde \ubd88\ub7ec\uc624\uae30 \ubc0f \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131",id:"1-assetbunlde-\ubd88\ub7ec\uc624\uae30-\ubc0f-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131",children:[],level:2},{value:"2. AssetBundle \uc758\uc874\uc131(Dependency) \ud655\uc778\ud558\uae30",id:"2-assetbundle-\uc758\uc874\uc131dependency-\ud655\uc778\ud558\uae30",children:[{value:"BuildTarget\uc5d0 \ub530\ub978 \uc5d0\ub514\ud130 \ucc38\uace0 \uc0ac\ud56d",id:"buildtarget\uc5d0-\ub530\ub978-\uc5d0\ub514\ud130-\ucc38\uace0-\uc0ac\ud56d",children:[],level:3},{value:"AssetBundle \uad00\ub828 \ucc38\uace0 \uc790\ub8cc",id:"assetbundle-\uad00\ub828-\ucc38\uace0-\uc790\ub8cc",children:[],level:3}],level:2}],i={toc:d};function o(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,s.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"assetbundle\ub85c\ubd80\ud130-\uc624\ube0c\uc81d\ud2b8-\ubd88\ub7ec\uc624\uae30"},"AssetBundle\ub85c\ubd80\ud130 \uc624\ube0c\uc81d\ud2b8 \ubd88\ub7ec\uc624\uae30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C#"},'using System.Collections;\nusing System.Collections.Generic;\nusing System.IO;\nusing UnityEngine;\n\npublic class AssetBundleLoader : MonoBehaviour\n{\n    string path = "Assets/AssetBundles/";\n\n    public AssetBundle LoadFromMemoryAsync(string bundleName)\n    {\n        AssetBundleCreateRequest request = AssetBundle.LoadFromMemoryAsync(File.ReadAllBytes(path + bundleName));\n        if (request == null)\n        {\n            return null;\n        }\n\n        AssetBundle assetBundle = request.assetBundle;\n        return assetBundle;\n    }\n\n    void Start()\n    {\n        AssetBundle materials = LoadFromMemoryAsync("cube/materials");\n        AssetBundle prefabs = LoadFromMemoryAsync("cube/prefabs");\n\n        var cube = prefabs.LoadAsset<GameObject>("Red Cube");\n        Instantiate(cube);\n\n        \n        AssetBundle assetBundle = AssetBundle.LoadFromFile(Path.Combine(path, "AssetBundles"));\n        AssetBundleManifest assetBundleManifest = assetBundle.LoadAsset<AssetBundleManifest>("AssetBundleManifest");\n\n        string[] dependencies = assetBundleManifest.GetAllDependencies("cube/prefabs");\n        foreach (string dependency in dependencies)\n        {\n            Debug.Log(dependency);\n        }\n    }\n}\n')),(0,l.kt)("p",null,"\ube4c\ub4dc\ub41c AssetBundle\ub85c\ubd80\ud130 \uac8c\uc784 \uc624\ube0c\uc81d\ud2b8\ub97c \ub85c\ub529\ud558\ub824 \ud560 \ub54c \ucc38\uace0\ud560 \uc218 \uc788\ub294 \ucf54\ub4dc\uc774\ub2e4."),(0,l.kt)("h2",{id:"1-assetbunlde-\ubd88\ub7ec\uc624\uae30-\ubc0f-\uc624\ube0c\uc81d\ud2b8-\uc0dd\uc131"},"1. AssetBunlde \ubd88\ub7ec\uc624\uae30 \ubc0f \uc624\ube0c\uc81d\ud2b8 \uc0dd\uc131"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C#"},"public AssetBundle LoadFromMemoryAsync(string bundleName)\n{\n    AssetBundleCreateRequest request = AssetBundle.LoadFromMemoryAsync(File.ReadAllBytes(path + bundleName));\n    if (request == null)\n    {\n        return null;\n    }\n\n    AssetBundle assetBundle = request.assetBundle;\n    return assetBundle;\n}\n")),(0,l.kt)("p",null,"\uc6b0\uc120 \uc704\uc758 LoadFromMemoryAsync \uba54\uc11c\ub4dc\uc5d0\uc11c 'Assets/AssetBundles/' \ud558\uc704\uc5d0 \uc874\uc7ac\ud558\ub294 AssetBundle\uc758 \uacbd\ub85c\ub97c \ub9e4\uac1c\ubcc0\uc218\ub85c \ub118\uaca8\uc900\ub2e4.",(0,l.kt)("br",null),"\n\uc608\ub97c \ub4e4\uc790\uba74, 'Assets/AssetBundles/cube/prefabs'\ub85c \uc9c0\uc815\ub41c \uc5d0\uc14b\ubc88\ub4e4\uc744 \ubd88\ub7ec\uc624\ub824\uba74, \ub9e4\uac1c\ubcc0\uc218\ub85c \"cube/prefabs\"\ub97c \uc8fc\uba74 \ub41c\ub2e4.",(0,l.kt)("br",null),"\n\uadf8\ub7ec\uba74 AssetBundleCreateRequest\ub97c \ud1b5\ud574 AssetBundle.LoadFromMemoryAsync\ub85c AssetBundle\uc744 \ubd88\ub7ec\uc624\uace0,",(0,l.kt)("br",null),"\n\uc774\ub97c \ub2e4\uc2dc AssetBundle\ud615\uc758 \ubcc0\uc218\uc5d0 \ub300\uc785\ud558\uc5ec \ubc18\ud658\ud55c\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7ec\uba74 \ubc18\ud658\uac12\uc73c\ub85c AssetBundle\uc744 \ubc1b\uac8c \ub418\ub2c8, \uc774\ub7f0 \uc2dd\uc73c\ub85c \ud65c\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C#"},'AssetBundle materials = LoadFromMemoryAsync("cube/materials");\nAssetBundle prefabs = LoadFromMemoryAsync("cube/prefabs");\n\nvar cube = prefabs.LoadAsset<GameObject>("Red Cube");\nInstantiate(cube);\n')),(0,l.kt)("p",null,"\uc704\uc758 \uacbd\uc6b0, \uac01 \uacbd\ub85c\uc5d0 \uc874\uc7ac\ud558\ub294 AssetBundle\uc744 \uac01\uac01\uc758 AssetBundle\ud615 \ubcc0\uc218\uc5d0 \uce90\uc2f1\ud574\ub450\uc5c8\ub2e4.",(0,l.kt)("br",null),"\n\uadf8 \ud6c4, prefabs AssetBundle\uc5d0\uc11c LoadAsset\uc744 \ud1b5\ud574 \ud574\ub2f9 \ubc88\ub4e4\uc5d0\uc11c \ubd88\ub7ec\uc624\ub824\ub294 \uc5d0\uc14b\uc758 \ud0c0\uc785\uc744 \uc81c\ub124\ub9ad\uc73c\ub85c \uba85\uc2dc\ud574\uc8fc\uace0,",(0,l.kt)("br",null),"\n\uac70\uae30\uc5d0 \ub9e4\uac1c\ubcc0\uc218\ub85c \ud574\ub2f9 \uc5d0\uc14b\uc758 \uc774\ub984\uc744 \ub118\uaca8\uc8fc\uba74 AssetBundle \ub0b4\ubd80\uc5d0\uc11c \ud574\ub2f9 \uc624\ube0c\uc81d\ud2b8\ub97c \ubd88\ub7ec\uc62c \uc218 \uc788\ub2e4."),(0,l.kt)("h2",{id:"2-assetbundle-\uc758\uc874\uc131dependency-\ud655\uc778\ud558\uae30"},"2. AssetBundle \uc758\uc874\uc131(Dependency) \ud655\uc778\ud558\uae30"),(0,l.kt)("p",null,"\uc5d0\uc14b\ubc88\ub4e4\uc744 \ud1b5\ud574 \uc5b4\ub5a0\ud55c \uac8c\uc784 \uc624\ube0c\uc81d\ud2b8\ub97c \uc778\uc2a4\ud134\uc2a4\ud654\ud558\ub824\uace0 \ud560 \ub54c \uac00\uc7a5 \uc911\uc694\ud55c \uac83\uc774 \uc788\ub2e4.",(0,l.kt)("br",null),"\n\ubc14\ub85c \ud574\ub2f9 \uc624\ube0c\uc81d\ud2b8\uac00 \uc791\ub3d9\ud558\ub294\ub370 \ud544\uc694\ud55c \ubaa8\ub4e0 \uc900\ube44 \uc7ac\ub8cc\ub97c \uac16\ucdb0\uc918\uc57c \ud55c\ub2e4\ub294 \uac83\uc774\ub2e4.",(0,l.kt)("br",null),"\n\uc608\ub97c \ub4e4\uc5b4\uc11c, \uc704\uc758 \ucf54\ub4dc\uac19\uc740 \uacbd\uc6b0\ub294, \ud504\ub9ac\ud339\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \ub193\uc740 \ube68\uac04 \ud050\ube0c \uc624\ube0c\uc81d\ud2b8\ub97c \ubd88\ub7ec\uc624\uae30 \uc704\ud574, ",(0,l.kt)("br",null),"\n\ud574\ub2f9 \uc624\ube0c\uc81d\ud2b8\uc5d0 \ud544\uc694\ud55c \ube68\uac04\uc0c9 \ub9e4\ud130\ub9ac\uc5bc\uc744 \uba3c\uc800 \ubd88\ub7ec\uc624\uace0 \uc788\ub2e4."),(0,l.kt)("p",null,"\ub9cc\uc57d \uc704 \ucf54\ub4dc\uc5d0\uc11c \ube68\uac04\uc0c9 \ud050\ube0c \ud504\ub9ac\ud339\uc744 \uc778\uc2a4\ud134\uc2a4\ud654\ud558\uae30 \uc804\uc5d0",(0,l.kt)("br",null),"\n(Instantiate\ub85c cube\ub97c \uc0dd\uc131\ud558\uae30 \uc774\uc804\uc5d0)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C#"},'AssetBundle materials = LoadFromMemoryAsync("cube/materials");\n')),(0,l.kt)("p",null,"\uc704\uc758 \ucf54\ub4dc\ub97c \uc0dd\ub7b5\ud558\uc5ec \ub9e4\ud130\ub9ac\uc5bc\uc744 \ubd88\ub7ec\uc624\uc9c0 \uc54a\uc558\ub2e4\uba74, \ud050\ube0c \ud504\ub9ac\ud339\uc740 \uc0dd\uc131\uc740 \ub418\uc9c0\ub9cc \ub9e4\ud130\ub9ac\uc5bc\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc544 \ub9c8\uc820\ud0c0\uc0c9\uc73c\ub85c \ub098\ud0c0\ub0a0 \uac83\uc774\ub2e4.",(0,l.kt)("br",null),"\n\uc989, AssetBundle \uac04\uc758 ",(0,l.kt)("strong",{parentName:"p"},"\uc758\uc874\uc131(Dependency)"),"\uc744 \uc798 \ud30c\uc545\ud558\uc5ec, \uc0c1\ud669\ub9c8\ub2e4 \ud544\uc694\ud55c AssetBundle\uc744 \ubbf8\ub9ac \uc900\ube44\ud574\ub193\ub294 \uac83\uc774 \uc911\uc694\ud558\ub2e4.",(0,l.kt)("br",null),"\nAssetBundle \uac04\uc758 \uc758\uc874\uc131\uc740 Inspector \uc0c1\uc5d0\uc11c\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"AssetBundle Dependency",src:t(1673).Z})),(0,l.kt)("p",null,"\uc704\uc758 \uadf8\ub9bc\uacfc \uac19\uc774, AssetBundle\uc758 \uc815\ubcf4\uac00 \ub2f4\uae34 \ud30c\uc77c(manifest)\uc774 \uac19\uc774 \uc0dd\uc131\ub418\ubbc0\ub85c, ",(0,l.kt)("br",null),"\n\ud544\uc694\ud55c \uc624\ube0c\uc81d\ud2b8\ub97c \ubaa8\ub450 \ubc88\ub4e4\ub85c \uc798 \ubb36\uc5b4\uc11c \ube4c\ub4dc\ud574\ub450\uc5c8\ub2e4\uba74, \uc774\ub97c \ud1b5\ud574 \uc758\uc874\uc131 \uad6c\uc870\ub97c \ud30c\uc545\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C#"},'AssetBundle assetBundle = AssetBundle.LoadFromFile(Path.Combine(path, "AssetBundles"));\nAssetBundleManifest assetBundleManifest = assetBundle.LoadAsset<AssetBundleManifest>("AssetBundleManifest");\n\nstring[] dependencies = assetBundleManifest.GetAllDependencies("cube/prefabs");\nforeach (string dependency in dependencies)\n{\n    Debug.Log(dependency);\n}\n')),(0,l.kt)("p",null,"\ud639\uc740 \uc774\uc640 \uac19\uc774 AssetBundleManifest API\ub97c \ud1b5\ud574 AssetBundle\uac04\uc758 \uc758\uc874\uc131\uc744 \ud30c\uc545\ud558\uace0 \ubc88\ub4e4\uc744 \ubd88\ub7ec\uc624\ub294 \uac83\ub3c4 \uac00\ub2a5\ud558\ub2e4."),(0,l.kt)("p",null,"AssetBundle\uc744 \uc0dd\uc131\ud55c \uacbd\ub85c\uc5d0\ub294 AssetBundle \uc804\uccb4\uc5d0 \uad00\ud55c \uc815\ubcf4\uac00 \ub2f4\uae34 \ud30c\uc77c\uc774 \uc0dd\uc131\ub41c\ub2e4. ",(0,l.kt)("br",null),"\n\uc989, \uc774 \uc608\uc81c\uc758 \uacbd\uc6b0\uc5d0\ub294 'Assets/AssetBundles'\uc5d0 AssetBundles\uc640 AssetBundles.manifest\uac00 \uc0dd\uc131\ub418\ub294\ub370,",(0,l.kt)("br",null),"\n\uc774 AssetBundles.manifest\ub97c \ud1b5\ud574 \ubc88\ub4e4\uac04\uc758 \uc758\uc874\uc131\uc744 \ud30c\uc545\ud558\uace0 \uc5d0\uc14b\uc744 \ub85c\ub529\ud558\ub294 \uac83\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C#"},'AssetBundle assetBundle = AssetBundle.LoadFromFile(Path.Combine(path, "AssetBundles"));\n')),(0,l.kt)("p",null,"\uc774 \ucf54\ub4dc\ub97c \ud1b5\ud574 AssetBundles\ub77c\ub294 \uc774\ub984\uc744 \uc9c0\ub294 \ubc88\ub4e4\uc744 \ubd88\ub7ec\uc640\uc11c, \ud574\ub2f9 \ubc88\ub4e4\uc758 manifest \ud30c\uc77c\uc744 \uc77d\uc5b4\uc624\ub294 \uac83\uc774\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C#"},'AssetBundleManifest assetBundleManifest = assetBundle.LoadAsset<AssetBundleManifest>("AssetBundleManifest");\n')),(0,l.kt)("p",null,'\ucc38\uace0\ub85c, \uc774 \ub54c LoadAsset\uc758 \ub9e4\uac1c\ubcc0\uc218 "AssetBundleManifest"\ub294 \ub9e4\ubc88 \uc800\ub300\ub85c \uc801\uc73c\uba74 \ub41c\ub2e4\uace0 \ud55c\ub2e4.',(0,l.kt)("br",null),"\n\uc774\ub807\uac8c \uc77d\uc5b4\uc628 manifest\ub97c \ud1b5\ud574, \ud2b9\uc815\ud55c \ubc88\ub4e4\uc774 \uc758\uc874\ud558\uace0 \uc788\ub294 \ubc88\ub4e4\uc744 \ud30c\uc545\ud560 \uc218 \uc788\ub2e4.",(0,l.kt)("br",null),"\nGetAllDependencies \uba54\uc11c\ub4dc\uc5d0 \uc790\uc2e0\uc774 \uc9c0\uc815\ud55c \ubc88\ub4e4\uc758 \uc774\ub984\uc744 \ub118\uaca8\uc8fc\uba74, \uc774\ub97c string \ubc30\uc5f4\ub85c \ubc18\ud658\ud574\uc8fc\ub294\ub370,",(0,l.kt)("br",null),"\n\uadf8\ub97c \uc77d\uc5b4\uc11c \ud544\uc694\ud55c \ubc88\ub4e4\uc744 \ubaa8\ub450 \ubd88\ub7ec\uc62c \uc218 \uc788\uaca0\ub2e4."),(0,l.kt)("p",null,"\uc704\uc758 \uc608\uc81c\uc758 foreach\ubb38\uc5d0\uc11c\ub294 \ub2e8\uc21c\ud788 \ucf58\uc194\ucc3d \ucd9c\ub825\uc744 \ud1b5\ud574 \ud655\uc778\ud558\uae30 \uc704\ud574\uc11c Debug.Log\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc9c0\ub9cc,",(0,l.kt)("br",null)),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C#"},"AssetBundle.LoadFromFIle(Path.Combine(assetBundlePath, dependency));\n")),(0,l.kt)("p",null,"\ud574\ub2f9 \ucf54\ub4dc\ub97c \uc774\uc640 \uac19\uc774 \ubc14\uafb8\uba74 \uc758\uc874 \uad00\uacc4\uc758 \ubc88\ub4e4\uc744 \ubaa8\ub450 \ubd88\ub7ec\uc62c \uc218 \uc788\uc744 \uac83\uc774\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C#"},'AssetBundle prefabs = LoadFromMemoryAsync("cube/prefabs");\nAssetBundle assetBundle = AssetBundle.LoadFromFile(Path.Combine(path, "AssetBundles"));\nAssetBundleManifest assetBundleManifest = assetBundle.LoadAsset<AssetBundleManifest>("AssetBundleManifest");\n\nstring[] dependencies = assetBundleManifest.GetAllDependencies("cube/prefabs");\nforeach (string dependency in dependencies)\n{\n    // Debug.Log(dependency);\n    AssetBundle.LoadFromFile(Path.Combine(path, dependency));\n}\n\nvar cube = prefabs.LoadAsset<GameObject>("Red Cube");\nInstantiate(cube);\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\uc815\uc0c1\uc801\uc73c\ub85c \ub85c\ub4dc\ub41c AssetBundle",src:t(4290).Z})),(0,l.kt)("p",null,"\uc2e4\uc81c\ub85c, Start\ubb38\uc744 \uc704\uc640 \uac19\uc774 \ubc14\uafb8\uace0 \ud50c\ub808\uc774 \ubaa8\ub4dc\ub97c \uc2e4\ud589\ud574\ubcf4\uc558\ub354\ub2c8 \uc815\uc0c1\uc801\uc73c\ub85c \uc624\ube0c\uc81d\ud2b8\uac00 \ub098\ud0c0\ub098\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\uc5c8\ub2e4."),(0,l.kt)("h3",{id:"buildtarget\uc5d0-\ub530\ub978-\uc5d0\ub514\ud130-\ucc38\uace0-\uc0ac\ud56d"},"BuildTarget\uc5d0 \ub530\ub978 \uc5d0\ub514\ud130 \ucc38\uace0 \uc0ac\ud56d"),(0,l.kt)("p",null,"\ucc38\uace0\ub85c \ub367\ubd99\uc774\uc790\uba74, \ucc98\uc74c\uc5d0\ub294 cube \ud504\ub9ac\ud339\uc5d0 \uc0ac\uc6a9\ud560 \ub9e4\ud130\ub9ac\uc5bc\uacfc cube \ud504\ub9ac\ud339\ub4e4 \uc804\ubd80\ub97c ",(0,l.kt)("br",null),"\n\uadf8\ub0e5 \ud558\ub098\uc758 cube\ub77c\ub294 \uc774\ub984\uc744 \uac00\uc9c4 \ubc88\ub4e4\ub85c \ubb36\uc5c8\ub294\ub370",(0,l.kt)("br",null),"\n\uc774\ub807\uac8c \ud558\ub2c8 cube\ub97c \ub85c\ub529\ud560 \ub54c \uc774\uc0c1\ud558\uac8c \ub9e4\ud130\ub9ac\uc5bc\uc774 \uc81c\ub300\ub85c \ub85c\ub529\uc774 \ub418\uc9c0 \uc54a\uc558\ub2e4.",(0,l.kt)("br",null),"\n\ubd84\uba85 \uac19\uc740 \ubc88\ub4e4 \uc548\uc5d0 \ubb36\uc5ec\uc788\uae30 \ub54c\ubb38\uc5d0, \ubc88\ub4e4\uc774 \ub85c\ub529\ub41c\ub2e4\uba74 \ud544\uc694\ud55c \uc5d0\uc14b\uc774 \ubaa8\ub450 \ub85c\ub529\ub41c \uac83\uc77c\ud150\ub370",(0,l.kt)("br",null),"\n\ud639\uc2dc \ubc88\ub4e4\uc744 \ubd84\ud560\ud558\uc5ec \ud544\uc694\ud55c \uc5d0\uc14b\ub4e4\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \ub85c\ub529\ud574\uc918\uc57c \ud558\ub294\uac83\uc778\uac00 \ud558\ub294 \uc0dd\uac01\uc774 \ub4e4\uc5c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7ec\ub098 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc758 \uc0ac\ub840\ub97c \ud655\uc778\ud574\ubcf4\ub2c8, \uc774\uac83\uc740 \ubc88\ub4e4\uc758 \ub85c\ub529 \uc21c\uc11c\uac00 \uc544\ub2c8\ub77c \ub2e4\ub978 \ubb38\uc81c\uc5d0 \uc758\ud574\uc11c \uadf8\ub7f0 \uac83\uc774\uc5c8\ub2e4.",(0,l.kt)("br",null),"\n\uc5b4\ub5a0\ud55c \ubb38\uc81c\uc778\uac00 \ud558\uba74, \uc55e\uc11c BuildTarget\uc744 Android\ub85c \uc9c0\uc815\ud588\ub294\ub370,",(0,l.kt)("br",null),"\n\uc774\ub7f0 \uacbd\uc6b0, PC \uc5d0\ub514\ud130 \ud658\uacbd\uc5d0\uc11c\ub294 AssetBundle\ub85c\ubd80\ud130 \ub9e4\ud130\ub9ac\uc5bc\uc774 \uc81c\ub300\ub85c \ub85c\ub529\uc774 \ub418\uc9c0 \uc54a\ub294 \ud604\uc0c1\uc774 \uc788\ub2e4\uace0 \ud55c\ub2e4.",(0,l.kt)("br",null),"\n\uadf8\ub7f4 \ub54c\uc5d0\ub294 'Build Setting - Player Setting'\uc5d0\uc11c \uc544\ub798\uc640 \uac19\uc774 \ucc98\ub9ac\ud574\uc8fc\ub2c8 \ub9e4\ud130\ub9ac\uc5bc\uc774 \uc81c\ub300\ub85c \uc801\uc6a9\ub418\uc5c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Player Setting",src:t(6007).Z})),(0,l.kt)("p",null,"Auto Graphics for Windows\ub97c \uccb4\ud06c \ud574\uc81c \ud6c4, OpenGLES3\uc744 \ucd94\uac00\ud574 \uc900 \ud6c4 \ucd5c\uc0c1\ub2e8\uc73c\ub85c \ubc30\uce58\ud558\uba74 \uc5d0\ub514\ud130\ub97c \uc7ac\uc2dc\uc791\ud558\uac8c \ub41c\ub2e4.",(0,l.kt)("br",null),"\n\uc774\ud6c4\ubd80\ud130\ub294 \ub9e4\ud130\ub9ac\uc5bc\uc774 \uc81c\ub300\ub85c \uc801\uc6a9\ub418\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\uc5c8\ub2e4.",(0,l.kt)("br",null),"\nWindows\uac00 \uc544\ub2cc \ub2e4\ub978 \ud50c\ub7ab\ud3fc\uc758 \uacbd\uc6b0\uc5d0\ub3c4 \ube44\uc2b7\ud558\uac8c \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc9c0 \uc54a\uc744\uae4c \uc2f6\ub2e4."),(0,l.kt)("h3",{id:"assetbundle-\uad00\ub828-\ucc38\uace0-\uc790\ub8cc"},"AssetBundle \uad00\ub828 \ucc38\uace0 \uc790\ub8cc"),(0,l.kt)("p",null,"\uc720\ub2c8\ud2f0 \uc5d0\ubc18\uc824\ub9ac\uc2a4\ud2b8 \uc624\uc9c0\ud604\ub2d8\uc758 2017\ub144\ub3c4 Unite Seoul \uac15\uc5f0\uc744 \ucc38\uace0\ud558\uba74 \uc88b\ub2e4.",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Z9LrkQUDzJw"},"Unite Seoul 2017 \uc5d0\uc14b\ubc88\ub4e4\uc774 \ubc88\ub4e4\ubc88\ub4e4 : \uc5d0\uc14b\ubc88\ub4e4 \uc2e4\uc6a9 \uac00\uc774\ub4dc"),(0,l.kt)("br",null),"\n\ub2e4\ub9cc, \ud574\ub2f9 \uac15\uc5f0\uc758 \uacbd\uc6b0 \uc544\ubb34\ub798\ub3c4 2017\ub144\ub3c4 \uac15\uc758\uc774\uae30 \ub54c\ubb38\uc5d0, AssetBundle\uc758 \uae30\ubcf8 \uc9c0\uc2dd\uc744 \uc313\ub294 \ub370\uc5d0\ub294 \uc720\uc6a9\ud558\uc9c0\ub9cc",(0,l.kt)("br",null),"\n\ud574\ub2f9 \uac15\uc5f0\uc744 \ud1b5\ud574\uc11c AssetBundle\uc5d0 \ub300\ud55c \uae30\ubcf8\uc801\uc778 \uc9c0\uc2dd\uc744 \uac16\ucd98 \ud6c4, \ucd5c\uc2e0 \ube14\ub85c\uadf8 \uae00 \ub4f1\uc744 \ud55c\ubc88 \uc0b4\ud3b4\ubcf4\ub294 \uac83\uc774 \uc88b\ub2e4."),(0,l.kt)("p",null,"\ub610\ud55c 2018\ub144\ub3c4 Unite Seoul\uc758 \uc5d0\uc14b\ubc88\ub4e4 \uc2e4\uc804 \uac00\uc774\ub4dc \uac15\uc5f0\ub3c4 \ucc38\uace0\ud558\uba74 \uc88b\ub2e4.",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Lx61ZEKEvnQ"},"Unite Seoul 2018 \uc5d0\uc14b\ubc88\ub4e4 \uc2e4\uc804 \uac00\uc774\ub4dc")))}o.isMDXComponent=!0},1673:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/assetbundle6-3fdb69a160690e79d66b9ca41313bc11.png"},6007:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/assetbundle7-7bea25551673b9b18970ce47390e5239.png"},4290:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/assetbundle8-b1638d76e3db497cbd3b9bc8f685d7ee.png"}}]);