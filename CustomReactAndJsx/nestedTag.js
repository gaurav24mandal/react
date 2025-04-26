const container = document.querySelector('#root');
function createEle(type, props,children){
         const reactObj ={
               tag : type,
               prop : props,
               children :children
                     } 
                     return reactObj
                }
  
    
     function render(createEle){
                   const   reactElem = document.createElement(createEle.tag);
                      for (const prop in createEle.prop) {
                        if(prop ==='children') continue ;
                   else
                    {
                      reactElem.setAttribute(prop,createEle.prop[prop])
                    }
                   
                  
                     }
                     if(typeof createEle.children === 'string'){
                        reactElem.appendChild(document.createTextNode(createEle.children));
                           
                     }
                      else if(typeof createEle.children === 'object' && !Array.isArray(createEle.children)){
                          reactElem.appendChild(render(createEle.children))
                           
                      }
                      else if(Array.isArray(createEle.children)){
                         createEle.children.forEach(children => {
                            if(typeof children === 'string'){
                                reactElem.appendChild(document.createTextNode(children));
                            }
                            else{
                                reactElem.appendChild(render(children))
                            }
                             
                               
                         }) 
                       
                     }
                     return reactElem
                      
                }
    

                container.appendChild(render(createEle('div', { id: 'container' }, [
                    'This is some text before ',
                    createEle('span', { class: 'highlight',style:"color: blue" }, 'this part is highlighted'),
                    ' and this is after the span.'
                  ])
                  
                  
          ))
            
