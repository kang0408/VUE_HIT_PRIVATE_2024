function logger(content = "Hello world!") {
    console.log(content);
    const thao = 6;
    const khang = 4;
    const canh = 11;
    return {
        canh,
        khang,
        thao, 
    }
}

const a = 12;

export { logger, a};
// export default logger;