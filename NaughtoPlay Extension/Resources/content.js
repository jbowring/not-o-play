function disableAutoPlay() {
    console.log('running disableAutoPlay')
    for(control of document.getElementsByClassName('ytp-right-controls')){
        button = control.querySelector('button[data-tooltip-target-id="ytp-autonav-toggle-button"]')
        if(button !== null) {
            for(div of button.getElementsByClassName('ytp-autonav-toggle-button')) {
                if(div !== null) {
                    status = div.getAttribute('aria-checked')
                    if(status !== null) {
                        if(status === 'true') {
                            button.click()
                        }
                        if(div.getAttribute('aria-checked') === 'false') {
                            return
                        }
                    }
                }
            }
        }
    }
    setTimeout(disableAutoPlay, 5000)
}

disableAutoPlay()
