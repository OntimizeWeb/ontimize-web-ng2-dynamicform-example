export const FORM: any = {
    "title": "Simple Form",
    "components": [
        {
            "label": "First Name",
            "attr": "firstName",
            "enabled": true,
            "validate": {
                "required": true,
                "minLength": 2,
                "maxLength": 10
            },
            "type": "o-text-input"
        },
        {
            "label": "Surname",
            "attr": "surname",
            "enabled": true,
            "validate": {
                "required": true,
                "minLength": 2,
                "maxLength": 10
            },
            "type": "o-text-input"
        }
    ]
};
