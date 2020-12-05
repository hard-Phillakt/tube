
const timer = (time, func) => {
    setTimeout(() => (func()), time);
}; 

export default timer;