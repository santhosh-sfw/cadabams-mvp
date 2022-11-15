let API = {
    TEST:"http://192.168.1.60:8074/appointment/",
    DASHBOARD: "https://dev-cadambams-crm.p7devs.com/appointment",
    FORM: "http://127.0.0.1:8000/form",
    FORMFIELD: {
        GET: "http://127.0.0.1:8000/forms/field?formId=",
        DEFAULT: "http://127.0.0.1:8000/forms/field"
    },
    FORMDATA: {
        GET: "http://127.0.0.1:8000/forms/data?formId=",
        DEFAULT: "http://127.0.0.1:8000/forms/data",
        GETINDVIDUAL: "http://127.0.0.1:8000/forms/data?dataId=",
        DELETE: "http://127.0.0.1:8000/forms/datas",
    },



}
module.exports = {
    API
};
