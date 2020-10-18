const readTextFile = (file, callBack) => {
    let rawFile = new XMLHttpRequest();

    rawFile.overrideMimeType("application/json");
    rawFile.open('GET', file, true);
    
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4 && rawFile.status == '200') {
            callBack(rawFile.responseText);
        }
    };
    rawFile.send(null);
}