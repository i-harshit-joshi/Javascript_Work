const displayTime = document.getElementById("displayTime");
const buttons = document.querySelectorAll(".buttons img");
    
    let timer = null;
    let [seconds, minutes, hours] = [0, 0, 0];
    
    buttons.forEach(button=>{
    
        button.addEventListener("click", () => {
            if (button.id === "play") {
                startWatch();
            } else if (button.id === "stop") {
                watchStop();
            } else if (button.id === "reset") {
                resetWatch();
            }
        });
    
    }); 
    
    function stopWatch() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        displayTime.innerHTML = h + ":" + m + ":" + s;
        
    }
    
    function startWatch() {
        if (timer !== null) {
            clearInterval(timer);
        }
        timer = setInterval(stopWatch, 1000);
    }
    
    function watchStop() {
        clearInterval(timer);
    }
    
    function resetWatch() {
        clearInterval(timer);
        [seconds, minutes, hours] = [0, 0, 0];
        displayTime.innerHTML = "00:00:00";
    }
