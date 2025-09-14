      const imageUrls = [
                "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
                "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
                "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            ]
            const container = document.querySelector(".container")
            const tempDom = document.createDocumentFragment()


            imageUrls.forEach((url,index)=>{
                createImages(url,index)
            })

            container.appendChild(tempDom)

            function createImages(url,index){
                const div = document.createElement("div")
                div.setAttribute("class","image")
                if(index===0){
                    div.classList.add("active")
                }
                div.addEventListener("click",()=>expandCard(div))
                div.style.backgroundImage = `url(${url})`

                tempDom.appendChild(div)

            }

            function expandCard(divElement){
                console.log(divElement,'is clicked')
                allDivShrink()
                divElement.style.flex = 4
            }

            function allDivShrink(){
                const divs = document.querySelectorAll(".image")

                for(let div of divs){
                    div.style.flex = 1
                }
            }