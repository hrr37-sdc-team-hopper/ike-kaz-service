# kazshige-service


|  Request Type  | Endpoint |  POST Body | Result |
| -------------- | -------- | ---------- | ------ |
|  GET | /get| empty | Returns all entries|
|  GET | /get/:id | empty | Return entry for one item |
| POST | /post | JSON | New entries created |
| DELETE | /delete/:id | empty | Delete entry for one item |
| PUT | /put/:id | JSON  | Updates an existing entry for one item|