(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"0d62":function(t,e,a){"use strict";var r=a("dcd2"),n=a.n(r);n.a},"1ebf":function(t,e,a){"use strict";var r=a("761a"),n=a.n(r);n.a},2708:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var r={data:function(){return{}},filters:{},methods:{validEmail:function(t,e,a){console.log(e);var r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;r.test(e)||a(new Error("邮箱格式不正确")),a()}}}},"28a1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"public-box"},[t._l(t.pageControl.list,(function(e,r){return a("div",{key:r,staticClass:"alone"},[a("div",{staticClass:"message"},[a("a",{attrs:{href:"#",title:""}},[t._v("投递人: "+t._s(e.name)+" "+t._s(t._f("hiddenEmail")(e.receiptEmail)))]),a("span",[t._v(t._s(t._f("formatDate")(e.createTime))+" 寄往 "+t._s(t._f("formatDate")(e.sendTime)))])]),a("div",{staticClass:"content",domProps:{innerHTML:t._s(e.content)}})])})),t.isExtract?t._e():a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.pageControl.total},on:{"current-change":t.pageChange}})],1)],2)},n=[],o=(a("053b"),a("b081")),i=(a("7ca6"),a("a0f8"),a("2cf5")),s=a.n(i),l=a("365c"),c={components:Object(o["a"])({},s.a.name,s.a),data:function(){return{pageControl:{page:1,pageSize:6,list:[],total:0},isExtract:!1}},beforeMount:function(){},mounted:function(){var t=this.$storage.read("extract-data");t?(this.isExtract=!0,this.pageControl.list.push(t),this.$storage.remove("extract-data")):this.loadData()},methods:{loadData:function(){var t=this,e={page:this.pageControl.page,pageSize:this.pageControl.pageSize},a=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(l["c"])(e).then((function(e){a.close(),e.statusCode?(t.pageControl.list=e.data,t.pageControl.total=e.totalCount):t.$message.error(e.message)})).catch((function(e){a.close(),t.$message.error(e||"获取公开信列表失败, 请稍后重试!")}))},pageChange:function(t){console.log(t),this.pageControl.page=t,this.loadData()}}},u=c,m=(a("b646"),a("e90a")),d=Object(m["a"])(u,r,n,!1,null,"44bab7a1",null);e["default"]=d.exports},"2afa":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-box"},[a("img",{attrs:{src:"//staticv2.hi2future.com/me2me/about.png",alt:""}})])}],o={data:function(){return{}},beforeMount:function(){},mounted:function(){},methods:{}},i=o,s=(a("1ebf"),a("e90a")),l=Object(s["a"])(i,r,n,!1,null,"5666ecf7",null);e["default"]=l.exports},"365c":function(t,e,a){"use strict";a.d(e,"e",(function(){return s})),a.d(e,"f",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return m})),a.d(e,"d",(function(){return d}));a("e18c");var r=a("82ae"),n=a.n(r);n.a.defaults.withCredentials=!0;var o=n.a.create({baseURL:"http://zsjustn.top:3000",timeout:8e3});o.interceptors.request.use((function(t){return console.log("config: ",t),t}),(function(t){return console.log(t),Promise.reject()})),o.interceptors.response.use((function(t){if(200===t.status)return t.data;Promise.reject()}),(function(t){return console.log(t),Promise.reject()}));var i=o,s=function(t){return i({url:"/send",method:"post",data:t})},l=function(t){return i({url:"/extract",method:"post",data:t})},c=function(t){return i({url:"/getPublicLetter",method:"get",params:t})},u=function(t){return i({url:"/getAllLetter",method:"get",params:t})},m=function(t){return i({url:"/byExtractGetEmail",method:"post",data:t})},d=function(t){return i({url:"/getQuestion",method:"get",params:t})}},"37f9":function(t,e,a){"use strict";a.r(e);var r,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-box"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"190px",size:"small","label-position":"left"}},[a("el-form-item",{attrs:{label:"您的昵称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请填写昵称, 将在邮件的标题中出现"},model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),a("el-form-item",{attrs:{label:"收件邮箱",prop:"email"}},[a("el-input",{attrs:{placeholder:"可以是你自己, 或是任何一个你想倾诉的人. 填写TA的邮箱地址, 形如 abc@163.com"},model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}})],1),a("el-form-item",{attrs:{label:"发信时间",required:""}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"date1"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{"picker-options":t.pickerOptions1,type:"date",placeholder:"选择日期"},model:{value:t.ruleForm.date1,callback:function(e){t.$set(t.ruleForm,"date1",e)},expression:"ruleForm.date1"}})],1)],1),a("el-col",{staticClass:"line",attrs:{span:2}},[t._v("-")]),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"date2"}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:t.ruleForm.date2,callback:function(e){t.$set(t.ruleForm,"date2",e)},expression:"ruleForm.date2"}})],1)],1)],1),a("el-form-item",{attrs:{label:"是否公开",prop:"type"}},[a("el-checkbox",{attrs:{label:'选中后, 信的内容将在"公开信"中展示, 所有人都可以浏览和评论'},model:{value:t.ruleForm.public,callback:function(e){t.$set(t.ruleForm,"public",e)},expression:"ruleForm.public"}})],1),a("div",{staticClass:"edit_container"},[a("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},change:function(e){return t.onEditorChange(e)}},model:{value:t.ruleForm.content,callback:function(e){t.$set(t.ruleForm,"content",e)},expression:"ruleForm.content"}})],1),a("el-form-item",[a("div",{staticClass:"verification-box"},[a("img",{staticStyle:{"margin-right":"20px"},attrs:{src:t.imgSrc},on:{click:t.changeImg}}),a("el-form-item",{attrs:{prop:"verificationCode"}},[a("el-input",{staticStyle:{width:"140px","margin-right":"20px"},attrs:{placeholder:"输入验证码"},model:{value:t.ruleForm.verificationCode,callback:function(e){t.$set(t.ruleForm,"verificationCode",e)},expression:"ruleForm.verificationCode"}})],1),a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("提交")])],1)])],1)],1)},o=[],i=(a("b4fb"),a("053b"),a("e35a"),a("0d7a"),a("b081")),s=(a("d283"),a("a0f8"),a("5d60")),l=a.n(s),c=(a("b0e8"),a("5478")),u=a.n(c),m=(a("7f51"),a("a188")),d=a.n(m),f=(a("a551"),a("8dab")),p=a.n(f),g=(a("a4ab"),a("9b37")),b=a.n(g),h=(a("8aba"),a("10f4")),v=a.n(h),x=a("b881"),C=(a("121a"),a("7e41"),a("96be"),a("365c")),F=a("7328"),_=a.n(F),$=a("2708"),w={components:(r={},Object(i["a"])(r,v.a.name,v.a),Object(i["a"])(r,b.a.name,b.a),Object(i["a"])(r,p.a.name,p.a),Object(i["a"])(r,d.a.name,d.a),Object(i["a"])(r,u.a.name,u.a),Object(i["a"])(r,l.a.name,l.a),Object(i["a"])(r,"quillEditor",x["quillEditor"]),r),mixins:[$["a"]],data:function(){return{pickerOptions1:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},ruleForm:{name:"",email:"",date1:"",date2:"",public:!1,content:"",verificationCode:""},rules:{name:[{required:!0,message:"请输入您的昵称",trigger:"blur"}],email:[{required:!0,message:"请输入收件邮箱",trigger:"blur"},{validator:this.validEmail,trigger:"blur"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{required:!1}],verificationCode:[{required:!0,message:"请输入验证码",trigger:"blur"}]},editorOption:{},imgSrc:"http://zsjustn.top:3000/captcha?"+(new Date).getTime()}},beforeMount:function(){},computed:{editor:function(){return this.$refs.myQuillEditor.quill},url:function(){return"http://zsjustn.top:3000"}},mounted:function(){},methods:{handleSelect:function(){},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;if(e.ruleForm.content){var a={name:e.ruleForm.name,receiptEmail:e.ruleForm.email,sendTime:e.jointDate(),isPublic:e.ruleForm.public,content:e.ruleForm.content,verificationCode:e.ruleForm.verificationCode};if(e.compareToNow(a.sendTime))return void e.$message("亲, 请选择未来时间发送!");var r=e.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(C["e"])(a).then((function(t){console.log(t),r.close(),t.statusCode?(e.$message({showClose:!0,message:"发送成功",type:"success"}),setTimeout((function(){e.$storage.write("email-data",t.data||{}),e.$router.push("extract")}),400)):e.$message.error(t.message)})).catch((function(t){r.close(),e.$message.error("发送失败, 请稍后重试")}))}else e.$message("请输入邮件内容")}))},resetForm:function(t){this.$refs[t].resetFields()},onEditorReady:function(t){},onEditorBlur:function(){},onEditorFocus:function(){},onEditorChange:function(){},changeImg:function(t){console.log(this.url),this.imgSrc=this.url+"/captcha?"+(new Date).getTime()},jointDate:function(){var t=_()(this.ruleForm.date1).format("YYYY-MM-DD HH:mm:ss").split(" ")[0],e=_()(this.ruleForm.date2).format("YYYY-MM-DD HH:mm:ss").split(" ")[1];return"".concat(t," ").concat(e)},compareToNow:function(t){var e=!1;return t&&(new Date).getTime()>new Date(t).getTime()&&(e=!0),e}}},E=w,y=(a("bd9f"),a("e90a")),D=Object(y["a"])(E,n,o,!1,null,"5d218780",null);e["default"]=D.exports},"4a82":function(t,e,a){"use strict";var r=a("8370"),n=a.n(r);n.a},"4d17":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"faq-box"},t._l(t.result,(function(e,r){return a("div",{key:r,staticClass:"like"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),a("div",{staticClass:"content",domProps:{innerHTML:t._s(e.content)}})])})),0)},n=[],o=a("365c"),i={data:function(){return{data:[],defData:[{title:"1. 我在这个网站写信，会不会泄露隐私啊？",content:"私密信件不会泄露，邮件发送是全自动运行，内部存储也有一定加密措施，防止泄露。<br/>\n当然，写信的时候勾选了“公开信”除外，公开信是所有人都能够阅读和评论的。公开信的邮件地址也是隐藏不显示的，不用担心泄露。"}]}},beforeMount:function(){},computed:{result:function(){return this.data.length?this.data:this.defData}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;Object(o["d"])().then((function(e){e.statusCode?t.data=e.data||[]:t.$message.error(e.message)})).catch((function(e){t.$message.error("获取常见问题失败, 请稍后重试")}))}}},s=i,l=(a("e666"),a("e90a")),c=Object(l["a"])(s,r,n,!1,null,"91726016",null);e["default"]=c.exports},"729f":function(t,e,a){"use strict";a.r(e);var r,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"extract-box"},[t.isSendSuccess?a("div",{staticClass:"message-box"},[a("span",[t._v(" 本页面将在 "),a("span",{staticClass:"error-msg"},[t._v(t._s(t.countDown))]),t._v(" 秒后过期 ")]),a("span",[t._v("在未来的某一天,")]),a("span",[t._v("我们将为你把邮件发送到你刚刚填写的邮箱中去")]),a("span",[t._v("或者,")]),a("span",[t._v("请保存你获得的提取码, 到期后即可手动提取")]),a("span",{staticClass:"important"},[t._v(t._s(t.extractCode))]),a("span",[t._v("将提取码发至以下邮箱(也可修改为他人的邮箱, 请朋友来领取):")]),a("span",[t._v("为确保收到我们的时光信,")]),t._m(0),a("el-form",{ref:"sendForm",staticClass:"send-success",attrs:{model:t.sendForm,rules:t.sendRules,size:"small","label-position":"left"}},[a("el-form-item",{staticStyle:{width:"40%"},attrs:{prop:"email"}},[a("el-input",{attrs:{placeholder:"请把提取码发送至这个邮箱"},model:{value:t.sendForm.email,callback:function(e){t.$set(t.sendForm,"email",e)},expression:"sendForm.email"}})],1),a("el-form-item",[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary"},on:{click:function(e){return t.submitForm("sendForm")}}},[t._v("发送")])],1)],1)],1):a("div",[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"190px",size:"small","label-position":"left"}},[a("el-form-item",{attrs:{label:"请填写提取码",prop:"extract"}},[a("el-input",{attrs:{placeholder:"输入曾经收到的提取码, 手工提取时光信件"},model:{value:t.ruleForm.extract,callback:function(e){t.$set(t.ruleForm,"extract",e)},expression:"ruleForm.extract"}})],1),a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary"},on:{click:function(e){return t.extract("ruleForm")}}},[t._v("我要提取")])],1)],1)],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v(" 最好将 "),a("span",{staticClass:"error-msg"},[t._v("1772591173@qq.com")]),t._v(" 放入邮箱白名单哦 ^_^ ")])}],i=(a("053b"),a("b081")),s=(a("a4ab"),a("a0f8"),a("9b37")),l=a.n(s),c=(a("8aba"),a("10f4")),u=a.n(c),m=a("365c"),d=a("2708"),f={components:(r={},Object(i["a"])(r,u.a.name,u.a),Object(i["a"])(r,l.a.name,l.a),r),mixins:[d["a"]],data:function(){return{ruleForm:{extract:""},rules:{extract:[{required:!0,message:"请输入您的提取码",trigger:"blur"}]},isSendSuccess:!1,sendForm:{email:""},sendRules:{email:[{required:!0,message:"请输入目标邮箱",trigger:"blur"},{validator:this.validEmail,trigger:"blur"}]},extractCode:"",countDown:100,interval:null}},beforeMount:function(){},mounted:function(){var t=this,e=this.$storage.read("email-data");console.log(e),e&&(this.isSendSuccess=!0,this.extractCode=e["extractCode"]||"",this.sendForm.email=e["receiptEmail"]||"",this.interval=setInterval((function(){t.countDown=t.countDown-1,t.countDown||(clearInterval(t.interval),t.$router.push("/"))}),1e3),this.$storage.remove("email-data"))},methods:{submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;var a={receiptEmail:e.sendForm.email,extract:e.extractCode},r=e.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(m["f"])(a).then((function(t){r.close(),t.statusCode?e.funcMessageBox():e.$message.error(t.message)})).catch((function(t){r.close(),e.$message.error("发送提取码失败, 请稍后重试")}))}))},extract:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;var a={extract:e.ruleForm.extract};Object(m["a"])(a).then((function(t){t.statusCode?(e.$storage.write("extract-data",t.data||{}),e.$router.push("public")):e.$message.error(t.message)})).catch((function(t){e.$message.error("发送提取码失败, 请稍后重试")}))}))},funcMessageBox:function(){var t=this.$createElement;this.$msgbox({title:"消息",message:t("p",{style:"display: flex;flex-direction: column;"},[t("span",null,"成功发送, 如果未能收到, 请"),t("span",{style:"margin-top: 20px"},"1. 确认邮箱地址正确;"),t("span",null,"2. 翻看垃圾箱"),t("span",null,"3. 稍后重试")]),showCancelButton:!1,confirmButtonText:"确定"})}},beforeDestroy:function(){console.log("********beforeDestroy********"),this.interval&&(clearInterval(this.interval),this.interval=null)}},p=f,g=(a("4a82"),a("e90a")),b=Object(g["a"])(p,n,o,!1,null,"067c8244",null);e["default"]=b.exports},"761a":function(t,e,a){},7905:function(t,e,a){},8370:function(t,e,a){},"856f":function(t,e,a){"use strict";a.r(e);var r,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"letters-box"},[a("el-table",{staticClass:"table-box",attrs:{data:t.pageControl.list}},[a("el-table-column",{staticStyle:{width:"100%"},attrs:{align:"center",prop:"name",label:"昵称",width:"120"}}),a("el-table-column",{attrs:{align:"center",prop:"receiptEmail",label:"email地址",width:"220"}}),a("el-table-column",{attrs:{align:"center",prop:"createTime",label:"创建时间",width:"220"}}),a("el-table-column",{attrs:{align:"center",prop:"sendTime",label:"收信时间",width:"220"}}),a("el-table-column",{attrs:{align:"center",prop:"statusText",label:"当前状态  "}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.pageControl.total},on:{"current-change":t.pageChange}})],1)],1)},o=[],i=(a("fe59"),a("053b"),a("e35a"),a("5e9f"),a("08ba"),a("b081")),s=(a("7ca6"),a("a0f8"),a("2cf5")),l=a.n(s),c=(a("014f"),a("06e9")),u=a.n(c),m=(a("d42b"),a("b110")),d=a.n(m),f=a("365c"),p=a("7328"),g=a.n(p),b={components:(r={},Object(i["a"])(r,d.a.name,d.a),Object(i["a"])(r,u.a.name,u.a),Object(i["a"])(r,l.a.name,l.a),r),data:function(){return{pageControl:{page:1,pageSize:10,list:[],total:0},statusTexts:["尚未寄送","已寄送"]}},beforeMount:function(){},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this,e={page:this.pageControl.page,pageSize:this.pageControl.pageSize},a=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(f["b"])(e).then((function(e){a.close(),e.statusCode?(t.pageControl.list=e.data,t.setField(),t.pageControl.total=e.totalCount):t.$message.error(e.message)})).catch((function(e){a.close(),t.$message.error(e||"获取邮件列表失败, 请稍后重试!")}))},pageChange:function(t){console.log(t),this.pageControl.page=t,this.loadData()},setField:function(){var t=this,e=this.pageControl.list;try{e.forEach((function(e){e.receiptEmail=e.receiptEmail.replace(/(\d{3})(\d+)(\d{0})/,(function(t,e,a,r){var n="";while(n.length<a.length)n+="*";return e+n+r})),e.createTime=g()(e.createTime).format("YYYY-MM-DD HH:mm"),e.sendTime=g()(e.sendTime).format("YYYY-MM-DD HH:mm"),e.statusText=t.statusTexts[e.status-1]}))}catch(a){console.log(a)}}}},h=b,v=(a("0d62"),a("e90a")),x=Object(v["a"])(h,n,o,!1,null,"6761cc24",null);e["default"]=x.exports},b646:function(t,e,a){"use strict";var r=a("c28c"),n=a.n(r);n.a},bd9f:function(t,e,a){"use strict";var r=a("7905"),n=a.n(r);n.a},c28c:function(t,e,a){},d0fe:function(t,e,a){},dcd2:function(t,e,a){},e666:function(t,e,a){"use strict";var r=a("d0fe"),n=a.n(r);n.a}}]);