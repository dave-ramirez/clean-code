(() => {

    // Aplicando el principio de responsabilidad única
    // Priorizar la composicion frente a la herencia
    
    type Gender = 'M'|'F';

    interface PersonProps {
        name        : string;
        gender      : Gender;
        birthdate   : Date;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate}: PersonProps){
            this.birthdate  = birthdate;
            this.gender     =  gender;
            this.name       = name;
        }
    }

    interface UserProps {
        email       : string;
        role        : string;
    }

    class User {
        public lastAccess   : Date;
        public email        : string;
        public role         : string;

        constructor({ email, role }: UserProps){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory    : string;
        lastOpenFolder      : string;
    }

    class Settings {
        public workingDirectory : string;
        public lastOpenFolder   : string;

        constructor({ workingDirectory, lastOpenFolder } : SettingsProps 
        ){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder
        }
    }

    interface UserSettingsProps {
        workingDirectory    : string;
        lastOpenFolder      : string;
        email               : string;
        role                : string;
        name                : string;
        gender              : Gender;
        birthdate           : Date;
    }


    class UserSettings {
        public person   : Person;
        public user     : User;
        public settings : Settings;

        constructor(
            {
                name, gender, birthdate,
                email, role,
                lastOpenFolder, workingDirectory
            }: UserSettingsProps
        ){
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings( { lastOpenFolder, workingDirectory });
        }
    }

    const userSettings = new UserSettings({        
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'dramirez@roshka.com',
        role: 'Admin',
        name: 'David',
        gender: 'M',
        birthdate: new Date('1995-03-14')
    })

    console.log(userSettings);



})();