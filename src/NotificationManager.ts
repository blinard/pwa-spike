declare let Notification: any;

export class NotificationManager {
    constructor() { }

    public showNotification(title: string, text: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!Notification || Notification.permission === "denied") {
                reject();
                return;
            }

            if (Notification.permission === "granted") {
                const blah = new Notification(title, { body: text });
                resolve();
                return;
            }

            return Notification.requestPermission((permission: string) => {
                if (permission === "granted") {
                    const blah2 = new Notification(title, { body: text });
                    return resolve();
                }

                return reject();
            });
        });
    }
}
