import('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js').then(() => { console.log(_.VERSION);
});
console.log("Hello World");
window.ConvertToJson = () => {
    console.log("convert to json")
    const inputs_node_list = Array.from(document.getElementsByTagName("input"));
    const json_data = {}
    inputs_node_list.map((input, number) => {
        const name = input.name
        const value = input.value
        const validity = input.validity.valid
        json_data[name] = {
            value: value,
            valid: validity
        }
    })
    const json_str =  JSON.stringify(json_data, null, 2);
    document.getElementById("json_result").value = json_str;
    console.log(fetch(`http://localhost:8080/storage/json`,{
        method: "POST",
        mode: "cors",
        headers: { "Content-Type" : "application/json" },
        body: json_str,
    }).then(res => res.json()).then(i=> console.log(i)))
};
