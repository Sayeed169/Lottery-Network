var moderators = [];
var participants = [];

function user(fname, lname, balance, email, password){
    this.fname = fname;
    this.lname = lname;
    this.balance = balance;
    this.email = email;
    this.password = password;
}

function createModerator(fn, ln, bal, email, pass){
    var moderator = new user(fn, ln, bal, email, pass);
    moderators.push(moderator);
}

function getModeretors(){
    return moderators;
}

function createParticipaint(fn, ln, bal, email, pass){
    var participant = new user(fn, ln, bal, email, pass);
    participants.push(participant);
}

function getParticipaints(){
    return participants;
}