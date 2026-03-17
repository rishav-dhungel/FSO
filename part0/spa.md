```mermaid

sequenceDiagram
    participant browser
    participant server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document (SPA page)
    deactivate server

    browser->>server: GET main.css
    browser->>server: GET spa.js

    browser->>server: GET data.json
    activate server
    server-->>browser: JSON data (notes)
    deactivate server


```