class JsonForm {
    constructor() {
        this.formObj = [
            {
                "form_element": "input",
                "optional": false,
                "type": "text",
                "label": "First name",
                "place_holder": "Enter First Name",
                "icon": ""
            },
            {
                "form_element": "input",
                "optional": false,
                "type": "text",
                "label": "Last name",
                "place_holder": "Enter Last Name",
                "icon": ""
            },
            {
                "form_element": "input",
                "optional": false,
                "type": "text",
                "label": "Username",
                "place_holder": "UserName",
                "icon": "@"
            },
            {
                "form_element": "input",
                "optional": true,
                "type": "text",
                "label": "Email (Optional)",
                "place_holder": "Enter First Name",
                "icon": ""
            },
            {
                "form_element": "input",
                "optional": false,
                "type": "text",
                "label": "Address",
                "place_holder": "1234 Main St",
                "icon": ""
            },
            {
                "form_element": "input",
                "optional": true,
                "type": "text",
                "label": "Address 2",
                "place_holder": "1234 Main St",
                "icon": ""
            },
            {
                "form_element": "input",
                "optional": true,
                "type": "dropdown",
                "options": [
                    {
                        "label": "Country A",
                        "value": 1
                    },
                    {
                        "label": "Country A",
                        "value": 1
                    },
                    {
                        "label": "Country B",
                        "value": 1
                    },
                    {
                        "label": "Country C",
                        "value": 1
                    },
                    {
                        "label": "Country D",
                        "value": 1
                    }
                ],
                "label": "Country",
                "place_holder": "Choose...",
                "icon": ""
            },
            {
                "form_element": "input",
                "optional": true,
                "type": "dropdown",
                "options": [
                    {
                        "label": "State A",
                        "value": 1
                    },
                    {
                        "label": "State A",
                        "value": 1
                    },
                    {
                        "label": "State B",
                        "value": 1
                    },
                    {
                        "label": "State C",
                        "value": 1
                    },
                    {
                        "label": "State D",
                        "value": 1
                    }
                ],
                "label": "State",
                "place_holder": "Choose...",
                "icon": ""
            },
            {
                "form_element": "input",
                "optional": true,
                "type": "text",
                "label": "Zip",
                "place_holder": "",
                "icon": ""
            }
        ]
    }

    HtmlStructure() {
        this.formObj.forEach(obj => {
            let formHtml = document.createElement(obj['form_element']);
            let formLabel = document.createElement('p');
            formLabel.innerText = String(obj['label']+":");

            formHtml.setAttribute("type", obj['type']);
            formHtml.setAttribute("placeholder", obj['place_holder']);
            formHtml.setAttribute("class", 'form-control');
            formHtml.setAttribute("name", obj['label']);
            console.log(formHtml);

            let blockElement = document.createElement('div');
            blockElement.setAttribute('class', 'input-group mb-3');
            
            let input_group = document.createElement('div');
            input_group.setAttribute('class', 'input-group-prepend');
            
            let span = document.createElement('span');
            span.setAttribute('class', 'input-group-text');
            span.innerText = obj['icon'];
            if(obj['icon'].length>0) input_group.appendChild(span);

           
            blockElement.appendChild(input_group);

            if(obj['type'] == 'dropdown'){
                formHtml = document.createElement('select');
                formHtml.setAttribute("class", 'custom-select');
                obj['options'].forEach(option=>{
                    let optionEle = document.createElement('option');
                    optionEle.setAttribute('value',option['value']);
                    optionEle.innerText = option['label'];
                    formHtml.appendChild(optionEle);
                })
            }
            
            blockElement.appendChild(formHtml);
            document.getElementById('formEle').appendChild(formLabel);
            document.getElementById('formEle').appendChild(blockElement);

        })
    }
}

let jsonDataObj = new JsonForm();
jsonDataObj.HtmlStructure();