(() => {

    // No aplicando el principio de responsabilidad única

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
        name        : string;
        gender      : Gender;
        birthdate   : Date;
    }

    class User extends Person {
        public lastAccess   : Date;
        public email        : string;
        public role         : string;

        constructor({ 
            email, 
            role,
            gender,
            birthdate,
            name }: UserProps){
            super({name, gender, birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
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

    class UserSettings extends User {
        public workingDirectory : string;
        public lastOpenFolder   : string;

        constructor(
            {   workingDirectory,
                lastOpenFolder, 
                email, 
                role, 
                name, 
                gender, 
                birthdate } : UserSettingsProps 
        ){
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder
        }
    }
    

    const userSettings = new UserSettings({        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'dramirez@roshka.com',
        role: 'Admin',
        name: 'David',
        gender: 'M',
        birthdate: new Date('1995-03-14')
    })

    console.log(userSettings);



})();