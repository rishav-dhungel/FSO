
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET Content for the note application (https://studies.cs.helsinki.fi/exampleapp/)
    activate server
    server-->>browser: HTML document (main.css, main.js,data.json)
    deactivate server
    Note right of browser: The page is loaded in the browser

    browser->>server:

```