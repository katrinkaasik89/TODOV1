exports.getTodayDateLong= function(){

    let today = new Date();

    let options = { 
        weekday: 'long',
        day: 'numeric',
        month: 'long'

    }

    let day = today.toLocaleDateString('en-US', options);
    return day; // ainult tagastamine v6imaldab salvestamist ja edasi kasutada seda
}
exports.getTodayDateShort= function(){

    let today = new Date();

    let options = { 
        
        day: 'numeric',
        month: 'long'

    }

    let day = today.toLocaleDateString('en-US', options);
    return day; // ainult tagastamine v6imaldab salvestamist ja edasi kasutada seda
}


