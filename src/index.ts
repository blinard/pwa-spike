import { NotificationManager } from "./NotificationManager.js";

function Bootstrap(): void {
    window.onload = () => {
        const index = new Index(new NotificationManager());
        index.load();
    };
}

Bootstrap();

export class Index {
    constructor(private notificationManager: NotificationManager) { }

    public load(): void {
        const btnShowNotification = document.getElementById("btnShowNotification");
        if (!btnShowNotification) return;
        btnShowNotification.onclick = this.btnShowNotification_onClick.bind(this);
    }

    private btnShowNotification_onClick(): void {
        this.notificationManager.showNotification("Yo", "Wazzup?!");
    }

}
