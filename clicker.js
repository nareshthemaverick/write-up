function setDetails(name,link){
    localStorage.setItem('name',name)
    localStorage.setItem('link',link)
    location.replace('/video.html')
}