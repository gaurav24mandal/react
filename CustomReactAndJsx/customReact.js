const container = document.getElementById('root');
 function customReact(reactElem,container){
         const dom  = document.createElement(reactElem.type)
               dom.innerHTML = reactElem.children
            //    dom.setAttribute('href',reactElem.props.href);
            //    dom.setAttribute('target',reactElem.props.target)
            for (const prop in reactElem.props) {
                if(prop === 'children')continue;
                dom.setAttribute(prop,reactElem.props[prop])
             }
          container.appendChild(dom);
           
 }
const reactElem = {
    type : 'a',
    props:{
         href: 'https://github.com/gaurav24mandal/react',
         target :'_blank',
    },
    children :"click here to git hub link"
}
customReact(reactElem,container)
