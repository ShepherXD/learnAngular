export function notify():void{
    if (Notification.permission === "granted") {
        let notification = new Notification('您的理智已回满',{
            body: '扣 扣 哒 哟'
        })
    }
    else {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                let notification = new Notification('您的理智已回满', {
                    body: '扣 扣 哒 哟'
                })
            }}
        );
    }
}