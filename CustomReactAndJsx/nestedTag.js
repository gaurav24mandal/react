const container = document.querySelector('#root');
function createEle(type, props,children){
         const reactObj ={
               tag : type,
               prop : props,
               children :children
                     } 
                     return reactObj
                }
  
    
     function render(createEle,container){
                   const   reactElem = document.createElement(createEle.tag);
                      for (const prop in createEle.prop) {
                        if(prop ==='children') continue ;
                   else
                    {
                      reactElem.setAttribute(prop,createEle.prop[prop])
                    }
                   
                  
                     }
                     if(typeof createEle.children === 'string'){
                          reactElem.innerHTML = createEle.children;
                            return reactElem
                     }
                      else if(typeof createEle.children === 'object' && !Array.isArray(createEle.children)){
                          reactElem.appendChild(render(createEle.children,reactElem))
                            return reactElem
                      }
                      else if(Array.isArray(createEle.children)){
                         createEle.children.forEach(children => {
                             reactElem.appendChild(render(children,reactElem))
                               
                         }) 
                       return reactElem
                     }
                      
                }
    

                container.appendChild(render(createEle('div', { id: 'root' }, [
                    createEle('a', { href: 'https://example.com', target: '_blank' }, 'Link to Example'),
                    createEle('p', {}, 'Some paragraph text here.')
                  ])
                  
                  
                      ))
            
