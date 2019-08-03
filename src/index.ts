import { NotificationManager } from "./NotificationManager.js";

function Bootstrap(): void {
    window.onload = () => {
        const index = new Index(new NotificationManager());
        index.load();
    };

    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.register("sw.js")
        .then(console.log)
        .catch(console.error);
}

Bootstrap();

export class Index {
    constructor(private notificationManager: NotificationManager) { }

    public load(): void {
        const btnShowNotification = document.getElementById("btnShowNotification");
        if (btnShowNotification) {
            btnShowNotification.onclick = this.btnShowNotification_onClick.bind(this);
        }

        const btnAboutPage = document.getElementById("btnAboutPage");
        if (btnAboutPage) {
            btnAboutPage.onclick = this.btnAboutPage_onClick.bind(this);
        }
    }

    private btnShowNotification_onClick(): void {
        this.notificationManager.showNotification("Yo", "Wazzup?!");
    }

    private btnAboutPage_onClick(): void {
        window.open("about.html");
    }
}
