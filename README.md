# Edtech Frontend Project

This is the repository for frontend code.



## 🚀 Getting Started

1. Clone this repository:
   ```bash
   https://github.com/Gmishra2000/react-dynamic-form-generator
   ```

2. Navigate to Project and do `npm i`.

3. Then run command npm run dev to open this project in your browser.

4. To View the live Demo of the working visit
  ```bash
   https://react-dynamic-form-generator.netlify.app/
   ```

5. Working of this project is like :- 
  1) We have two Panel left and right
    -- From left Panel dropdown you can select type of field you need
    -- In right you can view all the respective html form of it
  2) You can either Upload the Json form structure you have created and it will generate dynamic form for you
  3) Json structure to be followed
  4)
  ```json 
[
  {
    "id": "name",
    "label": "Name",
    "type": "text",
    "validation": {
      "required": true,
      "minLength": "2",
      "maxLength": "19"
    }
  },
  {
    "id": "education",
    "label": "Education",
    "type": "select",
    "options": [
      "Hsc",
      "Diploma",
      "Graduate"
    ],
    "validation": {
      "required": true
    }
  },
  {
    "id": "checkbox",
    "label": "I have a bike",
    "type": "checkbox",
    "validation": {
      "required": true
    }
  },
  {
    "id": "radio",
    "label": "Radio Button",
    "type": "radio",
    "options": [
      "true",
      "false",
      "not sure"
    ],
    "validation": {
      "required": true
    }
  },
  {
    "id": "file",
    "label": "Upload file",
    "type": "file",
    "validation": {
      "required": true,
      "allowedTypes": [
        "jpg",
        "png",
        "zip"
      ],
      "maxSize": 4
    }
  },
  {
    "id": "text",
    "label": "TextArea",
    "type": "textarea",
    "validation": {
      "required": false,
      "minLength": "2",
      "maxLength": "100"
    }
  }
]
```

**Happy Coding!** ✨

---

_Made by Chandan Mishra _