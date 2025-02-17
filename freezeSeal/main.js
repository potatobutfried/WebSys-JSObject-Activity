const user = {
    userid: 'user123',
    personalInfo: {
        firstName:'John',
        lastname:'Doe',
        email:'john.doe@example.com'
    },
    preferences:{
        theme: 'light',
        notificationEnabled: true
    },
    securitySettings:{
        lastLogin:'2024-07-04',
        isAccountActive: true
    }
     
};
//Object freeze user id
Object.freeze(user);
user.userid = '001';
console.log(user.userid);

//Object Seal email
Object.seal(user.personalInfo);
user.personalInfo.email = 'jeremysabino75@gmail.com';
console.log(user.personalInfo.email);
Object.seal(user.personalInfo);
user.personalInfo.firstName = 'jeremy';
console.log(user.personalInfo.firstName);
Object.seal(user.personalInfo);
user.personalInfo.lastname = 'sabino';
console.log(user.personalInfo.lastname);
delete user.personalInfo.email;


//object seal preferences
Object.seal(user.preferences);
user.preferences.theme = 'dark',
console.log(user.preferences.theme);

//object seal preferences
Object.seal(user.securitySettings);
user.preferences.notificationEnabled = false
console.log(user.preferences.notificationEnabled);

//date
Object.seal(user.securitySettings);
user.securitySettings.lastLogin = "2024-09-23"
console.log(user.securitySettings.lastLogin);

//security setting is account active
Object.seal(user.securitySettings);
user.securitySettings.isAccountActive = false
console.log(user.securitySettings.isAccountActive);
