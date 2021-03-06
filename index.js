let fetch = require("unfetch").default;
import AsyncStorage from "@callstack/async-storage";
const bt = require('./bullet-train-core');
const bulletTrain = bt({AsyncStorage, fetch});
if (typeof window !== "undefined") {
    window.bulletTrain = bulletTrain;
}
export default bulletTrain;
