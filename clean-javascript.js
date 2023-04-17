//* Reduced Size (Single-responsibility principle)

class UserAuth {
    constructor(user) {
        this.user = user;
    }

    verifyCredentials() {
        return false;
    }
}

class UserSettings extends UserAuth {
    constructor(user, settings) {
        super(user);
        this.settings = settings;
    }

    changeSetting(settings) {
        if (this.verifyCredentials()) {
            console.log('Can modify its settings');
        } else {
            console.log('It has not access');
        }
    }
}

const newAccess = new UserSettings('Jona', 'Dark Mode');
newAccess.changeSetting();

// class UserSettings {
//     constructor(user, settings) {
//         this.user = user;
//         this.settings = settings;
//     }

//     changeSettings(settings) {
//         if (this.verifyCredentials()) {
//         }
//     }

//     verifyCredentials() {}
// }