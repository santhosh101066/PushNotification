const pubkey='BDS5CeDiIo0CJABbTM_gAc1j4fzNyC0K32vHC5WSrOAwQcgFXctxfMpgb7zwiWVy7dcb9n9Bb04C3q8X7KfmQfM'
function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
} 
async function send(){
    const register=await navigator.serviceWorker.register('/worker.js',{scope:'/'})
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey:urlBase64ToUint8Array(pubkey)
    })
    await fetch("/subscribe",{method:'POST',body:JSON.stringify(subscription),headers:{"content-type":'application/json'}})
}function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
} 