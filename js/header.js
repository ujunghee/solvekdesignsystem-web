document.addEventListener('DOMContentLoaded', () => {

  function headeractive() {
    const onedepthItem = document.querySelectorAll('.onedepth-item')
    const submenuList = document.querySelectorAll('.submenu-list')

    onedepthItem.forEach(item => {
      item.addEventListener('mouseenter', () => {
        submenuList.forEach(submenu => {
          submenu.classList.add('active')
          submenu.style.height = "22rem"
          submenu.style.visibility = "visible"
          submenu.style.pointerEvents = "auto"
        })
      })
      item.addEventListener('mouseleave', () => {
        submenuList.forEach(submenu => {
          submenu.classList.remove('active')
          submenu.style.height = "0px"
          submenu.style.visibility = "hidden"
          submenu.style.pointerEvents = "none"
        })
      })
    })
  }


  headeractive()
})