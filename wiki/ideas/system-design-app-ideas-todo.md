# System Design Apps ToDo
## By Subject
Load Balancing
- Level 4 - Transport Layer: Nginx Service-> Node.js API
- Level 7 - Application Layer: Node.js Service -> Node.js API

Caching
- Nginx -> Node.js API -> Database
- Node.js -> Redis
          -> Node.js -> Database
- Nginx -> Node.js -> Redis
                   -> Database