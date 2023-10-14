const ShareButtons = document.querySelectorAll('.tile-share-button')
console.log(ShareButtons)

async function copyText(e) {
//prevent button from going to site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        navigator.clipboard.writeText(link)
        //alert("Copied the Text:" + link)
    } catch (err) {
        console.error(err)
    }
}

ShareButtons.forEach(ShareButtons => 
    ShareButtons.addEventListener('click' , copyText))