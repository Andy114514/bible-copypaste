(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a("q1tI"),l=a.n(n),r=(a("E9XD"),a("KQm4"));var c=function(e){var t=e.snippetId,a=e.title,n=e.template,c=(e.placeholder,l.a.useState(function(e){var t=Array.from(e.matchAll(/\$\{(.*?)\|(.*?)\}/g)),a=new Set;return t.map((function(e){return{label:e[1],value:e[2]}})).reduce((function(e,t){return a.has(t.label)?e:(a.add(t.label),[].concat(Object(r.a)(e),[t]))}),[])}(n))),o=c[0],i=c[1];var u=l.a.useCallback((function(e,t){i(o.map((function(a){return a.label===e?{label:a.label,value:t}:a})))})),m=l.a.useCallback((function(){var e=document.createRange();e.selectNode(document.querySelector("."+t+".result")),window.getSelection().addRange(e);try{document.execCommand("copy"),window.getSelection().removeAllRanges()}catch(a){console.error("copy error",a)}}));return l.a.createElement("div",{className:"shadow container p-5 space-y-2"},l.a.createElement("h3",{className:"font-bold"},a),l.a.createElement("p",{className:t+" result"},o.reduce((function(e,t){return function(e,t,a){var n=new RegExp("\\$\\{"+t+"\\|.*?\\}","g");return e.replace(n,a)}(e,t.label,t.value)}),n)),l.a.createElement("div",null,l.a.createElement("button",{className:"bg-green-500 px-2 py-1 text-white leading-4",onClick:m},"复制")),l.a.createElement("div",{className:"space-y-2"},o.map((function(e){var t=e.label,a=e.value;return l.a.createElement("div",{className:"grid grid-cols-1 gap-4",key:t},l.a.createElement("label",{htmlFor:t},t),l.a.createElement("input",{className:"block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md",type:"text",name:t,value:a,onChange:function(e){u(t,e.target.value)}}))}))))},o=[{id:"support",title:"支援",template:"${支援者|桐生會長}，請您支援 #${被支援者|桐生ココ} ，她僅僅因為說${被支援者的主张|台灣是個國家}，就受${被支援者的反对者|中國五毛}機器人的攻擊以及人身威脅，和未婚夫${无关者|肖戰}的婚約也被迫取消，請一定聲援她！"},{id:"nature",title:"尿性",template:"依${反对者|五毛}的尿性，${声援者|蔡總統}的聲援反而會引來越多${反对者2|中國五毛}攻擊 #${被反对者|桐生ココ}，因為他們會說那是 #${被反对者|桐生ココ} 支持台獨的證據，對待${反对者|五毛}最好的方法是視若無睹或直接封鎖他們的帳號。"},{id:"too-hard",title:"太难了",template:"當${支援者的职业|台灣的總統}太難了，要考量的事太多了，也許${支援者的团体|蔡政府}有受到甚麼我們不知道的壓力，需要她立即表態，畢竟這麼我第一次對她的決定覺得不妥，不過或許這是她能夠當${支援者的职业|台灣的總統}，而我只能打個字發一發牢騷的原因。希望${支援者的称呼|蔡總統}發這個推文之前有和肖戰執政團隊溝通並取得他們的諒解。"},{id:"promotion",title:"引流",template:"有考虑来${竞争者|bilibili}吗，我们不希望你的才华被${目标平台|youtube}推荐机制埋没，我们这里有${领域|vtuber}专区，可以提供正常引流和推荐机制哦。只要承认一个中国中国人就会哗哗地打钱哦，而且台湾人也不介意"},{id:"grand-picture",title:"民心所向",template:"${团体|台灣}現在正迎接歷來最強大的時代、\n${团体|台灣}從來沒有這麼強盛過。\n這一切歸功於${团体|台灣}講求人權民主自由所投票選出來的${目标团体|政黨}、不管他有多少${目标团体成员|黨員}現在的執政者不負眾望、怎麼轉移話題都沒用這就是事實。\n${团体|台灣}正努力邁開腳步一步一步遠離${离开的地点|地球}而去這才是最重要的民心所向"}];function i(){return l.a.createElement("div",{className:"container space-y-1"},o.map((function(e){var t=e.id,a=e.title,n=e.template;return l.a.createElement(c,{key:t,snippetId:t,title:a,template:n})})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0f79f0c4eb87fced07eb.js.map