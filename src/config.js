import Vue from "vue";

Vue.prototype.setSStorage = (key, value) => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
}

Vue.prototype.getSStorage = key => {
    let val = window.sessionStorage.getItem(key);
    if (val == "undefined" || val == "null") {
        return null;
    }
    else {
        try {
            return JSON.parse(val);
        }
        catch{
            return val;
        }
    }
}

Vue.prototype.setLStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

Vue.prototype.clearSStorage = () => {
    window.sessionStorage.clear();
}

Vue.prototype.clearLStorage = () => {
    window.localStorage.clear();
}

Vue.prototype.getLStorage = key => {
    let val = window.localStorage.getItem(key);
    if (val == "undefined" || val == "null") {
        return null;
    }
    else {
        try {
            return JSON.parse(val);
        }
        catch{
            return val;
        }
    }
}