(()=>{"use strict";function t(t,e,s){const i=document.documentElement,n="data-outside";function o(a){t.contains(a.target)||(t.removeAttribute(n),e.forEach((t=>{i.removeEventListener(t,o)})),s())}t.hasAttribute(n)||(e.forEach((t=>{setTimeout((()=>i.addEventListener(t,o)))})),t.setAttribute(n,""))}class e{constructor(t,e,s){this.numeros=document.querySelectorAll(t),this.observertarget=document.querySelector(e),this.observerClass=s,this.handleMutation=this.handleMutation.bind(this)}static incremetarNumero(t){const e=+t.innerText,s=Math.floor(e/100);let i=0;const n=setInterval((()=>{i+=s,t.innerText=i,i>e&&(t.innerText=e,clearInterval(n))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>this.constructor.incremetarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observertarget,{attributes:!0})}init(){return this.numeros.length&&this.observertarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionLista=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionLista.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionLista.length&&this.addAccordionEvent(),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){const e=this.tabContent[t].dataset.anime;this.tabContent.forEach((t=>{t.classList.remove(this.activeClass,e)})),this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init(),new class{constructor(t,e,s){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(s),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickFora=this.clickFora.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}clickFora(t){t.target===this.containerModal&&this.toggleModal()}addModalEvent(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickFora)}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvent(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,window.innerWidth-t.pageX<210?this.tooltipBox.style.left=t.pageX-185+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}criarTooltipBox(t){const e=document.createElement("div"),s=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=s,document.body.appendChild(e),this.tooltipBox=e}onMouseOver({currentTarget:t}){this.criarTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addTooltipEvents(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipEvents(),this}}("[data-tooltip]").init(),new class{constructor(t,e){this.dropdownMenus=document.querySelectorAll(t),this.events=void 0===e?["touchstart","click"]:e,this.activeClass="active",this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}activeDropdownMenu(e){e.preventDefault();const s=e.currentTarget;s.classList.add(this.activeClass),t(s,this.events,(()=>{s.classList.remove("active")}))}addDropdownMenusEvent(){this.dropdownMenus.forEach((t=>{this.events.forEach((e=>{t.addEventListener(e,this.activeDropdownMenu)}))}))}init(){return this.dropdownMenus.length&&this.addDropdownMenusEvent(),this}}("[data-dropdown]").init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.activeClass="ativo",this.halfWindow=.9*window.innerHeight,this.checkDistance=function(t,e){let s;return(...e)=>{s&&clearTimeout(s),s=setTimeout((()=>{t(...e),s=null}),10)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.halfWindow)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset?t.element.classList.add(this.activeClass):t.element.classList.contains(this.activeClass)&&t.element.classList.remove(this.activeClass)}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}('[data-anime="scroll"]').init(),new class{constructor(t,e,s){this.menuButton=document.querySelector(t),this.menuList=document.querySelector(e),this.activeClass="active",this.events=void 0===s?["touchstart","click"]:s,this.openMenu=this.openMenu.bind(this)}openMenu(){this.menuList.classList.toggle(this.activeClass),this.menuButton.classList.toggle(this.activeClass),t(this.menuList,this.events,(()=>{this.menuList.classList.remove(this.activeClass),this.menuButton.classList.remove(this.activeClass)}))}addMenuMobileEvents(){this.events.forEach((t=>this.menuButton.addEventListener(t,this.openMenu)))}init(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}('[data-menu = "button"]','[data-menu = "list"]').init(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),s=t.dataset.horario.split(",").map(Number),i=new Date,n=i.getDay(),o=i.getHours(),a=-1!==e.indexOf(n),r=o>=s[0]&&o<s[1];a&&r&&t.classList.add("aberto")}(),function(t,s){const i=document.querySelector(".numeros-grid");!async function(){try{const t=await fetch("animaisapi.json");(await t.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.Especie}</h3>\n    <span data-numero>${t.Total}</span>`,e}(t);i.appendChild(e)}(t))),new e("[data-numero]",".numeros","ativo").init()}catch(t){console.log(t)}}()}(),function(t,e){const s="https://blockchain.info/ticker",i=document.querySelector(".btc-preco");i&&async function(){try{const t=await fetch(s),e=await t.json();i.innerText=`${e.BRL.symbol} ${(200/e.BRL.buy).toFixed(6)}`}catch(t){console.log(t)}}()}()})();